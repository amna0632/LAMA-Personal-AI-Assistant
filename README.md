# 🤖 Personal AI Assistant

A smart, interactive, and voice-enabled Personal AI Assistant built using **React.js, Node.js, Express.js, and SQLite**. This project combines AI-powered conversations, voice recognition, task management, reminders, browser automation, and real-time system monitoring into one unified dashboard.

The goal of this project is to create a personal desktop assistant that can understand voice commands, respond intelligently, manage daily activities, automate repetitive tasks, and provide useful system information through a modern web interface.

---

## ✨ Key Features

### 🎙️ Voice Assistant
- Voice Recognition using the Web Speech API.
- Speech Response using Speech Synthesis.
- Interactive voice assistant experience.
- Voice-based user interaction.

### 🧠 AI Chat Integration
- AI-powered conversational interaction.
- Process user queries and generate responses.
- Interactive chat experience.

### 📋 Task Management
- Create new tasks.
- Update existing tasks.
- Mark tasks as completed.
- Delete tasks.
- Organize daily activities.

### 📝 Smart Notes Management
- Create and manage personal notes.
- Store important information.
- Access notes through the dashboard.

### ⏰ Reminder System
- Create reminders for important activities.
- Manage scheduled reminders.
- Background reminder scheduling using Node-cron.
- Desktop notifications using Node-notifier.

### 💬 WhatsApp Message Automation
- Automate WhatsApp-related messaging workflows.
- Reduce repetitive manual messaging tasks.

### 🌐 Browser Automation
- Open websites and applications.
- Automate browser-related operations.
- Selenium WebDriver integration.

### 📊 Real-Time Dashboard
- Interactive dashboard.
- Centralized access to assistant features.
- Modern and responsive user interface.

### 💻 Live System Monitoring
- CPU usage monitoring.
- RAM information.
- Operating system information.
- System uptime.

---

## 🛠️ Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| React.js | Building interactive UI components |
| Vite | Frontend development and build tool |
| Styled Components | Component-based styling |
| Web Speech API | Voice recognition and speech interaction |
| JavaScript | Application logic |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| REST APIs | Frontend-backend communication |
| SQLite | Relational database |
| Node-cron | Scheduling background tasks |
| Node-notifier | Desktop notifications |
| Selenium WebDriver | Browser automation |

### Other Technologies
- Git & GitHub
- npm
- CORS
- Helmet
- Morgan

---

## 🏗️ Project Architecture

The application follows a client-server architecture.

```text
              PERSONAL AI ASSISTANT
                       |
          +------------+------------+
          |                         |
      FRONTEND                   BACKEND
          |                         |
      React.js                 Node.js
          |                         |
      Vite                    Express.js
          |                         |
      Styled                  REST APIs
      Components                   |
          |              +----------+----------+
          |              |          |          |
      Web Speech       SQLite    Automation  Scheduler
          API                     Selenium   Node-cron
                                     |
                                Node-notifier
```

### Architecture Overview

1. **Frontend:** React.js provides the interactive user interface and communicates with the backend through REST APIs.
2. **Backend:** Express.js handles API requests, application logic, and database operations.
3. **Database:** SQLite stores application data such as tasks, reminders, and notes.
4. **Voice Interaction:** Web Speech API enables voice recognition and speech responses.
5. **Automation:** Selenium WebDriver supports browser automation.
6. **Scheduling:** Node-cron manages scheduled reminder tasks.
7. **Notifications:** Node-notifier provides desktop notifications.

---

## 📁 Project Structure

The following is a suggested documentation structure. Adjust folder names to match your actual repository.

```text
AI-Assistant/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── services/
│   ├── database/
│   ├── automation/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project directory:

```bash
cd AI-Assistant
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000
```

Add other environment variables required by your actual AI integration and application configuration.

**Important:** Never upload API keys, credentials, or other secrets to GitHub.

### 5. Start the Backend

```bash
npm run dev
```

The backend runs at:

```text
http://localhost:5000
```

### 6. Start the Frontend

```bash
cd client
npm run dev
```

Open the local URL displayed by Vite in your browser.

---

## 🗄️ Database

This project uses **SQLite**, a lightweight relational database.

SQLite is used to store and manage application data, including:

- Tasks
- Reminders
- Notes

The database provides persistent storage for the assistant's management features.

---

## 🔌 API Integration

The frontend and backend communicate using REST APIs.

The backend is responsible for:
- Handling HTTP requests.
- Processing application logic.
- Performing database operations.
- Managing task and reminder operations.
- Connecting frontend features with backend services.

Actual API endpoints and request examples can be documented here according to the implemented backend routes.

---

## 🎤 Voice Recognition

The Web Speech API provides voice interaction capabilities.

It supports:
- Capturing spoken user commands.
- Converting speech into text.
- Producing spoken responses through browser speech synthesis.

Browser compatibility and microphone permissions may affect voice functionality.

---

## 🤖 Automation

### Browser Automation
Selenium WebDriver is used for automating browser-related operations, such as opening websites and performing supported browser actions.

### WhatsApp Automation
The project includes WhatsApp-related messaging automation workflows.

Automation availability may depend on browser sessions, authentication, and the applicable platform's restrictions.

---

## 📊 System Monitoring

The dashboard provides system information such as:

- CPU usage
- RAM information
- Operating system
- System uptime

---

## 🔒

