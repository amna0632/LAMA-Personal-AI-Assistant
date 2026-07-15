const NOTE_API = "http://localhost:5000/api/note";

// =======================
// GET NOTES
// =======================

export const getNotes = async () => {
  const res = await fetch(NOTE_API);
  const data = await res.json();
  return data.data || [];
};

// =======================
// CREATE NOTE
// =======================

export const createNote = async (title, content = "") => {
  const res = await fetch(NOTE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
    }),
  });

  return await res.json();
};

// =======================
// DELETE NOTE
// =======================

export const deleteNote = async (title) => {
  const notes = await getNotes();

  const note = notes.find(
    (n) => n.title.toLowerCase() === title.toLowerCase()
  );

  if (!note) {
    return {
      success: false,
      message: "Note not found.",
    };
  }

  await fetch(`${NOTE_API}/${note.id}`, {
    method: "DELETE",
  });

  return {
    success: true,
    message: "Note deleted successfully.",
  };
};

// =======================
// UPDATE NOTE
// =======================

export const updateNote = async (oldTitle, newTitle) => {
  const notes = await getNotes();

  const note = notes.find(
    (n) => n.title.toLowerCase() === oldTitle.toLowerCase()
  );

  if (!note) {
    return {
      success: false,
      message: "Note not found.",
    };
  }

  await fetch(`${NOTE_API}/${note.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: newTitle,
      content: note.content,
    }),
  });

  return {
    success: true,
    message: "Note updated successfully.",
  };
};