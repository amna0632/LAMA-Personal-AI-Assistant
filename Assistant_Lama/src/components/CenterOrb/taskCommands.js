import {
  createTask,
  deleteTask,
  updateTask,
  completeTask,
  getTasks,
} from "./taskApi";

// ============================
// CREATE TASK
// ============================

export async function createTaskCommand(message) {
  const title = message
    .replace(/create task/i, "")
    .replace(/add task/i, "")
    .trim();

  if (!title) {
    return {
      handled: true,
      reply: "Please tell me the task title.",
    };
  }

  const result = await createTask(title);

  return {
    handled: true,
    reply: result.message || "Task Created Successfully.",
  };
}

// ============================
// DELETE TASK
// ============================

export async function deleteTaskCommand(message) {
  const title = message
    .replace(/delete task/i, "")
    .trim();

  const result = await deleteTask(title);

  return {
    handled: true,
    reply: result.message,
  };
}

// ============================
// COMPLETE TASK
// ============================

export async function completeTaskCommand(message) {
  const title = message
    .replace(/complete task/i, "")
    .trim();

  const result = await completeTask(title);

  return {
    handled: true,
    reply: result.message,
  };
}

// ============================
// UPDATE TASK
// ============================

export async function updateTaskCommand(message) {
  const cmd = message
    .replace(/update task/i, "")
    .trim();

  if (!cmd.includes(" to ")) {
    return {
      handled: true,
      reply: "Say: Update task old title to new title",
    };
  }

  const oldTitle = cmd.split(" to ")[0].trim();
  const newTitle = cmd.split(" to ")[1].trim();

  const result = await updateTask(oldTitle, newTitle);

  return {
    handled: true,
    reply: result.message,
  };
}

// ============================
// SHOW TASKS
// ============================

export async function showTasksCommand() {
  const tasks = await getTasks();

  if (!tasks.length) {
    return {
      handled: true,
      reply: "No tasks available.",
    };
  }

  const list = tasks
    .map((t, i) => `${i + 1}. ${t.title}`)
    .join(". ");

  return {
    handled: true,
    reply: `You have ${tasks.length} tasks. ${list}`,
  };
}