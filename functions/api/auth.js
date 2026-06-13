// Cloudflare Pages D1 API for Authentication

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

    if (request.method !== "POST") {
        return new Response(JSON.stringify({ error: "Method not allowed" }), {
            status: 405,
            headers: { "Content-Type": "application/json" }
        });
    }

    try {
        const body = await request.json();
        const { role, username, password } = body;

        if (!role || !username || !password) {
            return new Response(JSON.stringify({ error: "fields_empty" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        const cleanUsername = username.trim();
        const inputHash = await hashPassword(password);

        if (role === 'principal') {
            const user = await db.prepare("SELECT * FROM principal WHERE LOWER(username) = LOWER(?)").bind(cleanUsername).first();
            if (!user || user.passwordHash !== inputHash) {
                return new Response(JSON.stringify({ error: "invalid_credentials" }), {
                    status: 401,
                    headers: { "Content-Type": "application/json" }
                });
            }

            return new Response(JSON.stringify({
                success: true,
                user: {
                    username: user.username,
                    name: "Principal / Admin",
                    role: "principal"
                }
            }), {
                headers: { "Content-Type": "application/json" }
            });

        } else if (role === 'teacher') {
            const user = await db.prepare("SELECT * FROM teachers WHERE LOWER(id) = LOWER(?)").bind(cleanUsername).first();
            if (!user || user.passwordHash !== inputHash) {
                return new Response(JSON.stringify({ error: "invalid_credentials" }), {
                    status: 401,
                    headers: { "Content-Type": "application/json" }
                });
            }

            return new Response(JSON.stringify({
                success: true,
                user: {
                    username: user.id,
                    name: user.name,
                    subject: user.subject,
                    role: "teacher"
                }
            }), {
                headers: { "Content-Type": "application/json" }
            });

        } else {
            return new Response(JSON.stringify({ error: "invalid_role" }), {
                status: 400,
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
