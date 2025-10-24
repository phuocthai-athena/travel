import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user?.name}</p>

      <nav style={{ marginTop: "2rem" }}>
        <ul>
          <li style={{ marginBottom: "0.5rem" }}>
            <Link to="/admin/tours">Manage Tours</Link>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <Link to="/">Back to Home</Link>
          </li>
        </ul>
      </nav>

      <div style={{ marginTop: "2rem" }}>
        <h2>Statistics</h2>
        <p>Total Tours: 0</p>
        <p>Total Bookings: 0</p>
        <p>Revenue: $0</p>
      </div>
    </div>
  );
}
