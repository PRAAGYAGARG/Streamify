# Streamify – Scalable MERN-based Social & Video Chat Platform

Streamify is a full-stack social platform that combines **real-time chat**, **video calling**, and a rich **friends & onboarding system**.  
It’s built on the MERN stack with WebRTC and Socket.io for low-latency communication and is structured to be production-ready and easily extensible.

---

## ✨ Key Features

- 💻 **Tech Stack:** Node.js, Express, MongoDB, React, TanStack Query, TailwindCSS, WebRTC, Socket.io, Stream
- 🔐 **Authentication:** JWT-based login and signup with protected routes and persistent sessions
- 🚶 **Onboarding Flow:** Guided onboarding to set up profile, interests, and recommendations
- 👥 **Friends System:** Send requests, accept/decline, and view recommended users & friends
- 💬 **Real-Time Chat:** 1-to-1 messaging with instant updates via Socket.io
- 🎥 **Video Calling:** WebRTC-based video calls between connected users
- 🎨 **32+ UI Themes:** Built-in theme selector for highly customizable look & feel
- 🧩 **Custom Hooks & Best Practices:** Clean separation of concerns on both frontend and backend
- 🧪 **API Testing:** Structured endpoints tested for reliability and correctness
- 🚀 **Deployment Ready:** Backend prepared for deployment (e.g., Render) and frontend easily hostable

---

## 🧱 Tech Stack

**Frontend**
- React
- TanStack Query (for server state/data fetching)
- TailwindCSS
- Custom hooks & reusable components

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT authentication

**Real-Time & Media**
- Socket.io (real-time messaging & signaling)
- WebRTC (peer-to-peer video)
- Stream (video/chat infrastructure where applicable)

---

## 📂 Project Structure (example)

```bash
streamify/
├── backend/           # Express + MongoDB API, auth, friends, chat, calls
│   ├── src/
│   ├── tests/
│   └── ...
└── frontend/          # React + TanStack Query + Tailwind UI
    ├── src/
    │   ├── pages/     # Login, signup, onboarding, chat, calls, notifications
    │   ├── components/
    │   ├── hooks/
    │   └── context/
    └── ...
