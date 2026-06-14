// Cloudflare Pages D1 API for Discipline Records — CRUD

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
    const admissionNo = url.searchParams.get("admissionNo");
    const classId = url.searchParams.get("classId");

    // Handle GET - Retrieve discipline records
    if (request.method === "GET") {
        try {
            // GET /api/discipline?admissionNo=X — records for one student
            if (admissionNo) {
                const { results } = await db.prepare(
                    "SELECT * FROM discipline WHERE admissionNo = ? ORDER BY date DESC"
                ).bind(admissionNo.trim()).all();
                return new Response(JSON.stringify(results), {
                    headers: { "Content-Type": "application/json" }
                });
            }

            // GET /api/discipline?classId=X — all records for students in a class
            if (classId) {
                const { results } = await db.prepare(
                    `SELECT d.*, s.name as studentName
                     FROM discipline d
                     JOIN students s ON d.admissionNo = s.admissionNo
                     WHERE s.classId = ?
                     ORDER BY d.date DESC`
                ).bind(classId.trim()).all();
                return new Response(JSON.stringify(results), {
                    headers: { "Content-Type": "application/json" }
                });
            }

            // GET /api/discipline — total count only (for principal stats dashboard)
            const row = await db.prepare("SELECT COUNT(*) as count FROM discipline").first();
            return new Response(JSON.stringify({ count: row ? row.count : 0 }), {
                headers: { "Content-Type": "application/json" }
            });

        } catch (err) {
            return new Response(JSON.stringify({ error: err.message }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }
    }

    // Handle POST - Create a new discipline record
    if (request.method === "POST") {
        try {
            const body = await request.json();
            const { admissionNo, category, description, action } = body;

            if (!admissionNo || !admissionNo.trim() || !category || !category.trim() || !description || !description.trim() || !action || !action.trim()) {
                return new Response(JSON.stringify({ error: "fields_empty" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }

            const cleanNo = admissionNo.trim();
            const cleanCategory = category.trim();
            const cleanDescription = description.trim();
            const cleanAction = action.trim();

            // Verify if student exists
            const studentCheck = await db.prepare("SELECT admissionNo FROM students WHERE admissionNo = ?").bind(cleanNo).first();
            if (!studentCheck) {
                return new Response(JSON.stringify({ error: "student_not_found" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }

            const id = 'd_' + Date.now();
            const date = new Date().toISOString().split('T')[0];

            await db.prepare(
                `INSERT INTO discipline (id, admissionNo, category, description, action, date)
                 VALUES (?, ?, ?, ?, ?, ?)`
            ).bind(id, cleanNo, cleanCategory, cleanDescription, cleanAction, date).run();

            return new Response(JSON.stringify({
                success: true,
                record: { id, admissionNo: cleanNo, category: cleanCategory, description: cleanDescription, action: cleanAction, date }
            }), {
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

    // Handle DELETE - Remove a discipline record by ID
    if (request.method === "DELETE") {
        try {
            const recordId = url.searchParams.get("id");

            if (!recordId || !recordId.trim()) {
                return new Response(JSON.stringify({ error: "record_id_missing" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }

            // Check if record exists
            const existing = await db.prepare("SELECT id FROM discipline WHERE id = ?").bind(recordId.trim()).first();
            if (!existing) {
                return new Response(JSON.stringify({ error: "record_not_found" }), {
                    status: 404,
                    headers: { "Content-Type": "application/json" }
                });
            }

            await db.prepare("DELETE FROM discipline WHERE id = ?").bind(recordId.trim()).run();

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
