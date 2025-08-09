
````md
## Admin Dashboard

A responsive admin dashboard to manage and analyze content (e.g., blog posts), built with **React**, **TypeScript**, **Ant Design**, **Tailwind CSS**, and mock data. Includes full filtering, sorting, editing, and performance visualization.

---

## Features

- View all articles in a sortable, paginated table
- Interactive chart of views (daily/monthly) using `Recharts`
- Edit articles in a modal (title, content, status)
- Clear filters with one click
- Fake login page with role selection (admin / editor)
- Role-based UI logic (only admins can edit)

---

## 🧰 Tech Stack

- **React** with **TypeScript**
- **Tailwind CSS** for layout + **Ant Design** for components
- **Recharts** for data visualization
- **React Router** for routing
- **Context API** for state management

---

## 🖥️ Demo

🔗 **Live URL**: [https://cubix-tech.vercel.app/](https://cubix-tech.vercel.app/)

📁 **GitHub Repo**: [https://github.com/cseswapon/crud-tech.git](https://github.com/cseswapon/crud-tech.git)

---

## 🧑‍💻 User Credentials

The app uses a **fake login system** with two predefined users for testing role-based features:

| Role   | Email              | Password |
|--------|--------------------|----------|
| Admin  | admin@admin.com    | 123456   |
| Editor | editor@gmail.com   | 123456   |

- **Admins** can view and edit articles.
- **Editors** can only view content (no editing privileges).

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/cseswapon/crud-tech.git
cd crud-tech
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the app locally

```bash
npm run dev
# or
yarn dev
```

The app will be running at `http://localhost:5173` (or your Vite dev port).
````
