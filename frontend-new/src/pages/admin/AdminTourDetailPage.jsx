import { useParams, Link } from "react-router-dom";
import { useTour } from "../../hooks/useTours";

export default function AdminTourDetailPage() {
  const { id } = useParams();
  const { data: tour, isLoading, error } = useTour(id);

  if (isLoading)
    return <div style={{ padding: "2rem" }}>Loading tour details...</div>;
  if (error) return <div style={{ padding: "2rem" }}>Error loading tour</div>;
  if (!tour) return <div style={{ padding: "2rem" }}>Tour not found</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tour Details (Admin View)</h1>

      <div style={{ marginTop: "2rem" }}>
        <p>
          <strong>ID:</strong> {tour.id}
        </p>
        <p>
          <strong>Name:</strong> {tour.name}
        </p>
        <p>
          <strong>Description:</strong> {tour.description}
        </p>
        <p>
          <strong>Price:</strong> ${tour.price}
        </p>
        <p>
          <strong>Duration:</strong> {tour.duration} days
        </p>
        <p>
          <strong>Status:</strong> {tour.status || "Active"}
        </p>
        <p>
          <strong>Created:</strong> {tour.createdAt || "N/A"}
        </p>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <Link to={`/admin/tours/edit/${id}`} style={{ marginRight: "1rem" }}>
          <button style={{ padding: "0.5rem 1rem" }}>Edit</button>
        </Link>
        <Link to="/admin/tours">Back to Tours</Link>
      </div>
    </div>
  );
}
