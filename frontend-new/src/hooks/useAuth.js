import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import authApi from "@/api/auth.api";
import { useAuthStore } from "@/store/auth.store";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (response) => {
      const { user, accessToken, refreshToken } = response.data;
      login({ user, accessToken, refreshToken });
      queryClient.invalidateQueries(["profile"]);
      navigate("/");
    },
  });
};

export const useRegister = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (response) => {
      const { user, accessToken, refreshToken } = response.data;
      login({ user, accessToken, refreshToken });
      queryClient.invalidateQueries(["profile"]);
      navigate("/");
    },
  });
};

export const useLogout = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      logout();
      queryClient.clear();
      navigate("/login");
    },
    onError: () => {
      logout();
      queryClient.clear();
      navigate("/login");
    },
  });
};

export const useProfile = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  return useQuery({
    queryKey: ["profile"],
    queryFn: () => authApi.getProfile().then((res) => res.data),
    enabled: !!accessToken,
    retry: false,
  });
};
