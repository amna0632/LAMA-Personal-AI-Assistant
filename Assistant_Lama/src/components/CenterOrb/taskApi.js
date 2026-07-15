const TASK_API = "http://localhost:5000/api/task";

// ============================
// GET ALL TASKS
// ============================

export const getTasks = async () => {
  const res = await fetch(TASK_API);
  const data = await res.json();
  return data.data || [];
};

// ============================
// CREATE TASK
// ============================

export const createTask = async (title) => {
  const res = await fetch(TASK_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description: "",
      priority: "Medium",
      dueDate: null,
      dueTime: null,
      category: "General",
    }),
  });

  return await res.json();
};

// ============================
// DELETE TASK
// ============================

export const deleteTask = async (title) => {
  const tasks = await getTasks();

  const task = tasks.find(
    (t) => t.title.toLowerCase() === title.toLowerCase()
  );

  if (!task) {
    return {
      success: false,
      message: "Task not found.",
    };
  }

  await fetch(`${TASK_API}/${task.id}`, {
    method: "DELETE",
  });

  return {
    success: true,
    message: "Task deleted successfully.",
  };
};

// ============================
// UPDATE TASK
// ============================

export const updateTask = async (oldTitle, newTitle) => {
  const tasks = await getTasks();

  const task = tasks.find(
    (t) => t.title.toLowerCase() === oldTitle.toLowerCase()
  );

  if (!task) {
    return {
      success: false,
      message: "Task not found.",
    };
  }

  await fetch(`${TASK_API}/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: newTitle,
      description: task.description,
      priority: task.priority,
      dueDate: task.dueDate,
      dueTime: task.dueTime,
      category: task.category,
    }),
  });

  return {
    success: true,
    message: "Task updated successfully.",
  };
};

// ============================
// COMPLETE TASK
// ============================

export const completeTask = async (title) => {
  const tasks = await getTasks();

  const task = tasks.find(
    (t) => t.title.toLowerCase() === title.toLowerCase()
  );

  if (!task) {
    return {
      success: false,
      message: "Task not found.",
    };
  }

  await fetch(`${TASK_API}/${task.id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: "Completed",
    }),
  });

  return {
    success: true,
    message: "Task completed successfully.",
  };
};