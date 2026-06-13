// Cloudflare Pages D1 API for Marks

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

    // Handle GET - Retrieve marks for a student
    if (request.method === "GET") {
        if (!admissionNo) {
            return new Response(JSON.stringify({ error: "admission_number_missing" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        try {
            const { results } = await db.prepare(
                "SELECT * FROM marks WHERE admissionNo = ? ORDER BY term ASC, subject ASC"
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

    // Handle POST - Upsert a student's subject score
    if (request.method === "POST") {
        try {
            const body = await request.json();
            const { admissionNo, term, subject, score } = body;

            if (!admissionNo || !admissionNo.trim() || !term || !subject || !subject.trim() || score === undefined) {
                return new Response(JSON.stringify({ error: "fields_empty" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }

            const cleanNo = admissionNo.trim();
            const cleanSubject = subject.trim();
            const scoreNum = parseInt(score, 10);

            if (isNaN(scoreNum) || scoreNum < 0 || scoreNum > 100) {
                return new Response(JSON.stringify({ error: "invalid_score" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }

            // Verify if student exists
            const studentCheck = await db.prepare("SELECT admissionNo FROM students WHERE admissionNo = ?").bind(cleanNo).first();
            if (!studentCheck) {
                return new Response(JSON.stringify({ error: "student_not_found" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }

            const date = new Date().toISOString().split('T')[0];

            // Insert or replace mark
            await db.prepare(
                `INSERT INTO marks (admissionNo, term, subject, score, date) 
                 VALUES (?, ?, ?, ?, ?) 
                 ON CONFLICT(admissionNo, term, subject) 
                 DO UPDATE SET score = excluded.score, date = excluded.date`
            ).bind(cleanNo, term, cleanSubject, scoreNum, date).run();

            return new Response(JSON.stringify({ 
                success: true, 
                mark: { admissionNo: cleanNo, term, subject: cleanSubject, score: scoreNum, date } 
            }), {
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
