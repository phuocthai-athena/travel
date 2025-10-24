import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

const ProtectedRoute = ({ children, roles }) => {
  const user = useAuthStore((state) => state.user);

  // Bypass authentication if env variable is set (development only)
  const bypassAuth = import.meta.env.VITE_BYPASS_ADMIN === "true";

  if (bypassAuth && roles?.includes("admin")) {
    console.warn(
      "⚠️ BYPASS_ADMIN is enabled - Authentication is disabled for admin routes"
    );
    return children;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
