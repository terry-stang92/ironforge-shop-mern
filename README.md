# ironforge-shop-mern
<img width="1820" height="810" alt="Screenshot_28-6-2026_51345_ironforge-shop-mern netlify app" src="https://github.com/user-attachments/assets/b5c7742c-7e3e-45b7-8ed5-4a647f961021" />

# IronForge Shop 🏋️

A full-stack e-commerce platform for fitness supplements, built with the MERN stack. Customers can browse and filter products by category, while authenticated admins can manage the entire product catalog through protected routes.

## 🔗 Live Demo

- **Frontend:** [ironforge-shop-mern.netlify.app](https://ironforge-shop-mern.netlify.app)
- **Backend API:** [ironforge-shop-mern.onrender.com](https://ironforge-shop-mern.onrender.com)

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Axios

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT (JSON Web Tokens) for authentication
- bcrypt.js for password hashing

**Deployment**
- Netlify (frontend)
- Render (backend)
- MongoDB Atlas (database)

## ✨ Features

- 🛍️ Browse products with category filtering (pre-workout, protein, recovery, vitamins)
- 🔐 Secure admin authentication with JWT
- ➕ Full CRUD — admins can create, edit, and delete products
- 📦 Real-time product data from MongoDB, no hardcoded content
- 🎨 Responsive design with Tailwind CSS
- 🌐 Deployed and live on the internet

## 🧠 What This Project Demonstrates

- RESTful API design (GET, POST, PUT, DELETE routes)
- Authentication & authorization with JWT middleware protecting write operations
- Password security with bcrypt hashing
- MongoDB schema design with validation (required fields, enums, defaults)
- React state management with hooks (useState, useEffect)
- API integration with Axios and interceptors
- Environment variable management for secure deployment
- Full deployment pipeline (frontend + backend + database, all separately hosted)

## 🚀 Running Locally

**Backend**
```bash
cd server
npm install
npm run dev
```

**Frontend**
```bash
cd ironforge-shop
npm install
npm run dev
```

Create a `.env` file inside `server/` with:
