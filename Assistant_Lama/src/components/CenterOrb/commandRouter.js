import {
  createTaskCommand,
  deleteTaskCommand,
  updateTaskCommand,
  completeTaskCommand,
  showTasksCommand,
} from "./taskCommands";

import {
  createNoteCommand,
  deleteNoteCommand,
  updateNoteCommand,
  showNotesCommand,
} from "./noteCommands";

import { sendToAI } from "./aiCommands";

export async function commandRouter(message) {
  const text = message.toLowerCase().trim();

  // ---------------- TASK ----------------

  if (text.startsWith("create task") || text.startsWith("add task")) {
    return await createTaskCommand(message);
  }

  if (text.startsWith("delete task")) {
    return await deleteTaskCommand(message);
  }

  if (text.startsWith("update task")) {
    return await updateTaskCommand(message);
  }

  if (text.startsWith("complete task")) {
    return await completeTaskCommand(message);
  }

  if (
    text.includes("show tasks") ||
    text.includes("today task") ||
    text.includes("today tasks") ||
    text.includes("my tasks")
  ) {
    return await showTasksCommand();
  }

  // ---------------- NOTES ----------------

  if (text.startsWith("create note") || text.startsWith("add note")) {
    return await createNoteCommand(message);
  }

  if (text.startsWith("delete note")) {
    return await deleteNoteCommand(message);
  }

  if (text.startsWith("update note")) {
    return await updateNoteCommand(message);
  }

  if (
    text.includes("show notes") ||
    text.includes("my notes")
  ) {
    return await showNotesCommand();
  }

  // Everything else
  return await sendToAI(message);
}