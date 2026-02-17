import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuthStore } from "../../store/authStore";
import { Loader } from "lucide-react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, isHydrated } = useAuthStore();

  if (!isHydrated) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader size="lg" />
    </div>
  );
}

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
