import { Link } from "react-router-dom";
import { useLogout } from "@/hooks/useAuth";
import { useAuthStore } from "@/store/auth.store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);
  const { mutate: logout, isPending } = useLogout();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-4">
      <div className="mx-auto max-w-2xl pt-8">
        <Card>
          <CardHeader>
            <CardTitle>Thông tin cá nhân</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {user && (
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium text-gray-600">Họ tên:</span>
                  <span className="text-gray-900">{user.name}</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium text-gray-600">Email:</span>
                  <span className="text-gray-900">{user.email}</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium text-gray-600">Vai trò:</span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                    {user.role}
                  </span>
                </div>
              </div>
            )}

            <div className="mt-6 flex gap-3">
              <Button
                onClick={() => logout()}
                disabled={isPending}
                variant="destructive"
              >
                {isPending ? "Đang đăng xuất..." : "Đăng xuất"}
              </Button>
              <Link to="/">
                <Button variant="outline">Quay lại trang chủ</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
