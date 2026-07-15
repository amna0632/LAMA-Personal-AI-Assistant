import {
  createNote,
  deleteNote,
  updateNote,
  getNotes,
} from "./noteApi";

// =======================
// CREATE NOTE
// =======================

export async function createNoteCommand(message) {
  const title = message
    .replace(/create note/i, "")
    .replace(/add note/i, "")
    .trim();

  if (!title) {
    return {
      handled: true,
      reply: "Please tell me the note title.",
    };
  }

  const result = await createNote(title);

  return {
    handled: true,
    reply: result.message || "Note created successfully.",
  };
}

// =======================
// DELETE NOTE
// =======================

export async function deleteNoteCommand(message) {
  const title = message
    .replace(/delete note/i, "")
    .trim();

  const result = await deleteNote(title);

  return {
    handled: true,
    reply: result.message,
  };
}

// =======================
// UPDATE NOTE
// =======================

export async function updateNoteCommand(message) {
  const cmd = message
    .replace(/update note/i, "")
    .trim();

  if (!cmd.includes(" to ")) {
    return {
      handled: true,
      reply: "Say: Update note old title to new title",
    };
  }

  const oldTitle = cmd.split(" to ")[0].trim();
  const newTitle = cmd.split(" to ")[1].trim();

  const result = await updateNote(oldTitle, newTitle);

  return {
    handled: true,
    reply: result.message,
  };
}

// =======================
// SHOW NOTES
// =======================

export async function showNotesCommand() {
  const notes = await getNotes();

  if (!notes.length) {
    return {
      handled: true,
      reply: "You don't have any notes.",
    };
  }

  const list = notes
    .map((n, i) => `${i + 1}. ${n.title}`)
    .join(". ");

  return {
    handled: true,
    reply: `You have ${notes.length} notes. ${list}`,
  };
}