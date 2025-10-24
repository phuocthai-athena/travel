import { Link } from "react-router-dom";
import { Plus, Search, Edit, Trash2, Eye, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useTours, useDeleteTour, useUpdateTour } from "@/hooks/useTours";
import { useState } from "react";

export default function ToursListPage() {
  const { data: tours, isLoading } = useTours();
  const { mutate: deleteTour } = useDeleteTour();
  const { mutate: updateTour } = useUpdateTour();
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteTour(id);
    }
  };

  const handleToggleStatus = (tour) => {
    updateTour({
      id: tour.id,
      data: { ...tour, status: tour.status === 1 ? 0 : 1 },
    });
  };

  const filteredTours = tours?.filter((tour) =>
    tour.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tour Management</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage all tours, create new tours, and update existing ones
          </p>
        </div>
        <Link to="/admin/tours/create">
          <Button className="gap-2" size="lg">
            <Plus className="h-5 w-5" />
            Add New Tour
          </Button>
        </Link>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search tours by name..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Tours Table */}
      <Card>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
            </div>
          ) : filteredTours && filteredTours.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Tour
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Image
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Price
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Duration
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredTours.map((tour) => (
                    <tr key={tour.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <Link
                          to={`/admin/tours/${tour.id}`}
                          className="font-medium text-blue-600 hover:underline"
                        >
                          {tour.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        {tour.avatar ? (
                          <img
                            src={tour.avatar}
                            alt={tour.name}
                            className="h-16 w-24 rounded object-cover"
                          />
                        ) : (
                          <div className="flex h-16 w-24 items-center justify-center rounded bg-gray-200 text-gray-400">
                            <span className="text-xs">No image</span>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        ${tour.gianguoilon || "N/A"}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {tour.thoigian ? `${tour.thoigian} days` : "N/A"}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleToggleStatus(tour)}
                          className="flex items-center gap-1"
                        >
                          {tour.status === 1 ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                              <Check className="h-3 w-3" />
                              Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                              <X className="h-3 w-3" />
                              Inactive
                            </span>
                          )}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Link to={`/admin/tours/${tour.id}`}>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Link to={`/admin/tours/edit/${tour.id}`}>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(tour.id, tour.name)}
                          >
                            <Trash2 className="h-4 w-4 text-red-600" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-gray-500">
                {searchTerm
                  ? "No tours found matching your search"
                  : "No tours available. Create your first tour!"}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stats */}
      {filteredTours && filteredTours.length > 0 && (
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="text-sm text-gray-600">Total Tours</div>
              <div className="mt-1 text-2xl font-bold text-gray-900">
                {tours?.length || 0}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-sm text-gray-600">Active Tours</div>
              <div className="mt-1 text-2xl font-bold text-green-600">
                {tours?.filter((t) => t.status === 1).length || 0}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-sm text-gray-600">Inactive Tours</div>
              <div className="mt-1 text-2xl font-bold text-gray-600">
                {tours?.filter((t) => t.status === 0).length || 0}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
