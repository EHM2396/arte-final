# 🚀 Fullstack Base: React + Vite + TypeScript + Node + PostgreSQL

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.x-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-8.x-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-2.x-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)

---

## 📦 Estructura del proyecto

```
/my-project
 ├─ /backend   → Node + TypeScript + Express + PostgreSQL
 └─ /frontend  → React + Vite + TypeScript + Tailwind
```

---

## 🚀 Cómo iniciar el proyecto

### 🔥 Backend
```bash
cd backend
npm install
npm run dev
```
Corre en: `http://localhost:3001`

---

### ⚡ Frontend
```bash
cd frontend
npm install
npm run dev
```
Corre en: `http://localhost:5173`

---

### 🚀 Levantar ambos a la vez (opcional)
Si quieres levantar backend + frontend juntos desde el monorepo, instala `concurrently` en la raíz:

```bash
npm install -D concurrently
```

Y agrega en tu `package.json` de la raíz:

```json
"scripts": {
  "dev": "concurrently \"cd backend && npm run dev\" \"cd frontend && npm run dev\""
}
```

Ahora puedes hacer:

```bash
npm run dev
```

---

## ⚙️ Variables de entorno

### Backend
`.env` en `/backend`:
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=mydatabase
PORT=3001
```

### Frontend
`.env` en `/frontend`:
```
VITE_API_URL=http://localhost:3001
```

---

## 📚 Stack base

- ⚛️ React 18 + TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🌐 React Router
- 🌙 Dark Mode
- 🚀 Node + Express + Knex + PostgreSQL
- 🧰 ESLint + Prettier
