import { useAuthStore } from "@/store/auth.store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, Users, DollarSign, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Tours",
    value: "24",
    icon: Map,
    change: "+12%",
    changeType: "increase",
  },
  {
    title: "Total Users",
    value: "1,234",
    icon: Users,
    change: "+8%",
    changeType: "increase",
  },
  {
    title: "Revenue",
    value: "$45,231",
    icon: DollarSign,
    change: "+23%",
    changeType: "increase",
  },
  {
    title: "Growth",
    value: "12.5%",
    icon: TrendingUp,
    change: "+4%",
    changeType: "increase",
  },
];

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.email?.split("@")[0] || "Admin"}!
        </h1>
        <p className="mt-2 text-gray-600">
          Here's what's happening with your travel business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-gray-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <p className="mt-1 text-xs text-green-600">
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-gray-200 pb-3 last:border-0"
                >
                  <div>
                    <p className="font-medium text-gray-900">
                      Paris Adventure Tour
                    </p>
                    <p className="text-sm text-gray-600">John Doe • 2 guests</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">$1,299</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Tours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Paris City Tour", bookings: 45 },
                { name: "Tokyo Experience", bookings: 38 },
                { name: "Rome History Walk", bookings: 32 },
              ].map((tour, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-gray-200 pb-3 last:border-0"
                >
                  <div>
                    <p className="font-medium text-gray-900">{tour.name}</p>
                    <p className="text-sm text-gray-600">
                      {tour.bookings} bookings
                    </p>
                  </div>
                  <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full bg-blue-600"
                      style={{ width: `${(tour.bookings / 50) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
