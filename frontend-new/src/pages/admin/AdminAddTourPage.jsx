import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateTour } from "../../hooks/useTours";

export default function AdminAddTourPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  const createTour = useCreateTour();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTour.mutate(
      {
        name,
        description,
        price: parseFloat(price),
        duration: parseInt(duration),
      },
      {
        onSuccess: () => {
          navigate("/admin/tours");
        },
      }
    );
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px" }}>
      <h1>Add New Tour</h1>

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
            disabled={createTour.isPending}
            style={{ padding: "0.5rem 1rem", marginRight: "1rem" }}
          >
            {createTour.isPending ? "Creating..." : "Create Tour"}
          </button>
          <Link to="/admin/tours">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
