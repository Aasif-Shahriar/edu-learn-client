# 🎓 Course Management System

A full-featured web application for browsing, managing, and enrolling in educational courses. Built with React, Node.js, Firebase, MongoDB, and JWT-based authentication — this project is designed to simulate a real-world online course platform like Coursera or Udemy.

---

## 🚀 Live Demo

🌐 [Live Site URL](https://edu-learn-jwt.netlify.app)  


---

## 🎯 Project Purpose

The main goal of this project is to apply real-world authentication and security concepts in a modern MERN-stack application. It demonstrates secure CRUD operations, protected routes, JWT-based authentication, Firebase social login, and Axios interceptors for API security.

---

## 📌 Key Features

### 👥 Authentication & Authorization
- JWT-based secure login/register system
- Firebase Authentication with Google & GitHub social login
- Protected/private routes using `react-router` and custom route guards
- Session persistence with secure Firebase and JWT token handling

### 📚 Course Features
- Add, edit, delete your own courses (private route)
- View detailed course info, including limited seat management
- Enroll/unenroll from courses (max 3 concurrent enrollments)
- Course seat availability updates in real-time
- View enrolled courses with option to remove enrollment

### 🏠 Pages and Layout
- Home with hero slider (react-slick + framer-motion)
- Latest Courses and Popular Courses sections
- Courses Page with category filter, search, and level sort
- Responsive Navbar/Footer based on auth state
- Custom 404 Not Found page
- Dynamic page titles based on route

### 🛡️ Security & Best Practices
- Firebase config & MongoDB URI stored in `.env` (environment variables)
- Axios interceptor with token refresh handling
- CORS errors handled in both client and server
- Prevent double enrollment or more than 3 active enrollments
- Prevent users from enrolling if seats are full

### 🧩 Additional Features
- Loading spinners during data fetch
- Toast notifications for CRUD actions
- Mobile-first responsive design
- Route reloads do not break (SPA-compliant)
- Bonus Route: Blog or FAQ page (based on theme)

---

## 🧪 Tech Stack

**Frontend**
- React.js
- React Router
- Tailwind CSS / DaisyUI
- Axios
- Firebase
- React Icons
- React Slick
- Framer Motion
- React Toastify
- Sweet Alert

**Backend**
- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT)
- CORS + Dotenv

---

## ⚙️ Environment Variables

Create a `.env` file in both client and server with the following:

### Client Side (`.env`)
```env
VITE_apiKey=AIzaSyCoKr6Twbal-sd__q3byA4h5GCKHK89J78
VITE_authDomain=edu-learn-auth.firebaseapp.com
VITE_projectId=edu-learn-auth
VITE_storageBucket=edu-learn-auth.firebasestorage.app
VITE_messagingSenderId=1095314733388
VITE_appId=1:1095314733388:web:55bcc2ad3277293468b7e9
VITE_API_URL=https://edu-learn-server-jwt.vercel.app
