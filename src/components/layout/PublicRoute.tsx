import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuthStore } from "../../store/authStore";

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { user, isHydrated } = useAuthStore();

  if (!isHydrated) return null;

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
