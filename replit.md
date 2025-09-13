# Smart Flow - AI Automation Platform

## Overview

Smart Flow is a modern fullstack web application for a Latin American startup specializing in AI automation and business process optimization. The platform provides automated solutions to help companies reduce costs, save time, and improve customer service through intelligent workflow automation.

The application features a professional SaaS-style design with a dark mode aesthetic, electric green accents, and a comprehensive service offering including process auditing, workflow implementation, maintenance support, and AI consulting.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing with single-page application structure
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: TailwindCSS with extended configuration for custom color palette and design system
- **State Management**: TanStack React Query for server state management and data fetching
- **Internationalization**: Ready for react-i18next implementation (Spanish/English support)

### Backend Architecture
- **Server**: Express.js REST API with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL schema definition
- **Email**: Nodemailer integration for contact form submissions
- **Validation**: Zod schema validation for type-safe data handling
- **Storage**: Configurable storage interface with in-memory implementation (ready for database upgrade)

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM migrations
- **Schema**: User management and contact form tables with proper relationships
- **Provider**: Neon Database serverless PostgreSQL (configured via DATABASE_URL)

### Design System
- **Color Palette**: Dark mode primary with electric green (#00FF9D) brand accent
- **Typography**: Inter font family for clean, technical readability
- **Components**: Professional startup aesthetic inspired by Linear, Notion, and Vercel
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Development Tools
- **Build System**: Vite with React plugin and runtime error overlay
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Development**: Hot module replacement and development server integration
- **Asset Management**: Static asset handling with proper path resolution

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connectivity
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Accessible UI component primitives
- **drizzle-orm**: Type-safe database ORM with PostgreSQL support
- **nodemailer**: Email sending functionality for contact forms
- **wouter**: Lightweight React router

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking and enhanced developer experience
- **tailwindcss**: Utility-first CSS framework
- **drizzle-kit**: Database migrations and schema management

### Analytics & Monitoring
- **Google Analytics**: Integrated page view and event tracking
- **Environment Variables**: VITE_GA_MEASUREMENT_ID for analytics configuration

### UI Enhancement
- **class-variance-authority**: Type-safe component variants
- **clsx**: Conditional className utilities
- **date-fns**: Date manipulation and formatting
- **lucide-react**: Modern icon library for consistent iconography

The application is production-ready with proper error handling, SEO optimization, and responsive design suitable for deployment to modern hosting platforms.