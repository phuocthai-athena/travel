import { Link } from "react-router-dom";
import { useTours, useDeleteTour } from "../../hooks/useTours";

export default function AdminTourListPage() {
  const { data: tours, isLoading, error } = useTours();
  const deleteTour = useDeleteTour();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tour?")) {
      deleteTour.mutate(id);
    }
  };

  if (isLoading) return <div style={{ padding: "2rem" }}>Loading tours...</div>;
  if (error) return <div style={{ padding: "2rem" }}>Error loading tours</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Manage Tours</h1>
        <Link to="/admin/tours/add">
          <button style={{ padding: "0.5rem 1rem" }}>Add New Tour</button>
        </Link>
      </div>

      <div style={{ marginTop: "2rem" }}>
        {tours && tours.length > 0 ? (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #ccc" }}>
                <th style={{ padding: "0.5rem", textAlign: "left" }}>Name</th>
                <th style={{ padding: "0.5rem", textAlign: "left" }}>Price</th>
                <th style={{ padding: "0.5rem", textAlign: "left" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {tours.map((tour) => (
                <tr key={tour.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "0.5rem" }}>{tour.name}</td>
                  <td style={{ padding: "0.5rem" }}>${tour.price}</td>
                  <td style={{ padding: "0.5rem" }}>
                    <Link
                      to={`/admin/tours/${tour.id}`}
                      style={{ marginRight: "1rem" }}
                    >
                      View
                    </Link>
                    <Link
                      to={`/admin/tours/edit/${tour.id}`}
                      style={{ marginRight: "1rem" }}
                    >
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(tour.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No tours available</p>
        )}
      </div>

      <p style={{ marginTop: "2rem" }}>
        <Link to="/admin">Back to Dashboard</Link>
      </p>
    </div>
  );
}
