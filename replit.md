# Horizon - Web Application Guide

## Overview

This project is a full-stack web application built with a modern JavaScript stack:
- Frontend: React with various UI components (shadcn/ui, Radix UI)
- Backend: Express.js server
- Database: PostgreSQL with Drizzle ORM
- Configuration: Vite for frontend bundling and TypeScript for type safety

The application appears to be a marketing/landing site called "Horizon" with various sections like Hero, Features, Pricing, Testimonials, etc. It's set up with a clean architecture that separates client and server code, with shared schemas between them.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built with React and organized in a feature-based structure:
- Components are organized by feature/purpose with UI components from shadcn/ui
- Client-side routing is managed using Wouter
- State management uses React Query for asynchronous data fetching
- Styling is implemented with Tailwind CSS with a custom theme configuration

The UI follows a consistent design language with predefined color variables and components from Radix UI, wrapped with custom styling. The application has both client-side components and server endpoints.

### Backend Architecture

The backend is built with Express.js:
- Routes are registered in `server/routes.ts`
- API endpoints are prefixed with `/api`
- The server implements simple middleware for logging and error handling
- Storage interface for database operations is defined in `server/storage.ts`

The current implementation uses an in-memory storage solution, but the architecture is designed to easily swap this with a PostgreSQL database using Drizzle ORM.

### Database Design

The database schema is defined using Drizzle ORM in `shared/schema.ts`. Currently, it has:
- `users` table with columns for id, username, and password
- Schema validation is implemented using Drizzle-Zod for type safety

## Key Components

1. **Client Components:**
   - Page components (`Home.tsx`, `NotFound.tsx`)
   - UI components (from shadcn/ui and custom components)
   - Several marketing sections (Hero, Features, Pricing, etc.)
   - Hooks for animations, mobile detection, and toast notifications

2. **Server Components:**
   - Express server setup (`server/index.ts`)
   - Route registration (`server/routes.ts`)
   - Storage interface (`server/storage.ts`)
   - Vite development server integration (`server/vite.ts`)

3. **Shared Components:**
   - Database schema (`shared/schema.ts`)
   - Type definitions for database entities

## Data Flow

1. **Frontend to Backend:**
   - API requests are made using the `apiRequest` function in `queryClient.ts`
   - React Query is used to manage server state and caching

2. **Backend to Database:**
   - The storage interface provides an abstraction for database operations
   - Currently implemented with an in-memory solution but designed to work with PostgreSQL

3. **Authentication Flow:**
   - User schema is defined but the authentication implementation is not complete
   - The database schema includes users with username and password fields

## External Dependencies

### Frontend Dependencies:
- React for UI
- Radix UI for accessible UI primitives
- Tailwind CSS for styling
- Wouter for routing
- React Query for data fetching and caching
- React Hook Form for form handling

### Backend Dependencies:
- Express.js for the server
- Drizzle ORM for database operations
- Zod for schema validation

### Development Dependencies:
- Vite for development and building
- TypeScript for type checking
- ESBuild for server bundling

## Deployment Strategy

The application is configured for deployment on Replit:
- The `.replit` file defines build and run commands
- The build command bundles both client and server code
- The application exposes port 5000, which is mapped to port 80 for external access

For production:
1. The frontend is built using Vite
2. The server is bundled using ESBuild
3. The server serves the static assets from the `dist/public` directory
4. The application runs in Node.js environment

## Getting Started

1. **Setup Database:**
   - The application expects a PostgreSQL database
   - Set the `DATABASE_URL` environment variable
   - Run `npm run db:push` to create the database schema

2. **Development Mode:**
   - Run `npm run dev` to start the development server
   - This will start both the frontend Vite server and the backend Express server

3. **Production Build:**
   - Run `npm run build` to create a production build
   - Run `npm run start` to start the production server

## Important Files and Directories

- `/client`: Contains all frontend code
  - `/src`: React application source code
  - `/src/components`: UI components
  - `/src/hooks`: Custom React hooks
  - `/src/lib`: Utility functions and configurations
  - `/src/pages`: Page components

- `/server`: Contains all backend code
  - `index.ts`: Main server entry point
  - `routes.ts`: API route definitions
  - `storage.ts`: Database abstraction layer
  - `vite.ts`: Development server configuration

- `/shared`: Contains code shared between frontend and backend
  - `schema.ts`: Database schema definitions

- Configuration files:
  - `drizzle.config.ts`: Database ORM configuration
  - `tailwind.config.ts`: CSS styling configuration
  - `vite.config.ts`: Frontend build configuration
  - `tsconfig.json`: TypeScript configuration