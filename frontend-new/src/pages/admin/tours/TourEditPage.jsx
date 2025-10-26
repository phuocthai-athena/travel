import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTour, useUpdateTour } from "@/hooks/useTours";
import { useToast } from "@/hooks/use-toast";

export default function TourEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: tour, isLoading } = useTour(id);
  const { mutate: updateTour, isPending } = useUpdateTour();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    imageName: "",
    adultPrice: "",
    childPrice: "",
    babyPrice: "",
    trailer: "",
    tourDetails: "",
    note: "",
    position: 1,
    map: "",
    status: 1,
    numberOfPeople: "",
    duration: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (tour) {
      setFormData({
        name: tour.name || "",
        imageUrl: tour.imageUrl || "",
        imageName: tour.imageName || "",
        adultPrice: tour.adultPrice || "",
        childPrice: tour.childPrice || "",
        babyPrice: tour.babyPrice || "",
        trailer: tour.trailer || "",
        tourDetails: tour.tourDetails || "",
        note: tour.note || "",
        position: tour.position || 1,
        map: tour.map || "",
        status: tour.status || 1,
        numberOfPeople: tour.numberOfPeople || "",
        duration: tour.duration || "",
      });
      if (tour.imageUrl) {
        setImagePreview(tour.imageUrl);
      }
    }
  }, [tour]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      // TODO: Upload to storage and get URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Tour name is required",
      });
      return;
    }

    updateTour(
      { id, data: formData },
      {
        onSuccess: () => {
          toast({
            title: "Success",
            description: "Tour updated successfully",
          });
          navigate(`/admin/tours/${id}`);
        },
        onError: (error) => {
          toast({
            variant: "destructive",
            title: "Error",
            description:
              error.response?.data?.message || "Failed to update tour",
          });
        },
      }
    );
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
      <div className="flex items-center gap-4">
        <Link to={`/admin/tours/${id}`}>
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Edit Tour</h1>
          <p className="mt-1 text-sm text-gray-600">Update tour information</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Tour Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter tour name"
                  required
                />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="position">Position Type</Label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="1">Domestic</option>
                    <option value="2">International</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (days)</Label>
                  <Input
                    id="duration"
                    name="duration"
                    type="number"
                    min="1"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="e.g., 5"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="numberOfPeople">Max Capacity</Label>
                  <Input
                    id="numberOfPeople"
                    name="numberOfPeople"
                    type="number"
                    min="1"
                    value={formData.numberOfPeople}
                    onChange={handleChange}
                    placeholder="e.g., 20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card>
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="adultPrice">Adult Price ($)</Label>
                  <Input
                    id="adultPrice"
                    name="adultPrice"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.adultPrice}
                    onChange={handleChange}
                    placeholder="0.00"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="childPrice">Child Price ($)</Label>
                  <Input
                    id="childPrice"
                    name="childPrice"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.childPrice}
                    onChange={handleChange}
                    placeholder="0.00"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="babyPrice">Baby Price ($)</Label>
                  <Input
                    id="babyPrice"
                    name="babyPrice"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.babyPrice}
                    onChange={handleChange}
                    placeholder="0.00"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Media & Description */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Media */}
            <Card>
              <CardHeader>
                <CardTitle>Media</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="image">Tour Image</Label>
                  <div className="flex items-center gap-4">
                    <label
                      htmlFor="image"
                      className="flex h-32 w-32 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400"
                    >
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="h-full w-full rounded-lg object-cover"
                        />
                      ) : (
                        <>
                          <Upload className="h-8 w-8 text-gray-400" />
                          <span className="mt-2 text-sm text-gray-500">
                            Upload
                          </span>
                        </>
                      )}
                    </label>
                    <input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    {imagePreview && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setImagePreview(null)}
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="trailer">Trailer Embed Code</Label>
                  <textarea
                    id="trailer"
                    name="trailer"
                    value={formData.trailer}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Paste YouTube embed code here"
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="map">Map Embed Code</Label>
                  <textarea
                    id="map"
                    name="map"
                    value={formData.map}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Paste Google Maps embed code here"
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tourDetails">Tour Details</Label>
                  <textarea
                    id="tourDetails"
                    name="tourDetails"
                    value={formData.tourDetails}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Enter tour details and itinerary"
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="note">Important Notes</Label>
                  <textarea
                    id="note"
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Enter important notes for travelers"
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3">
            <Link to={`/admin/tours/${id}`}>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
