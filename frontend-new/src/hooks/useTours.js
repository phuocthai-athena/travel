import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import tourApi from "../api/tour.api";

export const useTours = (params) => {
  return useQuery({
    queryKey: ["tours", params],
    queryFn: () => tourApi.getAll(params),
  });
};

export const useTour = (id) => {
  return useQuery({
    queryKey: ["tour", id],
    queryFn: () => tourApi.getById(id),
    enabled: !!id,
  });
};

export const useCreateTour = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: tourApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries(["tours"]);
    },
  });
};

export const useUpdateTour = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => tourApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["tours"]);
      queryClient.invalidateQueries(["tour"]);
    },
  });
};

export const useDeleteTour = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: tourApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries(["tours"]);
    },
  });
};
