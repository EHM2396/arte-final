# 🚀 Backend Node + TypeScript + PostgreSQL + Knex + Swagger

Este proyecto es una base sólida para construir cualquier API REST moderna en Node.js con PostgreSQL.  
Incluye toda la arquitectura profesional, lista para escalar, con las mejores prácticas.

---

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14.x-blue?logo=postgresql)
![Knex](https://img.shields.io/badge/Knex.js-QueryBuilder-orange?logo=javascript)
![Swagger](https://img.shields.io/badge/Swagger-UI-green?logo=swagger)

🚀 Plantilla base para construir APIs REST modernas en Node.js, con:

- ✅ Node.js + TypeScript totalmente tipado
- 🐘 PostgreSQL + Knex para migraciones y seeds
- 🔥 Express con Helmet, CORS y Logger
- 📚 Swagger UI en `/api-docs` para documentar y probar la API
- ⚙️ Configuración por `.env`
- 🌱 Estructura profesional con controllers, models, middlewares y DB centralizada
- 🛡️ Error handler global

Ideal para empezar cualquier proyecto rápido, escalable y seguro. 🚀

---

## 📂 Estructura del proyecto

/backend
 ├── src
 │   ├── controllers
 │   ├── db
 │   ├── middlewares
 │   ├── models
 │   ├── routes
 │   ├── swagger.yaml
 │   └── index.ts
 ├── migrations
 ├── seeds
 ├── knexfile.js
 ├── package.json
 ├── .env
 └── README.md

---

## 🚀 Instalación

1️⃣ Clona el repositorio:

```bash
git clone https://github.com/tuusuario/tu-repo.git
cd backend
```

2️⃣ Instala las dependencias:

```bash
npm install
```

---

## ⚙️ Configuración por `.env`

```env
SERVER_PORT=3001
DB_USER=postgres
DB_PASSWORD=arteFinal
DB_NAME=arteFinal
DB_HOST=localhost
DB_PORT=5432
```

---

## 🐘 Migraciones y seeds con Knex

```bash
npx knex migrate:latest --knexfile knexfile.js
npx knex seed:run --knexfile knexfile.js
```

---

## 🚀 Scripts NPM

```bash
npm run dev      # desarrollo
npm run build    # compilar
npm start        # producción
```

---

## 📚 Documentación Swagger UI

```
http://localhost:3001/api-docs
```

---

## 🔥 Endpoints actuales

| Método | Ruta           | Descripción                     |
|--------|----------------|--------------------------------|
| GET    | /api/test      | Endpoint de prueba             |
| GET    | /api/test/time | Fecha y hora desde PostgreSQL  |

---

## 🛡️ Seguridad

✅ Helmet, CORS, Logger y Error handler global.

---

## 💡 TODO futuro

- 🔐 JWT
- 🚀 Tests con Jest
- 🔄 CI/CD con GitHub Actions

---

## 📄 Licencia

MIT - Hecho con 💖 por [Erick Herrera(Enew)](https://github.com/EHM2396).
