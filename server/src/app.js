const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const taskRoutes = require("./routes/task.routes");
const reminderRoutes = require("./routes/reminder.routes");
const noteRoutes = require("./routes/note.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const searchRoutes = require("./routes/search.routes");
const assistantRoutes = require("./routes/assistant.routes");
const aiRoutes = require("./routes/ai.routes");
const voiceRoutes = require("./routes/voice.routes");
const systemRoute = require("./routes/system.route");

const errorHandler = require("./middleware/error.middleware");


const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "AI Assistant Backend Running"
    });

});

// API Routes
app.use("/api/tasks", taskRoutes);

app.use("/api/reminders", reminderRoutes);

app.use("/api/notes", noteRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/search", searchRoutes);

app.use("/api/assistant", assistantRoutes);

app.use("/api/ai", aiRoutes);

app.use("/api/voice", voiceRoutes);

app.use("/api/system", systemRoute);

// Error Middleware (Always Last)
app.use(errorHandler);

module.exports = app;