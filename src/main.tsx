import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './index.css'

// Get base path from Vite's import.meta.env.BASE_URL
// This is automatically set by Vite based on the base config
const basePath = import.meta.env.BASE_URL || '/'

// Create a new router instance
const router = createRouter({ 
  routeTree,
  basepath: basePath,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
