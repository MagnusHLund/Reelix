import App from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SkeletonTheme } from 'react-loading-skeleton'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SkeletonTheme baseColor="#123123" highlightColor="#456789">
        <App />
      </SkeletonTheme>
    </BrowserRouter>
  </StrictMode>
)
