import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import newsApi from "../api/news.api";

export const useNews = (params) => {
  return useQuery({
    queryKey: ["news", params],
    queryFn: () => newsApi.getAll(params),
  });
};

export const useNewsItem = (id) => {
  return useQuery({
    queryKey: ["news", id],
    queryFn: () => newsApi.getById(id),
    enabled: !!id,
  });
};

export const useCreateNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: newsApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries(["news"]);
    },
  });
};

export const useUpdateNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => newsApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["news"]);
    },
  });
};

export const useDeleteNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: newsApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries(["news"]);
    },
  });
};
