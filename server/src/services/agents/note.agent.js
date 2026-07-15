const NoteService = require("../note.service");

const noteAgent = (noteData) => {

    const id = NoteService.createNote(noteData);

    return `✅ Note Saved Successfully (ID: ${id})`;

};

module.exports = noteAgent;