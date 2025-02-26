# AI-Powered Story Generator

## 🚀 Overview

This AI-powered story generator creates customized children's stories based on user input. Users provide a name, a character type, and a topic, and the AI generates a unique story with an AI-generated illustration. The project is built with:

- **Frontend:** Next.js (React, Tailwind CSS, Framer Motion for animations)
- **Backend:** FastAPI (Python, PostgreSQL for database storage)
- **AI Integration:** OpenAI GPT for text generation, DALL·E for illustrations
- **Storage:** Cloudinary for image hosting
- **Deployment:** Frontend on Vercel, Backend on Render, Database on Railway

---

## 🛠 Features

✅ Generate AI-powered children's stories based on user input\
✅ AI-generated illustrations for each story\
✅ Save stories to a database\
✅ View past stories with pagination\
✅ Download stories as PDFs\
✅ Mobile-friendly and animated UI

---

## 🎨 Tech Stack

**Frontend:**

- Next.js (App Router)
- Tailwind CSS (UI Styling)
- Framer Motion (Animations)
- React Hooks & Context API

**Backend (https://github.com/ttrujillo1987/ai-story-backend):**

- FastAPI (Python)
- PostgreSQL (Database)
- SQLAlchemy (ORM)
- OpenAI API (Story & Image Generation)
- Cloudinary (Image Storage)

**Deployment:**

- Vercel (Frontend)
- Render (Backend)
- Railway (PostgreSQL Database)

---

## 📌 Setup Instructions

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/yourusername/ai-story-generator.git
cd ai-story-generator
```

### 2️⃣ Set Up the Backend

```sh
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
```

Create a `.env` file in the `backend` directory and add:

```sh
OPENAI_API_KEY=your-openai-api-key
DATABASE_URL=your-database-url
CLOUDINARY_CLOUD_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```

Run the FastAPI server:

```sh
uvicorn main:app --reload
```

### 3️⃣ Set Up the Frontend

```sh
cd ../frontend
npm install
```

Start the Next.js development server:

```sh
npm run dev
```

Now, visit `http://localhost:3000` to use the application!

---

## 📡 Deployment

### 🚀 Backend (Render)

1. Push the backend to GitHub
2. Create a **new Web Service** on [Render](https://render.com/)
3. Use the following settings:
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn main:app --host 0.0.0.0 --port 10000`
4. Add environment variables in Render
5. Deploy and get the backend URL

### 🚀 Database (Railway)

1. Go to [Railway](https://railway.app/)
2. Create a **new PostgreSQL database**
3. Copy the `DATABASE_URL` and update it in Render

### 🚀 Frontend (Vercel)

1. Push the frontend to GitHub
2. Deploy on [Vercel](https://vercel.com/)
3. Set environment variable `NEXT_PUBLIC_BACKEND_URL=your-render-backend-url`
4. Deploy and test!

---

## 📖 API Endpoints

| Method   | Endpoint              | Description                           |
| -------- | --------------------- | ------------------------------------- |
| `POST`   | `/generate-story`     | Generates a story based on user input |
| `GET`    | `/stories`            | Retrieves past stories                |
| `DELETE` | `/stories/{story_id}` | Deletes a saved story                 |

---

## 🛠 Future Enhancements

🔹 Add user authentication (optional)\
🔹 Allow users to edit stories\
🔹 Improve AI-generated illustrations\
🔹 Add more story customization options

---

🚀 Happy Storytelling! 📖✨

