import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";

export default function HomePage() {
  const user = useAuthStore((state) => state.user);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Home Page</h1>
      <p>Welcome to the Travel Booking System</p>

      {user ? (
        <div>
          <p>
            Logged in as: {user.name} ({user.role})
          </p>
          <nav>
            <Link to="/tours" style={{ marginRight: "1rem" }}>
              Browse Tours
            </Link>
            <Link to="/profile" style={{ marginRight: "1rem" }}>
              Profile
            </Link>
            {user.role === "admin" && (
              <Link to="/admin" style={{ marginRight: "1rem" }}>
                Admin Dashboard
              </Link>
            )}
          </nav>
        </div>
      ) : (
        <nav>
          <Link to="/login" style={{ marginRight: "1rem" }}>
            Login
          </Link>
          <Link to="/register" style={{ marginRight: "1rem" }}>
            Register
          </Link>
          <Link to="/tours">Browse Tours</Link>
        </nav>
      )}
    </div>
  );
}
