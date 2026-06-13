// Cloudflare Pages D1 API for Discipline Records

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

    // Handle GET - Retrieve discipline records for a student
    if (request.method === "GET") {
        if (!admissionNo) {
            return new Response(JSON.stringify({ error: "admission_number_missing" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        try {
            const { results } = await db.prepare(
                "SELECT * FROM discipline WHERE admissionNo = ? ORDER BY date DESC"
            ).bind(admissionNo.trim()).all();
            return new Response(JSON.stringify(results), {
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

    return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" }
    });
}
