// Cloudflare Pages D1 API for Students

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

    // Handle GET - Retrieve students with class details
    if (request.method === "GET") {
        try {
            if (admissionNo) {
                // Query details of a specific student
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
            } else if (classId) {
                // Query all students in a class
                const { results } = await db.prepare(
                    "SELECT * FROM students WHERE classId = ? ORDER BY name ASC"
                ).bind(classId).all();
                return new Response(JSON.stringify(results), {
                    headers: { "Content-Type": "application/json" }
                });
            } else {
                // Retrieve all students
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

    return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" }
    });
}
