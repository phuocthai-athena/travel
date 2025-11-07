import { useQuery } from "@tanstack/react-query";
import { buildQueryParams } from "../utils/buildQueryParams";

export function useToursQuery(filters, pagination) {
  const queryParams = buildQueryParams(filters, pagination);

  return useQuery({
    queryKey: ["tours", queryParams],
    queryFn: async () => {
      const res = await fetch(`/api/tours?${queryParams}`);
      if (!res.ok) throw new Error("Failed to fetch tours");
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
    keepPreviousData: true,
  });
}
