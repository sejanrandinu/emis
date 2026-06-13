// Cloudflare Pages D1 API for Classes

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

    // Handle GET - Retrieve all classes
    if (request.method === "GET") {
        try {
            const { results } = await db.prepare("SELECT * FROM classes ORDER BY name ASC").all();
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

    // Handle POST - Create a new class
    if (request.method === "POST") {
        try {
            const body = await request.json();
            const { name } = body;

            if (!name || !name.trim()) {
                return new Response(JSON.stringify({ error: "class_name_empty" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }

            const cleanName = name.trim();
            const id = 'class_' + Date.now();

            // Check if class with same name already exists
            const existing = await db.prepare("SELECT id FROM classes WHERE LOWER(name) = LOWER(?)").bind(cleanName).first();
            if (existing) {
                return new Response(JSON.stringify({ error: "class_already_exists" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }

            await db.prepare("INSERT INTO classes (id, name) VALUES (?, ?)").bind(id, cleanName).run();

            return new Response(JSON.stringify({ success: true, class: { id, name: cleanName } }), {
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

    // Handle Unsupported Methods
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 450,
        headers: { "Content-Type": "application/json" }
    });
}
