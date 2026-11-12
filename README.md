# Chronos: Time Management System (MERN Stack)
### University of Engineering & Management, Kolkata
**Department of Computer Science & Engineering (Data Science)**  
**Course:** Software Engineering Laboratory using MERN  
**Paper Code:** PCCCS594  
**Project Topic:** SL.NO 8 — Time Management Software  
**Student Roll No:** 8  

---

## 📌 Project Overview
**Chronos** is a full-featured Time Management Software designed and developed for the Software Engineering Laboratory course. It provides developers, students, and engineers with comprehensive time tracking, Pomodoro focus cycles, estimation accuracy analytics, category distribution metrics, and academic timesheet export capabilities.

---

## ⚡ How to Run in VS Code (Quickest Methods)

### Method 1: One-Click Run & Debug (F5) *(Recommended)*
1. Open this `time-management` folder in **VS Code**.
2. Press **`F5`** on your keyboard (or click the **Run and Debug** icon in the left sidebar and click the green **Play** button: `▶ Run Time Management System (Full Stack)`).
3. Both the Express backend (`http://localhost:5000`) and React frontend (`http://localhost:5173`) will launch automatically in the dedicated terminal!
4. Open your browser at: **[http://localhost:5173](http://localhost:5173)**.

---

### Method 2: Single Terminal Command
Open the VS Code built-in terminal (`Ctrl + ~`) and simply type:
```powershell
node start.js
```
*(Or `.\run.bat` / `npm start`)*

Both server and client will start concurrently with colored logs:
- `[SERVER]` Express + MongoDB API running on `http://localhost:5000`
- `[CLIENT]` Vite + React App running on `http://localhost:5173`

---

### Method 3: One-Click Windows Batch Launcher (`run.bat`)
In the VS Code terminal or Windows File Explorer, double-click:
```powershell
.\run.bat
```
This batch script checks the MongoDB service, starts the full stack application, and opens your browser directly to `http://localhost:5173`.

---

## 🚀 Key Features

1. **Academic Branding & Identity**:
   - Header badge displaying UEM Kolkata, Dept. of CSE (Data Science), Paper PCCCS594, and Student Roll No: 8.
   - 1-Click Demo Login (`Roll 8 Student`) for instant presentation and viva demonstration.

2. **Smart Task & Time Management**:
   - Create tasks with Title, Description, Priority (High, Medium, Low), Category, Due Date, and Estimated Duration.
   - **Live Stopwatch**: Real-time ticker per task. Starting one timer automatically pauses others to avoid overlapping time logs.
   - **Quick Offline Logging**: Fast +15m, +30m, +1h or custom minute logging for offline study sessions.
   - Task completion checkbox and status pipeline (Todo, In Progress, Done).

3. **Built-in Pomodoro Focus Timer**:
   - 25-minute Deep Work Focus / 5-minute Short Break / 15-minute Long Break intervals.
   - Directly links to any assigned task to log focus sessions automatically upon completion.
   - Web Audio API acoustic chime notification (works completely offline).

4. **Productivity & Software Engineering Analytics**:
   - **Summary Metric Tiles**: Total time tracked, total tasks count, completion rate (%), overdue alerts, and productivity index score.
   - **Last 7 Days Bar Chart**: Visual daily workload breakdown.
   - **Time by Category**: Visual percentage breakdown across projects, labs, study, and DBMS tasks.
   - **Estimation Variance Tracking**: Compares estimated effort against actual recorded time.

5. **Academic Timesheet CSV Export**:
   - Export time logs to CSV format for report submission and grading.
   - Generates formatted timesheet with Task Title, Category, Priority, Status, Due Date, Estimated Mins, Actual Spent Mins, and Variance.

6. **One-Click Demo Data Generator**:
   - Click **`⚡ Load Sample Data`** in the navbar to instantly populate 5 realistic CSE Data Science tasks with historical time entries.

---

## 🏗️ Technology Stack

| Component | Technology | Description |
|---|---|---|
| **Frontend** | React 18, Vite | Component-driven responsive UI with live timers and charts |
| **Backend** | Node.js, Express.js | RESTful API server with modular routing and JWT authentication |
| **Database** | MongoDB, Mongoose | NoSQL document database for user profiles, tasks, and time entries |
| **Styling** | Custom Responsive CSS | Pure CSS with modern design tokens, flexbox, and CSS grid |
| **Security** | bcryptjs, jsonwebtoken | Secure password hashing (salt rounds: 10) and stateless token auth |

---

## 📡 REST API Documentation

### Authentication Routes (`/api/auth`)
- `POST /api/auth/register` — Register a new student account `{ name, email, password }`
- `POST /api/auth/login` — Sign in and receive JWT token `{ email, password }`

### Task & Timer Routes (`/api/tasks`) *(Requires Bearer Token)*
- `GET /api/tasks` — Fetch all tasks for logged-in user (sorted newest first)
- `POST /api/tasks` — Create a new task `{ title, description, category, priority, dueDate, estimatedMinutes }`
- `PUT /api/tasks/:id` — Update task details or status (`Todo`, `In Progress`, `Done`)
- `DELETE /api/tasks/:id` — Delete task and its associated time logs
- `POST /api/tasks/:id/start` — Start tracking time on task (stops any currently running timer)
- `POST /api/tasks/:id/stop` — Stop the running timer
- `POST /api/tasks/:id/log-time` — Manually log offline minutes `{ minutes }`
- `GET /api/tasks/stats/summary` — Aggregate productivity metrics, last 7 days chart data, and category distribution
- `POST /api/tasks/seed` — Seed realistic sample tasks for academic demonstration

### System Health
- `GET /api/health` — Returns backend uptime, academic metadata, and MongoDB connection status

---

## 📂 Project Directory Structure

```
time-management/
├── client/                     # Frontend React (Vite) Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth.jsx        # Login, Register & 1-Click Demo Login
│   │   │   ├── Dashboard.jsx   # Main view, filters, search & state management
│   │   │   ├── Navbar.jsx      # Academic banner (UEM Kolkata, Roll 8) & actions
│   │   │   ├── Pomodoro.jsx    # 25m Focus / 5m Break Pomodoro timer with audio chime
│   │   │   ├── Stats.jsx       # 5 metric tiles, Last 7 Days chart, category bars
│   │   │   ├── TaskForm.jsx    # Create task with quick estimates
│   │   │   └── TaskItem.jsx    # Task card with live stopwatch & estimation bar
│   │   ├── api.js              # Fetch client, CSV exporter, date formatters
│   │   ├── App.jsx             # Root React component
│   │   ├── index.css           # Modern custom CSS styling
│   │   └── main.jsx            # React DOM entry point
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Backend Express & Node.js Server
│   ├── middleware/
│   │   └── auth.js             # JWT verification middleware
│   ├── models/
│   │   ├── Task.js             # Task schema with embedded time entry intervals
│   │   └── User.js             # User account schema
│   ├── routes/
│   │   ├── auth.js             # Register & Login controllers
│   │   └── tasks.js            # Task CRUD, stopwatch, seeding, & statistics
│   ├── .env                    # Environment configuration (PORT, MONGO_URI, JWT_SECRET)
│   ├── package.json
│   └── server.js               # Express application entry point
│
├── .vscode/
│   ├── launch.json             # F5 Run & Debug configuration for VS Code
│   └── tasks.json              # Ctrl+Shift+B Build task for VS Code
│
├── start.js                    # Cross-platform concurrent runner (zero-dependency)
├── run.bat                     # Windows batch launcher (starts MongoDB & app, opens browser)
├── start.bat                   # Alias for run.bat
├── package.json                # Root package configuration
└── README.md                   # Complete academic documentation
```

---

## 👨‍💻 Student Details
- **Student Name / Roll No:** 8
- **Department:** Computer Science & Engineering (Data Science)
- **Institution:** University of Engineering & Management (UEM), Kolkata
- **Academic Year:** Even Semester 2026
- **Paper:** Software Engineering Laboratory using MERN (PCCCS594)
- **Assigned Topic:** SL.NO 8 — Time Management Software
