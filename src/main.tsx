import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./lib/Route/Routes.tsx"
import { Provider } from "../src/Components/ui/provider.tsx"

createRoot(document.getElementById("root")!).render(
  <Provider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
)
