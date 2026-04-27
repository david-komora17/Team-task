# Team Task Manager

A collaborative task management web application built with React, Tailwind CSS, and Context API. Users can register, log in, create tasks, edit them, mark them as completed, and filter tasks by status. All data is stored in the browser's localStorage.

## Features

- User authentication (Register / Login) with user-specific data
- Full CRUD operations for tasks
- Task fields: title, description, status (pending/completed), due date
- Filter tasks by All, Pending, or Completed
- Protected routes: only authenticated users can access the dashboard
- Global state management using React Context API
- Data persistence using localStorage (each user sees only their own tasks)
- Clean, responsive UI with Tailwind CSS
- Notifications for user actions

## Tech Stack

- React 18
- React Router v6
- Context API (AuthContext, TaskContext)
- Tailwind CSS
- lucide-react (icons)
- react-hot-toast (notifications)
- Vite


## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd team-task-manager
Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
Open http://localhost:5173 in your browser.


bash
npm run build
The output will be in the dist folder. You can deploy it to any static hosting service (Vercel, Netlify, GitHub Pages).
