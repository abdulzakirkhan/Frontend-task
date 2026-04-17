# 🚀 React Dashboard (Logica UI)

A pixel-perfect dashboard built using **React (Vite) + Tailwind CSS + Zustand + Axios + JSON Server**.

This project converts a static HTML UI (reference design) into a **fully structured, scalable React application** with clean architecture and responsive design.

---

# 📸 Features

- ✅ Pixel-perfect UI (matched with provided design)
- ✅ Responsive (Mobile, Tablet, Desktop)
- ✅ Sidebar navigation with React Router
- ✅ Full-width header layout
- ✅ Animated progress bar (XP system)
- ✅ Scrollable task list
- ✅ Leaderboard UI
- ✅ Zustand state management
- ✅ API integration using Axios
- ✅ Mock backend using JSON Server
- ✅ Clean component-based architecture

---

# 🛠️ Tech Stack

- React (Vite)
- Tailwind CSS
- Zustand (State Management)
- Axios (API calls)
- React Router DOM
- JSON Server (Mock API)

---

# 📁 Project Structure
dashboard/
│
├── public/
├── src/
│ ├── api/
│ │ └── axios.js
│ │
│ ├── assets/
│ │ └── images...
│ │
│ ├── components/
│ │ ├── layout/
│ │ │ ├── Header.jsx
│ │ │ └── Sidebar.jsx
│ │ │
│ │ └── dashboard/
│ │ ├── Banner.jsx
│ │ ├── ProjectList.jsx
│ │ └── Leaderboard.jsx
│ │
│ ├── pages/
│ │ └── Dashboard.jsx
│ │
│ ├── store/
│ │ └── useStore.js
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── db.json
├── tailwind.config.js
├── postcss.config.js
└── package.json


---

# ⚙️ Project Setup (Step-by-Step)

## 1️⃣ Create Project

```bash
npm create vite@latest dashboard
cd dashboard
npm install

2️⃣ Install Dependencies
npm install axios zustand react-router-dom
npm install -D tailwindcss postcss autoprefixer json-server

4️⃣ Run Project
npm run dev