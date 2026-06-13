// Cloudflare Pages D1 Database Seeder API Handler

export async function onRequest(context) {
    const db = context.env.DB;
    if (!db) {
        return new Response(JSON.stringify({ error: "Cloudflare D1 Database binding 'DB' not found in env." }), {
            status: 500,
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
    }

    try {
        // Check if DB is already seeded by counting classes
        const classesCheck = await db.prepare("SELECT COUNT(*) as count FROM classes").first("count");
        if (classesCheck > 0) {
            return new Response(JSON.stringify({ success: true, message: "Database already seeded." }), {
                headers: { 
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
        }

        const statements = [
            // Classes
            db.prepare("INSERT INTO classes (id, name) VALUES ('class_10a', 'Grade 10-A')"),
            db.prepare("INSERT INTO classes (id, name) VALUES ('class_10b', 'Grade 10-B')"),
            db.prepare("INSERT INTO classes (id, name) VALUES ('class_11a', 'Grade 11-A')"),
            db.prepare("INSERT INTO classes (id, name) VALUES ('class_12s', 'Grade 12-Science')"),
            db.prepare("INSERT INTO classes (id, name) VALUES ('class_13c', 'Grade 13-Commerce')"),

            // Teachers
            db.prepare("INSERT INTO teachers (id, name, subject) VALUES ('t_silva', 'Mr. A.B. Silva', 'Mathematics')"),
            db.prepare("INSERT INTO teachers (id, name, subject) VALUES ('t_perera', 'Mrs. S. Perera', 'Science')"),
            db.prepare("INSERT INTO teachers (id, name, subject) VALUES ('t_fernando', 'Mr. R. Fernando', 'English')"),

            // Students
            db.prepare("INSERT INTO students (admissionNo, name, classId) VALUES ('1001', 'Nimal Silva', 'class_10a')"),
            db.prepare("INSERT INTO students (admissionNo, name, classId) VALUES ('1002', 'Ruwan Kumara', 'class_10a')"),
            db.prepare("INSERT INTO students (admissionNo, name, classId) VALUES ('1003', 'Fathima Rinas', 'class_10b')"),
            db.prepare("INSERT INTO students (admissionNo, name, classId) VALUES ('2001', 'Sajini De Silva', 'class_11a')"),
            db.prepare("INSERT INTO students (admissionNo, name, classId) VALUES ('2002', 'Karthik Ramanathan', 'class_12s')"),

            // Marks
            db.prepare("INSERT INTO marks (admissionNo, term, subject, score, date) VALUES ('1001', 'Term 1', 'Mathematics', 85, '2026-03-12')"),
            db.prepare("INSERT INTO marks (admissionNo, term, subject, score, date) VALUES ('1001', 'Term 1', 'Science', 78, '2026-03-13')"),
            db.prepare("INSERT INTO marks (admissionNo, term, subject, score, date) VALUES ('1001', 'Term 1', 'English', 90, '2026-03-14')"),
            db.prepare("INSERT INTO marks (admissionNo, term, subject, score, date) VALUES ('1001', 'Term 2', 'Mathematics', 92, '2026-06-05')"),
            db.prepare("INSERT INTO marks (admissionNo, term, subject, score, date) VALUES ('1001', 'Term 2', 'Science', 84, '2026-06-06')"),
            db.prepare("INSERT INTO marks (admissionNo, term, subject, score, date) VALUES ('1001', 'Term 2', 'English', 93, '2026-06-07')"),
            db.prepare("INSERT INTO marks (admissionNo, term, subject, score, date) VALUES ('1002', 'Term 1', 'Mathematics', 45, '2026-03-12')"),
            db.prepare("INSERT INTO marks (admissionNo, term, subject, score, date) VALUES ('1002', 'Term 1', 'Science', 50, '2026-03-13')"),
            db.prepare("INSERT INTO marks (admissionNo, term, subject, score, date) VALUES ('1002', 'Term 1', 'English', 62, '2026-03-14')"),
            db.prepare("INSERT INTO marks (admissionNo, term, subject, score, date) VALUES ('2002', 'Term 1', 'Mathematics', 95, '2026-03-12')"),
            db.prepare("INSERT INTO marks (admissionNo, term, subject, score, date) VALUES ('2002', 'Term 1', 'Science', 98, '2026-03-13')"),
            db.prepare("INSERT INTO marks (admissionNo, term, subject, score, date) VALUES ('2002', 'Term 1', 'English', 89, '2026-03-14')"),

            // Discipline
            db.prepare("INSERT INTO discipline (id, admissionNo, category, description, action, date) VALUES ('d_1', '1002', 'Uniform', 'Improper school uniform and untidy haircut.', 'Warned the student and informed the guardian.', '2026-05-15')"),
            db.prepare("INSERT INTO discipline (id, admissionNo, category, description, action, date) VALUES ('d_2', '1001', 'Merit', 'Exemplary help in organizing the school sports meet and library storage.', 'Certificate of appreciation awarded during morning assembly.', '2026-06-01')"),
            db.prepare("INSERT INTO discipline (id, admissionNo, category, description, action, date) VALUES ('d_3', '1003', 'Late Attendance', 'Late arrival to school for 4 consecutive days without prior notice.', 'Advised student, record logged, monitored weekly attendance.', '2026-05-20')")
        ];

        await db.batch(statements);

        return new Response(JSON.stringify({ success: true, message: "Database initialized and seeded successfully with default data." }), {
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
    }
}
