// Template: Full-Stack Portfolio (React + FastAPI)

// -------------------------------
// Recommended Repo Directory:
// -------------------------------
// /my-portfolio
// ├── frontend/             → React (Next.js)
// │   ├── app/              → App Router (Next.js 13+)
// │   ├── components/       → Reusable UI components
// │   ├── public/           → Static assets (images, favicon)
// │   ├── styles/           → Global styles
// │   └── tailwind.config.js
// ├── backend/              → FastAPI backend
// │   ├── app/
// │   │   ├── main.py       → FastAPI entrypoint
// │   │   ├── services/     → Custom logic (e.g. scraping, automation)
// │   │   ├── models/       → Pydantic models
// │   │   └── utils/        → Helper functions
// │   └── requirements.txt  → Backend dependencies
// ├── .gitignore
// └── README.md

// -------------------------------
// Example backend/app/main.py:
// -------------------------------

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/hello")
def read_root():
    return {"message": "hello from fastapi"}

// -------------------------------
// Example frontend/app/page.tsx:
// -------------------------------

'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [msg, setMsg] = useState('loading...')

  useEffect(() => {
    fetch('http://localhost:8000/api/hello')
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
  }, [])

  return (
    <main className="flex h-screen items-center justify-center">
      <h1 className="text-3xl font-bold">{msg}</h1>
    </main>
  )
}

// -------------------------------
// Run Instructions:
// -------------------------------
// Terminal 1: cd backend && uvicorn app.main:app --reload --port 8000
// Terminal 2: cd frontend && npm run dev
// (Make sure CORS is configured properly and both are running)

// Tailwind setup and project customizations can be added after scaffold.
