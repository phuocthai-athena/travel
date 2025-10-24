import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTour, useUpdateTour } from "../../hooks/useTours";

export default function AdminEditTourPage() {
  const { id } = useParams();
  const { data: tour, isLoading } = useTour(id);
  const updateTour = useUpdateTour();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    if (tour) {
      setName(tour.name || "");
      setDescription(tour.description || "");
      setPrice(tour.price?.toString() || "");
      setDuration(tour.duration?.toString() || "");
    }
  }, [tour]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTour.mutate(
      {
        id,
        data: {
          name,
          description,
          price: parseFloat(price),
          duration: parseInt(duration),
        },
      },
      {
        onSuccess: () => {
          navigate("/admin/tours");
        },
      }
    );
  };

  if (isLoading) return <div style={{ padding: "2rem" }}>Loading tour...</div>;
  if (!tour) return <div style={{ padding: "2rem" }}>Tour not found</div>;

  return (
    <div style={{ padding: "2rem", maxWidth: "600px" }}>
      <h1>Edit Tour</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Tour Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ display: "block", width: "100%", padding: "0.5rem" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={5}
              style={{ display: "block", width: "100%", padding: "0.5rem" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Price ($):
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              min="0"
              step="0.01"
              style={{ display: "block", width: "100%", padding: "0.5rem" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Duration (days):
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
              min="1"
              style={{ display: "block", width: "100%", padding: "0.5rem" }}
            />
          </label>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <button
            type="submit"
            disabled={updateTour.isPending}
            style={{ padding: "0.5rem 1rem", marginRight: "1rem" }}
          >
            {updateTour.isPending ? "Updating..." : "Update Tour"}
          </button>
          <Link to="/admin/tours">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
