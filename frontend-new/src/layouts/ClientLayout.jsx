import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function ClientLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
