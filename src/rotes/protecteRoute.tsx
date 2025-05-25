import type React from "react"

import type { ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAuthContext } from "../providers/AuthProvider"

interface ProtectedRouteProps {
  children: ReactNode
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuthContext()
  const location = useLocation()

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          background: "#0f0f0f",
          color: "white",
        }}
      >
        <div>Carregando...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" state={{ from: location }} replace />
  }

  return <>{children}</>
}