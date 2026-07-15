const db = require("../database/database");

// Create Note
const createNote = (title, content, category = "General") => {

    const stmt = db.prepare(`
        INSERT INTO notes (title, content, category)
        VALUES (?, ?, ?)
    `);

    const result = stmt.run(title, content, category);

    return result.lastInsertRowid;
};

// Get All Notes
const getAllNotes = () => {

    return db.prepare(`
        SELECT *
        FROM notes
        ORDER BY id DESC
    `).all();

};

// Get Note By ID
const getNoteById = (id) => {

    return db.prepare(`
        SELECT *
        FROM notes
        WHERE id = ?
    `).get(id);

};

// Update Note
const updateNote = (id, title, content, category) => {

    return db.prepare(`
        UPDATE notes
        SET
            title = ?,
            content = ?,
            category = ?,
            updatedAt = CURRENT_TIMESTAMP
        WHERE id = ?
    `).run(title, content, category, id);

};

// Delete Note
const deleteNote = (id) => {

    return db.prepare(`
        DELETE FROM notes
        WHERE id = ?
    `).run(id);

};

module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote
};