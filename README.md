# Star Wars Battle Game

A React application that lets users battle Star Wars characters and starships using the SWAPI (Star Wars API).

## Features

- People battles based on mass
- Starship battles based on crew size
- Real-time score tracking
- Route-based game modes
- Loading states with skeletons
- Error handling with retry mechanism

## Tech Stack

- React + TypeScript
- Vite for build tooling
- React Query for data fetching
- React Router for navigation
- Tailwind CSS for styling
- Vitest for testing
- Strong-mock for type-safe mocking

## Why Tailwind CSS and not Material UI?

Tailwind provides utility-first CSS that enables:

- Faster development with inline styles
- Smaller bundle size by purging unused styles
- Complete styling control without component library constraints
- Easy responsive design
- Simple theme customization
- No need to context switch between JS and CSS files

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. run tests:

```bash 
npm run test
```
```
src/
├── components/ # Reusable UI components
├── hooks/ # Custom React hooks
├── routes/ # Route components
├── __tests__/ # Test files
├── types.ts # TypeScript definitions
└── api.ts # API client and services
```

