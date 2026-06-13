// Cloudflare Pages D1 API for Teacher Registration & Listing

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

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

    // Handle GET - Retrieve all teachers (excluding passwords)
    if (request.method === "GET") {
        try {
            const { results } = await db.prepare("SELECT id, name, subject FROM teachers ORDER BY name ASC").all();
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

    // Handle POST - Principal registers a new teacher
    if (request.method === "POST") {
        try {
            const body = await request.json();
            const { username, name, subject, password } = body;

            if (!username || !username.trim() || !name || !name.trim() || !subject || !subject.trim() || !password || !password.trim()) {
                return new Response(JSON.stringify({ error: "fields_empty" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }

            const cleanUsername = username.trim().toLowerCase();
            const cleanName = name.trim();
            const cleanSubject = subject.trim();

            // Validate username pattern (simple alphanumeric and underscores/dashes)
            const usernameRegex = /^[a-zA-Z0-9_\-]+$/;
            if (!usernameRegex.test(cleanUsername)) {
                return new Response(JSON.stringify({ error: "invalid_username_format" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }

            // Check if username/id already exists in teachers table
            const existing = await db.prepare("SELECT id FROM teachers WHERE id = ?").bind(cleanUsername).first();
            if (existing) {
                return new Response(JSON.stringify({ error: "teacher_exists" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }

            const hashed = await hashPassword(password);

            await db.prepare(
                "INSERT INTO teachers (id, name, subject, passwordHash) VALUES (?, ?, ?, ?)"
            ).bind(cleanUsername, cleanName, cleanSubject, hashed).run();

            return new Response(JSON.stringify({ 
                success: true, 
                teacher: { id: cleanUsername, name: cleanName, subject: cleanSubject } 
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
