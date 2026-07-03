# 🔗 URL Shortener

A simple and responsive URL Shortener web application built using **Node.js**, **Express.js**, **MongoDB Atlas**, **Mongoose**, and **EJS**. Users can shorten long URLs, access them through generated short links, and track the number of clicks for each shortened URL.

---

## 🚀 Features

- Shorten long URLs into unique short links
- Redirect users to the original URL
- Store URLs securely in MongoDB Atlas
- Track click count for each shortened URL
- Analytics page to view all shortened URLs
- Copy shortened URL to clipboard
- Responsive design for desktop and mobile devices

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- EJS
- HTML5
- CSS3
- JavaScript
- Git & GitHub
- Railway (Deployment)

---

## 📂 Project Structure

```
url-shortener/
│
├── models/
│   └── URL.js
│
├── routes/
│
├── views/
│   ├── index.ejs
│   └── analytics.ejs
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
├── assets/
├── app.js
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Romesa-Farooq/URL_shortener_backend.git
```

Navigate to the project folder:

```bash
cd url_shortener_backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 📸 Application Features

- Home page with URL shortening form
- Generated short URLs
- Automatic redirection to original URLs
- Click tracking for each shortened URL
- Analytics dashboard
- Mobile-responsive interface

---

## 🌐 Live Demo

**Railway Deployment:**  
_http://urlshortenerbackend-production-6587.up.railway.app/?authuser=0_

---

## 📁 GitHub Repository

_https://github.com/Romesa-Farooq/URL_shortener_backend_

---

## 👩‍💻 Author

**Romesa Farooq**

GitHub: https://github.com/Romesa-Farooq

LinkedIn: _www.linkedin.com/in/romesa-f-245889290_

---

## 📄 License

This project was developed for learning purposes as part of the **DevelopersHub Backend Development Internship**.
