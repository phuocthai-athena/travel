import { Link } from "react-router-dom";
import { useTours } from "../../hooks/useTours";

export default function TourListPage() {
  const { data: tours, isLoading, error } = useTours();

  if (isLoading) return <div style={{ padding: "2rem" }}>Loading tours...</div>;
  if (error) return <div style={{ padding: "2rem" }}>Error loading tours</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tour List</h1>
      <p>Browse all available tours</p>

      <div style={{ marginTop: "2rem" }}>
        {tours && tours.length > 0 ? (
          <ul>
            {tours.map((tour) => (
              <li key={tour.id} style={{ marginBottom: "1rem" }}>
                <Link to={`/tour/${tour.id}`}>{tour.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tours available</p>
        )}
      </div>

      <p style={{ marginTop: "2rem" }}>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}
