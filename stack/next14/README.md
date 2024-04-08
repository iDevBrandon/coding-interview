# Next.js 14

all sources comes from [Codevolution Next.js course](https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI)

## 1 - Introduction

1. Routing
2. API routes
3. Rendering
4. Data fetching
5. Styling
6. Optimization
7. Dev and prod build system

## 2 - Hello World

## 3- Project Structure

## 4- Before We Start

React Server Components(RSC)
React Server Components is a new architecture with server and client Components

### Server Components

- In Next.js, all components are server components by default.
- They have the ability to run tasks like reading files or fetching data from a database.
- However, they don't have the ability to use hooks or handle user interactions

### Client Components

- To create a Client component, it's necessary to add "use client" at the top of the component file.
- Client components can't perform tasks like reading files, but they have the ability to use hooks and manage interactions.

## 5- Routing

file system based routing mechanism

Every file that corresponds to a route must be named page.js or page.tsx
