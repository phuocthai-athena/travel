import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="mx-auto max-w-2xl px-4 text-center">
        {/* 404 Number with Animation */}
        <div className="mb-8">
          <h1 className="text-[180px] font-bold leading-none text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 animate-pulse">
            404
          </h1>
        </div>

        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-white p-6 shadow-lg">
            <Search className="h-16 w-16 text-indigo-600" />
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-4 text-4xl font-bold text-gray-900">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mb-8 text-lg text-gray-600">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="gap-2"
            size="lg"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </Button>
          <Link to="/">
            <Button className="w-full gap-2 sm:w-auto" size="lg">
              <Home className="h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="mb-4 text-sm font-medium text-gray-500">
            You might be interested in:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/tours"
              className="text-sm text-indigo-600 hover:underline"
            >
              Browse Tours
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/login"
              className="text-sm text-indigo-600 hover:underline"
            >
              Sign In
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/register"
              className="text-sm text-indigo-600 hover:underline"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
