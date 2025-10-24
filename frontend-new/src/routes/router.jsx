import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "@/layouts/AdminLayout";

import HomePage from "../pages/frontend/HomePage";
import LoginPage from "../pages/frontend/LoginPage";
import RegisterPage from "../pages/frontend/RegisterPage";
import TourListPage from "../pages/frontend/TourListPage";
import FrontendTourDetailPage from "../pages/frontend/TourDetailPage";
import ProfilePage from "../pages/frontend/ProfilePage";
import NotFoundPage from "../pages/common/NotFoundPage";

import DashboardPage from "../pages/admin/DashboardPage";
import ToursListPage from "../pages/admin/tours/ToursListPage";
import TourCreatePage from "../pages/admin/tours/TourCreatePage";
import TourEditPage from "../pages/admin/tours/TourEditPage";
import AdminTourDetailPage from "../pages/admin/tours/TourDetailPage";

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
    element: <FrontendTourDetailPage />,
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
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "tours",
        element: <ToursListPage />,
      },
      {
        path: "tours/create",
        element: <TourCreatePage />,
      },
      {
        path: "tours/edit/:id",
        element: <TourEditPage />,
      },
      {
        path: "tours/:id",
        element: <AdminTourDetailPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
