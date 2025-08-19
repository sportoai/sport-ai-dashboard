import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from "./lib/Route/Routes.tsx"
import { Provider } from "../src/Components/ui/provider.tsx"
import { Button, HStack } from "@chakra-ui/react"

import { BackgroundBeams } from "./Components/ui/background-beams.tsx"

createRoot(document.getElementById("root")!).render(
  <Provider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
)
