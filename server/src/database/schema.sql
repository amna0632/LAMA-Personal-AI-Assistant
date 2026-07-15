CREATE TABLE IF NOT EXISTS tasks (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    title TEXT NOT NULL,

    description TEXT,

    priority TEXT DEFAULT 'Medium',

    status TEXT DEFAULT 'Pending',

    dueDate TEXT,

    dueTime TEXT,

    category TEXT,

    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP

);


CREATE TABLE IF NOT EXISTS reminders(

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    title TEXT NOT NULL,

    message TEXT,

    reminderDate TEXT NOT NULL,

    reminderTime TEXT NOT NULL,

    repeatType TEXT DEFAULT 'none',

    status TEXT DEFAULT 'Pending',

    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE IF NOT EXISTS notes (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    title TEXT NOT NULL,

    content TEXT NOT NULL,

    category TEXT DEFAULT 'General',

    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,

    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP

);


CREATE TABLE IF NOT EXISTS memory (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    question TEXT NOT NULL,

    answer TEXT NOT NULL,

    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP

);