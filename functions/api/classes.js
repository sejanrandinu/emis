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

    // Handle GET - Retrieve all classes with class teacher info
    if (request.method === "GET") {
        try {
            const { results } = await db.prepare(
                `SELECT c.id, c.name, c.classTeacherId, t.name as classTeacherName
                 FROM classes c
                 LEFT JOIN teachers t ON c.classTeacherId = t.id
                 ORDER BY c.name ASC`
            ).all();
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

    // Handle PATCH - Assign or unassign a class teacher
    if (request.method === "PATCH") {
        try {
            const body = await request.json();
            const { classId, teacherId } = body;

            if (!classId) {
                return new Response(JSON.stringify({ error: "classId_required" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }

            // Validate class exists
            const classCheck = await db.prepare("SELECT id FROM classes WHERE id = ?").bind(classId).first();
            if (!classCheck) {
                return new Response(JSON.stringify({ error: "class_not_found" }), {
                    status: 404,
                    headers: { "Content-Type": "application/json" }
                });
            }

            // Validate teacher exists if teacherId is provided (not null/empty)
            if (teacherId) {
                const teacherCheck = await db.prepare("SELECT id FROM teachers WHERE id = ?").bind(teacherId).first();
                if (!teacherCheck) {
                    return new Response(JSON.stringify({ error: "teacher_not_found" }), {
                        status: 404,
                        headers: { "Content-Type": "application/json" }
                    });
                }
            }

            await db.prepare("UPDATE classes SET classTeacherId = ? WHERE id = ?")
                .bind(teacherId || null, classId).run();

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

    // Handle Unsupported Methods
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" }
    });
}
