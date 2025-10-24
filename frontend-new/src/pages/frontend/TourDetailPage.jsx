import { useParams, Link } from "react-router-dom";
import { useTour } from "../../hooks/useTours";

export default function TourDetailPage() {
  const { id } = useParams();
  const { data: tour, isLoading, error } = useTour(id);

  if (isLoading)
    return <div style={{ padding: "2rem" }}>Loading tour details...</div>;
  if (error) return <div style={{ padding: "2rem" }}>Error loading tour</div>;
  if (!tour) return <div style={{ padding: "2rem" }}>Tour not found</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tour Detail: {tour.name}</h1>
      <div style={{ marginTop: "1rem" }}>
        <p>
          <strong>Description:</strong> {tour.description}
        </p>
        <p>
          <strong>Price:</strong> ${tour.price}
        </p>
        <p>
          <strong>Duration:</strong> {tour.duration} days
        </p>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <button style={{ padding: "0.5rem 1rem", marginRight: "1rem" }}>
          Book Now
        </button>
        <Link to="/tours">Back to Tours</Link>
      </div>
    </div>
  );
}
