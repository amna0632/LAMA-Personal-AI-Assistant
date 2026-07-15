const NoteService = require("../services/note.service");

// Create
const addNote = (req, res) => {

    const { title, content } = req.body;

    if (!title || !content) {

        return res.status(400).json({
            success: false,
            message: "Title and Content are required"
        });

    }

    const id = NoteService.createNote(req.body);

    res.status(201).json({
        success: true,
        message: "Note Created",
        noteId: id
    });

};

// Get All
const getNotes = (req, res) => {

    res.json({
        success: true,
        data: NoteService.getAllNotes()
    });

};

// Get By ID
const getNote = (req, res) => {

    const note = NoteService.getNoteById(req.params.id);

    if (!note) {

        return res.status(404).json({
            success: false,
            message: "Note not found"
        });

    }

    res.json({
        success: true,
        data: note
    });

};

// Update
const editNote = (req, res) => {

    NoteService.updateNote(req.params.id, req.body);

    res.json({
        success: true,
        message: "Note Updated"
    });

};

// Delete
const removeNote = (req, res) => {

    NoteService.deleteNote(req.params.id);

    res.json({
        success: true,
        message: "Note Deleted"
    });

};

module.exports = {
    addNote,
    getNotes,
    getNote,
    editNote,
    removeNote
};