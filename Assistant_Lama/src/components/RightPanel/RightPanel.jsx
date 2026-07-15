import { useEffect, useState } from "react";

import {
  Panel,
  PanelTitle,
  Divider,
  Card,
  CardHeader,
  CardTitle,
  CardValue,
  Status,
} from "./RightPanelStyles";

const TASK_API = "http://localhost:5000/api/tasks";

function RightPanel() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const response = await fetch(TASK_API);
      const data = await response.json();

      if (data.success) {
        setTasks(data.data);
      }
    } catch (error) {
      console.log("Task Loading Error:", error);
    }
  };

  useEffect(() => {
    loadTasks();

    const refreshDashboard = () => {
      loadTasks();
    };

    window.addEventListener("refresh-dashboard", refreshDashboard);

    return () => {
      window.removeEventListener("refresh-dashboard", refreshDashboard);
    };
  }, []);

  return (
    <Panel>
      <PanelTitle>AI MODULES</PanelTitle>

      <Divider />

      {/* Weather */}

      <Card>
        <CardHeader>
          <CardTitle>Weather</CardTitle>
          <Status online />
        </CardHeader>

        <CardValue>Ready</CardValue>
      </Card>

      {/* WhatsApp */}

      <Card>
        <CardHeader>
          <CardTitle>WhatsApp</CardTitle>
          <Status online />
        </CardHeader>

        <CardValue>Automation Ready</CardValue>
      </Card>

      {/* Voice */}

      <Card>
        <CardHeader>
          <CardTitle>Voice Assistant</CardTitle>
          <Status online />
        </CardHeader>

        <CardValue>Listening</CardValue>
      </Card>

      {/* Today's Tasks */}

      <Divider />

      <PanelTitle>TODAY'S TASKS</PanelTitle>

      <Divider />

      {tasks.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>No Tasks Found</CardTitle>
          </CardHeader>

          <CardValue>Create your first task</CardValue>
        </Card>
      ) : (
        tasks.slice(0, 5).map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <CardTitle>
                {task.status === "Completed" ? "✅" : "📝"} {task.title}
              </CardTitle>

              <Status online={task.status !== "Completed"} />
            </CardHeader>

            <CardValue>
              {task.priority || "Medium"}
            </CardValue>
          </Card>
        ))
      )}
    </Panel>
  );
}

export default RightPanel;