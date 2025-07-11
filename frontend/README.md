# 🚀 Frontend Base React + Vite + TypeScript

Este proyecto es un **frontend base profesional** listo para usar en cualquier aplicación, con:

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/Router-6.x-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-8.x-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-2.x-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)

✅ React + TypeScript  
✅ Vite (build ultrarrápido)  
✅ Tailwind CSS (modo claro/oscuro con toggle)  
✅ React Router  
✅ API centralizado con `useApi`  
✅ Context API (ejemplo con AuthContext para login/logout)  
✅ ESLint + Prettier configurados  
✅ Hooks utilitarios (`useDarkMode`, `useDebounce`, `useLocalStorage`)  
✅ Componentes UI (`Card`, `Button`, `Loader`)

---

## 🚀 Cómo iniciar

```bash
npm install
npm run dev
```

Por defecto correrá en:

```
http://localhost:5173
```

---

## ⚙️ Configuración .env

Crea un archivo `.env` en la raíz con:

```
VITE_API_URL=http://localhost:3001
```

Así puedes conectar con tu backend Node + PostgreSQL (o el que uses).

---

## 🧩 Scripts disponibles

| Script         | Descripción                          |
|----------------|-------------------------------------|
| `npm run dev`  | Inicia el servidor Vite en dev      |
| `npm run build`| Genera build para producción        |
| `npm run lint` | Revisa errores de lint con ESLint   |
| `npm run format` | Formatea el código con Prettier   |

---

## 🌙 Modo claro / oscuro

- Detecta la preferencia del usuario automáticamente.
- Puedes alternar manualmente con el botón en el navbar.
- Se guarda en `localStorage`.

---

## 🔥 Estructura del proyecto

```
/src
 ├─ /components    # UI genéricos: Button, Card, Loader
 ├─ /context       # AuthContext global
 ├─ /hooks         # useApi, useDarkMode, useDebounce, useLocalStorage
 ├─ /layouts       # MainLayout (navbar, footer), AuthLayout (login)
 ├─ /pages         # Home, Login
 ├─ /services      # api.ts centralizado
 └─ App.tsx, main.tsx
```

---

## ✅ Linter y formateo

Para revisar errores de código:

```bash
npm run lint
```

Para formatear automáticamente con Prettier:

```bash
npm run format
```

---

## 📚 Stack base

- ⚛️ **React 18**
- ✨ **TypeScript**
- ⚡ **Vite**
- 🎨 **Tailwind CSS**
- 🌙 **Dark Mode**
- 🌐 **React Router DOM**
- 🔌 **ESLint + Prettier**
- 🔥 **Context API + Hooks**
- 🚀 **API centralizado con fetch**

---

## 🚀 Autor

Hecho con 💙 por [Erick Herrera(Enew)](https://github.com/EHM2396).

---
