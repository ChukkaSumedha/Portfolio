# Portfolio Website

## Overview

This is a modern portfolio website for Sumedha Chukka, an AI/ML Engineer and Computer Science graduate from IIT Bhubaneswar. The application showcases projects, experience, skills, and achievements in artificial intelligence and machine learning. Built as a full-stack web application with a React frontend and Express backend, it features a contact form system for professional inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state and React hooks for local state
- **Animations**: Framer Motion for smooth transitions and scroll-based animations
- **Theme System**: Custom dark/light theme provider with localStorage persistence

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Type Safety**: TypeScript throughout the entire application
- **API Design**: RESTful API endpoints for contact form submission
- **Data Storage**: In-memory storage with interface abstraction for future database integration
- **Validation**: Zod schema validation for request/response data

### Development & Build System
- **Build Tool**: Vite for fast development and optimized production builds
- **Development**: Hot module replacement and TypeScript checking
- **Code Organization**: Monorepo structure with shared types and schemas
- **Path Mapping**: TypeScript path aliases for clean imports (@/, @shared/)

### Contact System
The application implements a contact form system that:
- Validates input using Zod schemas
- Stores messages in memory (ready for database integration)
- Provides API endpoints for form submission and message retrieval
- Includes error handling and user feedback via toast notifications

### Design System
- **Typography**: Custom font stack with Inter, Poppins, and JetBrains Mono
- **Color Scheme**: Dark-first design with blue and purple accent colors
- **Components**: Consistent component library with hover states and animations
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

## External Dependencies

### UI & Styling
- **@radix-ui/***: Primitive UI components for accessibility and behavior
- **tailwindcss**: Utility-first CSS framework
- **framer-motion**: Animation library for React
- **class-variance-authority**: Type-safe component variants
- **clsx & tailwind-merge**: Conditional class name utilities

### Data & Validation
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe SQL query builder (prepared for PostgreSQL)
- **drizzle-zod**: Schema validation integration
- **zod**: Runtime type validation

### Database Infrastructure
- **@neondatabase/serverless**: Prepared for Neon PostgreSQL integration
- **drizzle-kit**: Database schema management and migrations
- **connect-pg-simple**: PostgreSQL session store (prepared for future use)

### Development Tools
- **vite**: Build tool and development server
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **wouter**: Lightweight React router
- **date-fns**: Date manipulation utilities

### Assets & Fonts
The application includes custom font loading from Google Fonts and references attached assets for images and media content.