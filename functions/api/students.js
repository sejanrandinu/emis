// Cloudflare Pages D1 API for Students — CRUD + Class Rank

export async function onRequest(context) {
    const { request, env } = context;
    const db = env.DB;

    if (!db) {
        return new Response(JSON.stringify({ error: "Database binding 'DB' not found." }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }

    const url = new URL(request.url);
    const classId = url.searchParams.get("classId");
    const admissionNo = url.searchParams.get("admissionNo");
    const getRank = url.searchParams.get("rank");

    // Handle GET - Retrieve students with class details
    if (request.method === "GET") {
        try {
            // --- Rank query: GET /api/students?admissionNo=X&rank=true ---
            if (admissionNo && getRank === "true") {
                const student = await db.prepare(
                    "SELECT classId FROM students WHERE LOWER(admissionNo) = LOWER(?)"
                ).bind(admissionNo.trim()).first();

                if (!student) {
                    return new Response(JSON.stringify({ error: "student_not_found" }), {
                        status: 404,
                        headers: { "Content-Type": "application/json" }
                    });
                }

                // Get class size
                const classSizeRow = await db.prepare(
                    "SELECT COUNT(*) as count FROM students WHERE classId = ?"
                ).bind(student.classId).first();
                const classSize = classSizeRow ? classSizeRow.count : 0;

                // Rank students by their overall average across all terms (only students with marks)
                const { results: rankedStudents } = await db.prepare(`
                    SELECT s.admissionNo, AVG(m.score) as avg_score
                    FROM students s
                    INNER JOIN marks m ON s.admissionNo = m.admissionNo
                    WHERE s.classId = ?
                    GROUP BY s.admissionNo
                    ORDER BY avg_score DESC
                `).bind(student.classId).all();

                const rankIndex = rankedStudents.findIndex(
                    s => s.admissionNo.toLowerCase() === admissionNo.trim().toLowerCase()
                );

                const rankData = {
                    rank: rankIndex >= 0 ? rankIndex + 1 : null,
                    totalRanked: rankedStudents.length,
                    classSize: classSize,
                    avgScore: rankIndex >= 0 ? Math.round(rankedStudents[rankIndex].avg_score) : null
                };

                return new Response(JSON.stringify(rankData), {
                    headers: { "Content-Type": "application/json" }
                });
            }

            // --- Single student lookup: GET /api/students?admissionNo=X ---
            if (admissionNo) {
                const student = await db.prepare(
                    `SELECT s.admissionNo, s.name, s.classId, c.name as className
                     FROM students s
                     LEFT JOIN classes c ON s.classId = c.id
                     WHERE LOWER(s.admissionNo) = LOWER(?)`
                ).bind(admissionNo.trim()).first();

                if (!student) {
                    return new Response(JSON.stringify({ error: "student_not_found" }), {
                        status: 404,
                        headers: { "Content-Type": "application/json" }
                    });
                }
                return new Response(JSON.stringify(student), {
                    headers: { "Content-Type": "application/json" }
                });

            // --- Students by class: GET /api/students?classId=X ---
            } else if (classId) {
                const { results } = await db.prepare(
                    "SELECT * FROM students WHERE classId = ? ORDER BY name ASC"
                ).bind(classId).all();
                return new Response(JSON.stringify(results), {
                    headers: { "Content-Type": "application/json" }
                });

            // --- All students: GET /api/students ---
            } else {
                const { results } = await db.prepare(
                    `SELECT s.admissionNo, s.name, s.classId, c.name as className
                     FROM students s
                     LEFT JOIN classes c ON s.classId = c.id
                     ORDER BY s.admissionNo ASC`
                ).all();
                return new Response(JSON.stringify(results), {
                    headers: { "Content-Type": "application/json" }
                });
            }
        } catch (err) {
            return new Response(JSON.stringify({ error: err.message }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }
    }

    // Handle POST - Create a new student
    if (request.method === "POST") {
        try {
            const body = await request.json();
            const { admissionNo, name, classId } = body;

            if (!admissionNo || !admissionNo.trim() || !name || !name.trim() || !classId) {
                return new Response(JSON.stringify({ error: "fields_empty" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }

            const cleanNo = admissionNo.trim();
            const cleanName = name.trim();

            // Validate that classId actually exists
            const classCheck = await db.prepare("SELECT id FROM classes WHERE id = ?").bind(classId).first();
            if (!classCheck) {
                return new Response(JSON.stringify({ error: "class_not_found" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }

            // Check if admission number is already taken
            const existing = await db.prepare("SELECT admissionNo FROM students WHERE LOWER(admissionNo) = LOWER(?)").bind(cleanNo).first();
            if (existing) {
                return new Response(JSON.stringify({ error: "student_exists" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }

            await db.prepare(
                "INSERT INTO students (admissionNo, name, classId) VALUES (?, ?, ?)"
            ).bind(cleanNo, cleanName, classId).run();

            return new Response(JSON.stringify({ success: true, student: { admissionNo: cleanNo, name: cleanName, classId } }), {
                status: 201,
                headers: { "Content-Type": "application/json" }
            });

        } catch (err) {
            return new Response(JSON.stringify({ error: err.message }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }
    }

    // Handle DELETE - Remove a student and cascade delete their marks and discipline records
    if (request.method === "DELETE") {
        try {
            const delAdmissionNo = url.searchParams.get("admissionNo");

            if (!delAdmissionNo || !delAdmissionNo.trim()) {
                return new Response(JSON.stringify({ error: "admission_number_missing" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }

            const cleanNo = delAdmissionNo.trim();

            // Check if student exists
            const existing = await db.prepare("SELECT admissionNo FROM students WHERE admissionNo = ?").bind(cleanNo).first();
            if (!existing) {
                return new Response(JSON.stringify({ error: "student_not_found" }), {
                    status: 404,
                    headers: { "Content-Type": "application/json" }
                });
            }

            // Cascade delete: marks → discipline → student (in correct FK order)
            await db.batch([
                db.prepare("DELETE FROM marks WHERE admissionNo = ?").bind(cleanNo),
                db.prepare("DELETE FROM discipline WHERE admissionNo = ?").bind(cleanNo),
                db.prepare("DELETE FROM students WHERE admissionNo = ?").bind(cleanNo)
            ]);

            return new Response(JSON.stringify({ success: true }), {
                headers: { "Content-Type": "application/json" }
            });

        } catch (err) {
            return new Response(JSON.stringify({ error: err.message }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }
    }

    return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" }
    });
}
