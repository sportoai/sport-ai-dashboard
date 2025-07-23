import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes.tsx'
import { BackgroundBeams } from './Components/ui/background-beams.tsx'

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>

      <AppRoutes />
    </BrowserRouter>
)
