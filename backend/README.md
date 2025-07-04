# Backend API for Freelancers Network App

This is the **Express + MongoDB** backend API for the Freelancers & Collaborators Network Final Semester Project.  
It supports job postings, authentication, filtering, and bookmarking functionality.

---

## 📁 Folder Structure

```
backend/
├── controllers/        # Route logic for jobs and auth
├── middleware/         # Auth middleware (JWT)
├── models/             # Mongoose schemas for User and JobPost
├── routes/             # Express routers
├── config/             # DB connection config
├── .env.example        # Sample environment variables
├── index.js            # Entry point
└── package.json        # Dependencies
```

---

## 🚀 Features

- 🔐 **JWT Authentication**
- 📄 **Job Posting & Listing**
- 💾 **MongoDB Integration (via Mongoose)**
- 🎯 **Skill & Budget-Based Filtering**
- ⭐ **Bookmarking Jobs by Logged-in Users**

---

## 🧪 Tech Stack

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT** for Authentication
- **Multer** + **Cloudinary** (optional)
- **dotenv** for config management

---

## ⚙️ Environment Variables (`.env`)

Rename `.env.example` to `.env` and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name (optional)
CLOUDINARY_API_KEY=your_cloudinary_key (optional)
CLOUDINARY_API_SECRET=your_cloudinary_secret (optional)
```

---

## 🛠️ Installation & Running the Server

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the server (default port is 5000)
npm run dev
```

Make sure MongoDB is running locally or use [MongoDB Atlas](https://www.mongodb.com/atlas).

---

## 📬 API Routes Overview

| Method | Route                 | Description                     |
|--------|-----------------------|---------------------------------|
| POST   | /api/auth/register    | Register a new user             |
| POST   | /api/auth/login       | Login and get JWT token         |
| GET    | /api/jobs             | Get all job posts               |
| POST   | /api/jobs             | Create a new job post           |
| POST   | /api/jobs/bookmark    | Bookmark a job (auth required)  |
| GET    | /api/user/bookmarks   | Get bookmarked jobs             |

---

## 👤 Author

**Sumamah Ahmad**  
BSCS Student | Final Semester Project  
GitHub: [sumamah701](https://github.com/sumamah701)

---

## ✅ License

MIT – Use this code freely for educational and academic purposes.
