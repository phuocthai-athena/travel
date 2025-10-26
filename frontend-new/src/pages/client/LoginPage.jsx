import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLogin } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginPage() {
  const { toast } = useToast();
  const { mutate: login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    login(values, {
      onSuccess: () => {
        toast({
          title: "Login successful",
          description: "Welcome back!",
        });
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Login failed",
          description:
            error.response?.data?.message ||
            "Invalid email or password. Please try again.",
        });
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-600 via-indigo-700 to-purple-800 p-4">
      <Card className="w-full max-w-md bg-white/95 shadow-2xl backdrop-blur">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold text-gray-800">
            Sign In
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to continue
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/register"
                className="text-sm text-blue-600 hover:underline"
              >
                Don't have an account?
              </Link>
            </div>

            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
