# Next-Cart

Next-Cart is a modern e-commerce web application built with [Next.js](https://nextjs.org), React, and MongoDB. It features user authentication, product management, and a responsive UI powered by Tailwind CSS and DaisyUI.

---

## 🚀 Features

- User authentication with NextAuth (Google OAuth)
- Product listing, details, and dashboard management
- Responsive design with Tailwind CSS & DaisyUI
- MongoDB integration for data persistence
- Image upload support (IMGBB API)
- Toast notifications and reusable components

---

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/yeasin-islam/Next-Cart
   cd next-cart
   ```

2. **Install dependencies**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   - Copy `.env.local` and update with your credentials:
     - Google OAuth Client ID/Secret
     - MongoDB URI
     - IMGBB API Key

4. **Run the development server**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   - Visit [http://localhost:3000](http://localhost:3000)

---

## 🗺️ Route Summary

| Route                        | Description                        |
|------------------------------|------------------------------------|
| `/`                          | Home page                          |
| `/about`                     | About page                         |
| `/contact`                   | Contact page                       |
| `/login`                     | User login (Google OAuth)          |
| `/profile`                   | User profile                       |
| `/products`                  | Product listing                    |
| `/products/[id]`             | Product details                    |
| `/dashboard`                 | Dashboard layout                   |
| `/dashboard/overview`        | Dashboard overview                 |
| `/dashboard/add-product`     | Add new product                    |
| `/api/auth/[...nextauth]`    | Auth API route                     |
| `/api/products`              | Products API route                 |
| `/api/users`                 | Users API route                    |
| `/api/upload`                | Image upload API route             |
| `/favicon.ico`               | Favicon                            |

---

## 📦 Tech Stack

- Next.js 15
- React 19
- MongoDB
- NextAuth
- Tailwind CSS & DaisyUI

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
