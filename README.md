# 🚀 Horizon – Creative Landing Page Web Application

## 📌 Overview

**Horizon** is a modern full-stack web application designed as a marketing and landing page solution. It features dynamic sections like Hero, Features, Pricing, Testimonials, and more, with a clean and modular architecture. Built with cutting-edge technologies, Horizon offers scalability, maintainability, and an impressive user interface.

---

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, Wouter, React Query
- **Backend:** Express.js
- **Database:** PostgreSQL (planned) with Drizzle ORM
- **Bundling & Build Tools:** Vite + ESBuild
- **Validation & ORM:** Zod + Drizzle ORM

---

## 🧠 Features

- ✨ Fully responsive, marketing-style UI
- ⚡ Fast frontend bundling with Vite
- 🔌 API-ready Express backend with modular routes
- 🧩 Shared schemas for tight frontend-backend integration
- 📦 Planned integration with PostgreSQL using Drizzle ORM
- 🧠 Smart state management with React Query
- 🌗 Built-in theme customization and accessibility with Radix UI

---

## 🏗️ System Architecture

### Frontend

- **Framework:** React (feature-based structure)
- **Styling:** Tailwind CSS with custom themes
- **Routing:** Wouter for lightweight routing
- **Components:** Reusable, accessible components from shadcn/ui and Radix UI
- **Data Management:** React Query for fetching, caching, and syncing data
- **Extras:** Custom hooks for animations, mobile detection, and notifications

### Backend

- **Framework:** Express.js
- **Routes:** Defined in `server/routes.ts`
- **Middleware:** Basic logging and error handling
- **Storage Layer:** Abstracted via `server/storage.ts`, ready for PostgreSQL
- **API Prefix:** All APIs served under `/api`

### Database

- Defined using Drizzle ORM in `shared/schema.ts`
- User schema includes basic fields: `id`, `username`, `password`
- Type-safe validation using `drizzle-zod`

---

## 🔄 Data Flow

1. **Frontend to Backend:**
   - API calls made via `apiRequest` in `queryClient.ts`
   - React Query handles loading, caching, and syncing

2. **Backend to Database:**
   - Backend routes access abstracted storage methods
   - Currently uses in-memory data (can easily switch to PostgreSQL)

---

## 🔐 Authentication (In Progress)

- User schema is present but login/registration logic is yet to be implemented.
- Future support for hashed passwords and secure JWT-based auth.

---

## 📁 Folder Structure

```
/client         → Frontend React app  
  /src  
    /components → UI & section components  
    /pages      → Page-level components  
    /hooks      → Custom hooks  
    /lib        → Utility functions  

/server         → Express backend  
  index.ts      → Server entry point  
  routes.ts     → API routes  
  storage.ts    → DB abstraction  
  vite.ts       → Dev server config  

/shared         → Shared DB schema & types  
  schema.ts     → Drizzle ORM schema  
```

---

## 🧪 Development Setup

1. **Clone the Repository:**
```bash
git clone https://github.com/your-username/horizon-landing-page.git
cd horizon-landing-page
```

2. **Install Dependencies:**
```bash
npm install
```

3. **Setup Database (optional):**
```env
# .env
DATABASE_URL=your_postgresql_url
```
```bash
npm run db:push
```

4. **Start Development Server:**
```bash
npm run dev
npm run dev:client
```

5. **Build for Production:**
```bash
npm run build
npm run start
```

---

## 🧩 External Dependencies

### Frontend
- React, Tailwind CSS, shadcn/ui, Radix UI
- React Query, React Hook Form, Wouter

### Backend
- Express.js, Drizzle ORM, Zod

### Dev Tools
- Vite, TypeScript, ESBuild

---

> Made with 💻 and ☕ by **Aditya Yeola**
