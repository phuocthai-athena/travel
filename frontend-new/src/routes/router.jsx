import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "@/layouts/AdminLayout";
import ClientLayout from "@/layouts/ClientLayout";

import HomePage from "@/pages/client/home/HomePage";
import LoginPage from "@/pages/client/LoginPage";
import RegisterPage from "@/pages/client/RegisterPage";
import TourPage from "@/pages/client/tour/TourPage";
import FrontendTourDetailPage from "@/pages/client/TourDetailPage";
import ProfilePage from "@/pages/client/ProfilePage";
import NotFoundPage from "@/pages/common/NotFoundPage";

import DashboardPage from "@/pages/admin/DashboardPage";
import ToursListPage from "@/pages/admin/tours/ToursListPage";
import TourCreatePage from "@/pages/admin/tours/TourCreatePage";
import TourEditPage from "@/pages/admin/tours/TourEditPage";
import AdminTourDetailPage from "@/pages/admin/tours/TourDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "tours",
        element: <TourPage />,
      },
      {
        path: "tour/:id",
        element: <FrontendTourDetailPage />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
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
