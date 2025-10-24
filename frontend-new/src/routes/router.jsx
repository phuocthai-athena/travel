import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import HomePage from "../pages/frontend/HomePage";
import LoginPage from "../pages/frontend/LoginPage";
import RegisterPage from "../pages/frontend/RegisterPage";
import TourListPage from "../pages/frontend/TourListPage";
import TourDetailPage from "../pages/frontend/TourDetailPage";
import ProfilePage from "../pages/frontend/ProfilePage";

import DashboardPage from "../pages/admin/DashboardPage";
import AdminTourListPage from "../pages/admin/AdminTourListPage";
import AdminAddTourPage from "../pages/admin/AdminAddTourPage";
import AdminEditTourPage from "../pages/admin/AdminEditTourPage";
import AdminTourDetailPage from "../pages/admin/AdminTourDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/tours",
    element: <TourListPage />,
  },
  {
    path: "/tour/:id",
    element: <TourDetailPage />,
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute roles={["admin"]}>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/tours",
    element: (
      <ProtectedRoute roles={["admin"]}>
        <AdminTourListPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/tours/add",
    element: (
      <ProtectedRoute roles={["admin"]}>
        <AdminAddTourPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/tours/edit/:id",
    element: (
      <ProtectedRoute roles={["admin"]}>
        <AdminEditTourPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/tours/:id",
    element: (
      <ProtectedRoute roles={["admin"]}>
        <AdminTourDetailPage />
      </ProtectedRoute>
    ),
  },
]);

export default router;
