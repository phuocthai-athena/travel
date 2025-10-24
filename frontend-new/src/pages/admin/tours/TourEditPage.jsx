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
    vitri: "1",
    thoigian: "",
    songuoi: "",
    gianguoilon: "",
    giatreem: "",
    giaembe: "",
    trailer: "",
    bando: "",
    chitiettour: "",
    luuy: "",
    status: 1,
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (tour) {
      setFormData({
        name: tour.name || "",
        vitri: String(tour.vitri || "1"),
        thoigian: tour.thoigian || "",
        songuoi: tour.songuoi || "",
        gianguoilon: tour.gianguoilon || "",
        giatreem: tour.giatreem || "",
        giaembe: tour.giaembe || "",
        trailer: tour.trailer || "",
        bando: tour.bando || "",
        chitiettour: tour.chitiettour || "",
        luuy: tour.luuy || "",
        status: tour.status || 1,
      });
      if (tour.avatar) {
        setImagePreview(tour.avatar);
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

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="vitri">Location Type</Label>
                  <select
                    id="vitri"
                    name="vitri"
                    value={formData.vitri}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="1">Domestic</option>
                    <option value="2">International</option>
                  </select>
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
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="thoigian">Duration (days)</Label>
                  <Input
                    id="thoigian"
                    name="thoigian"
                    type="number"
                    min="1"
                    value={formData.thoigian}
                    onChange={handleChange}
                    placeholder="e.g., 5"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="songuoi">Max Capacity (people)</Label>
                  <Input
                    id="songuoi"
                    name="songuoi"
                    type="number"
                    min="1"
                    value={formData.songuoi}
                    onChange={handleChange}
                    placeholder="e.g., 20"
                  />
                </div>
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
                  <Label htmlFor="gianguoilon">Adult Price ($)</Label>
                  <Input
                    id="gianguoilon"
                    name="gianguoilon"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.gianguoilon}
                    onChange={handleChange}
                    placeholder="0.00"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="giatreem">Child Price ($)</Label>
                  <Input
                    id="giatreem"
                    name="giatreem"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.giatreem}
                    onChange={handleChange}
                    placeholder="0.00"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="giaembe">Baby Price ($)</Label>
                  <Input
                    id="giaembe"
                    name="giaembe"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.giaembe}
                    onChange={handleChange}
                    placeholder="0.00"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

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
                <Label htmlFor="bando">Map Embed Code</Label>
                <textarea
                  id="bando"
                  name="bando"
                  value={formData.bando}
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
                <Label htmlFor="chitiettour">Tour Details</Label>
                <textarea
                  id="chitiettour"
                  name="chitiettour"
                  value={formData.chitiettour}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Enter tour details and itinerary"
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="luuy">Important Notes</Label>
                <textarea
                  id="luuy"
                  name="luuy"
                  value={formData.luuy}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Enter important notes for travelers"
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
            </CardContent>
          </Card>

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
