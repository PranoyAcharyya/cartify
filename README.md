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

## ⚠️ Why Sorting & Filtering May Feel Slow

When a user changes the sorting option or selects a category, the application updates the URL query parameters (e.g. `?sort=price-low`). This triggers a **server-side re-render (SSR)** in Next.js.

### 🔄 What happens under the hood

1. The URL is updated using `router.push()`
2. Next.js detects the change and re-runs the page on the server
3. The server fetches fresh product data via an internal API route
4. The API route calls an external API (via a proxy)
5. The data is processed (sorted/filtered) on the server
6. The updated UI is sent back to the client

### ⏱️ Why this introduces delay

* Each interaction triggers a **full request cycle**
* The app depends on an **external API**, which may be slow
* A **proxy layer** is used to bypass API restrictions, adding extra latency
* No aggressive caching is used (`no-store`), ensuring fresh data but increasing response time

### 💡 Why this approach was chosen

* Demonstrates **Server-Side Rendering (SSR)** as required in the assignment
* Keeps data **consistent and SEO-friendly**
* Reflects how real-world e-commerce platforms handle filtering via URLs

### 🚀 Possible Optimizations

If this were a production application, performance could be improved by:

* Using **client-side sorting/filtering** after initial fetch
* Implementing **better caching strategies (ISR)**
* Reducing dependency on external proxies
* Adding **loading skeletons** for improved UX

---

> Note: The current implementation prioritizes correctness, SSR behavior, and assignment requirements over client-side speed optimizations.


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
