# 🛍️ Cartify – Product Listing Page

A responsive Product Listing Page built using **Next.js (App Router)** with **Server-Side Rendering (SSR)**, clean architecture, and minimal dependencies.

---

## 🚀 Live Demo

👉 [Live Site Link](https://cartify-pi-seven.vercel.app/)

## 📂 GitHub Repository

👉 [GitHub Repo](https://github.com/PranoyAcharyya/cartify)

---

## 📌 Features

* ✅ Server-Side Rendering (SSR) using Next.js
* ✅ Product listing using Fake Store API
* ✅ Category filtering
* ✅ Sorting (price, newest, popular)
* ✅ Wishlist functionality (Zustand)
* ✅ Custom modal (no external library)
* ✅ Responsive design (mobile + tablet + desktop)
* ✅ SEO optimized (meta tags, semantic HTML)
* ✅ Optimized images using Next.js `<Image />`

---

## 🧱 Tech Stack

* **Next.js (App Router)**
* **React**
* **TypeScript**
* **CSS Modules (No CSS framework)**
* **Zustand (State Management)**
* **Axios (API layer)**
* **Lucide Icons**

---


---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/Appscrip-task-yourname.git
cd Appscrip-task-yourname
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Setup environment variables

Create a `.env.local` file in root:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=https://fakestoreapi.com
```

---

### 4️⃣ Run the development server

```bash
npm run dev
```

👉 Open: http://localhost:3000

---

## 🔍 SEO Implementation

* Page title & meta description
* Proper use of `<h1>` and `<h2>`
* Image `alt` attributes
* Semantic HTML structure

---

## 🧠 Key Decisions

* Used **Zustand instead of Redux** to keep the app lightweight and avoid boilerplate
* Created a **custom modal** instead of using a library to reduce dependencies
* Used **Next.js API routes** to abstract external API calls
* Kept **CSS modular and minimal** for better maintainability

---

## 📱 Responsive Design

* Desktop → Full layout with sidebar
* Tablet → Adjusted grid
* Mobile → Drawer-based filter + compact UI

---

## 🎯 Performance Considerations

* Server-side data fetching (SSR)
* Optimized images with Next.js
* Minimal DOM structure
* Avoided heavy UI libraries

---

## 🙌 Author

**Your Name**

---

## 📄 License

This project is for assignment/demo purposes.
