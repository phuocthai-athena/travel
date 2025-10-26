import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Edit,
  Trash2,
  MapPin,
  Clock,
  Users,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTour, useDeleteTour } from "@/hooks/useTours";

export default function TourDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: tour, isLoading } = useTour(id);
  const { mutate: deleteTour } = useDeleteTour();

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${tour.name}"?`)) {
      deleteTour(id, {
        onSuccess: () => {
          navigate("/admin/tours");
        },
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Tour not found</p>
        <Link to="/admin/tours">
          <Button className="mt-4" variant="outline">
            Back to Tours
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/admin/tours">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{tour.name}</h1>
            <p className="mt-1 text-sm text-gray-600">Tour Details</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link to={`/admin/tours/edit/${id}`}>
            <Button variant="outline" className="gap-2">
              <Edit className="h-4 w-4" />
              Edit
            </Button>
          </Link>
          <Button
            variant="destructive"
            className="gap-2"
            onClick={handleDelete}
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>

      {/* Main Image */}
      {tour.imageUrl && (
        <Card>
          <CardContent className="p-0">
            <img
              src={tour.imageUrl}
              alt={tour.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </CardContent>
        </Card>
      )}

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-3">
                <DollarSign className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Adult Price</p>
                <p className="text-xl font-bold text-gray-900">
                  ${tour.adultPrice || "N/A"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-100 p-3">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="text-xl font-bold text-gray-900">
                  {tour.duration ? `${tour.duration} days` : "N/A"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple-100 p-3">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Max People</p>
                <p className="text-xl font-bold text-gray-900">
                  {tour.numberOfPeople || "N/A"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-orange-100 p-3">
                <MapPin className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="text-xl font-bold text-gray-900">
                  {tour.position === 1 ? "Domestic" : "International"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Details */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Pricing Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Adult Price:</span>
              <span className="font-semibold text-gray-900">
                ${tour.adultPrice || "N/A"}
              </span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Child Price:</span>
              <span className="font-semibold text-gray-900">
                ${tour.childPrice || "N/A"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Baby Price:</span>
              <span className="font-semibold text-gray-900">
                ${tour.babyPrice || "N/A"}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tour Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Status:</span>
              <span>
                {tour.status === 1 ? (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                    Active
                  </span>
                ) : (
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                    Inactive
                  </span>
                )}
              </span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Duration:</span>
              <span className="font-semibold text-gray-900">
                {tour.duration ? `${tour.duration} days` : "N/A"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Max Capacity:</span>
              <span className="font-semibold text-gray-900">
                {tour.numberOfPeople || "N/A"} people
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tour Description */}
      {tour.tourDetails && (
        <Card>
          <CardHeader>
            <CardTitle>Tour Description</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: tour.tourDetails }}
            />
          </CardContent>
        </Card>
      )}

      {/* Notes */}
      {tour.note && (
        <Card>
          <CardHeader>
            <CardTitle>Important Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: tour.note }}
            />
          </CardContent>
        </Card>
      )}

      {/* Trailer */}
      {tour.trailer && (
        <Card>
          <CardHeader>
            <CardTitle>Tour Trailer</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="aspect-video"
              dangerouslySetInnerHTML={{ __html: tour.trailer }}
            />
          </CardContent>
        </Card>
      )}

      {/* Map */}
      {tour.map && (
        <Card>
          <CardHeader>
            <CardTitle>Location Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="aspect-video"
              dangerouslySetInnerHTML={{ __html: tour.map }}
            />
          </CardContent>
        </Card>
      )}

      {/* Gallery */}
      {tour.images && tour.images.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Photo Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {tour.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={`${tour.name} - ${index + 1}`}
                  className="h-48 w-full rounded-lg object-cover"
                />
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
