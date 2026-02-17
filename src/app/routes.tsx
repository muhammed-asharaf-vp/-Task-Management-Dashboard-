import { createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import DashboardPage from "../pages/DashboardPage"
import ProtectedRoute from "../components/layout/ProtectedRoute"
import PublicRoute from "../components/layout/PublicRoute"

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
])
