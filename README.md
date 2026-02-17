📌 Task Management Dashboard (Mini Trello Clone)

A responsive Task Management Dashboard built using React, Vite, Tailwind CSS, and Zustand.
This project simulates a Trello-like board with authentication, task management, and state persistence.

Tech Stack

React (Hooks)

Vite

Tailwind CSS

Zustand (State Management + Persistence)

Axios / Fetch (API Calls)

TypeScript

src/
 ├── components/      # Reusable UI components
 ├── pages/           # Login & Dashboard pages
 ├── store/           # Zustand global store
 ├── hooks/           # Custom hooks
 ├── services/        # API service layer
 ├── layouts/         # Sidebar + Navbar layout


🔐 Authentication (Mocked)

Simple login page

Accepts any email/password

Stores user data in Zustand store

Login state persisted using middleware (localStorage)

Redirects to dashboard after login

Logout clears persisted state

📊 Dashboard Features
🗂 Task Columns

Tasks are displayed in 3 columns:

Todo

In Progress

Completed

Task status logic:

completed === false → Todo

completed === true → Completed

Manual state → In Progress

🌐 API Integration

Tasks are fetched from:

https://jsonplaceholder.typicode.com/todos


Includes:

Loading state

Error handling

Empty state UI

✨ Features Implemented
➕ Add Task

Custom reusable modal

Title + Description

Stored in Zustand

✏️ Edit Task

Modal-based editing

Updates Zustand state

❌ Delete Task
🔄 Toggle Status

Move tasks between columns
🔍 Search & Filter

Search tasks by title

Filter by status

Debounced input (optional improvement)

🧠 State Management (Zustand)

Global Store Contains:

user

tasks

setUser()

logout()

addTask()

updateTask()

deleteTask()

Persistence handled using Zustand middleware.

📱 UI & UX

Fully responsive (Mobile + Desktop)

Clean Tailwind utility styling

Loading indicators

Error states

Empty states

Smooth layout transitions

🏗 Architecture Overview

UI components are separated from business logic

API logic isolated inside services/

Global state handled via Zustand

Layout components reusable across pages

Clear separation of concerns
API → Zustand Store → UI Components


⚖️ Tradeoffs Made

Used mocked authentication instead of backend integration

"In Progress" status handled locally due to API limitations

Drag & Drop not implemented due to time constraints

🚀 Future Improvements

Drag & Drop (dnd-kit)

Backend integration with real authentication

Role-based task access


Performance optimizations for large datasets

Dark mode toggle