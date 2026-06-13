-- Cloudflare D1 Database Schema for School Management System

-- 1. Classes Table
CREATE TABLE IF NOT EXISTS classes (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

-- 2. Teachers Table
CREATE TABLE IF NOT EXISTS teachers (
    id TEXT PRIMARY KEY, -- acts as username
    name TEXT NOT NULL,
    subject TEXT NOT NULL,
    passwordHash TEXT NOT NULL,
    classId TEXT,
    FOREIGN KEY (classId) REFERENCES classes(id)
);

-- 6. Principal Table
CREATE TABLE IF NOT EXISTS principal (
    username TEXT PRIMARY KEY,
    passwordHash TEXT NOT NULL
);

-- 3. Students Table
CREATE TABLE IF NOT EXISTS students (
    admissionNo TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    classId TEXT NOT NULL,
    FOREIGN KEY (classId) REFERENCES classes(id)
);

-- 4. Marks Table
CREATE TABLE IF NOT EXISTS marks (
    admissionNo TEXT NOT NULL,
    term TEXT NOT NULL,
    subject TEXT NOT NULL,
    score INTEGER NOT NULL CHECK (score >= 0 AND score <= 100),
    date TEXT NOT NULL,
    PRIMARY KEY (admissionNo, term, subject),
    FOREIGN KEY (admissionNo) REFERENCES students(admissionNo)
);

-- 5. Discipline Records Table
CREATE TABLE IF NOT EXISTS discipline (
    id TEXT PRIMARY KEY,
    admissionNo TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    action TEXT NOT NULL,
    date TEXT NOT NULL,
    FOREIGN KEY (admissionNo) REFERENCES students(admissionNo)
);
