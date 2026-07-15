const Note = require("../models/note.model");

const createNote = (data) => {

    const {
        title,
        content,
        category
    } = data;

    return Note.createNote(
        title,
        content,
        category
    );
};

const getAllNotes = () => {
    return Note.getAllNotes();
};

const getNoteById = (id) => {
    return Note.getNoteById(id);
};

const updateNote = (id, data) => {

    return Note.updateNote(
        id,
        data.title,
        data.content,
        data.category
    );

};

const deleteNote = (id) => {
    return Note.deleteNote(id);
};

module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote
};