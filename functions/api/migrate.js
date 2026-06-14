// Cloudflare D1 Schema Migration Endpoint

export async function onRequest(context) {
    const { env } = context;
    const db = env.DB;

    if (!db) {
        return new Response(JSON.stringify({ error: "Database binding 'DB' not found." }), {
            status: 500,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
    }

    try {
        // Attempt to add classTeacherId column to classes table (idempotent)
        await db.prepare("ALTER TABLE classes ADD COLUMN classTeacherId TEXT REFERENCES teachers(id)").run();
        return new Response(JSON.stringify({ success: true, message: "Migration applied: classTeacherId added to classes table." }), {
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
    } catch (err) {
        // "duplicate column name" means migration already applied — that's OK
        if (err.message && (err.message.includes("duplicate column name") || err.message.includes("already exists"))) {
            return new Response(JSON.stringify({ success: true, message: "Migration already applied. No changes needed." }), {
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
            });
        }
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
    }
}
