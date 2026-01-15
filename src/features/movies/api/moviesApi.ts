import { axiosInstance } from "../../../services/axios";
import type { Movie } from "../types/movie";

interface MoviesResponse {
  Search: Movie[];
  totalResults: string;
  Response: "True" | "False";
  Error?: string;
}

export const fetchMoviesApi = async (
  keyword: string,
  page: number
): Promise<{ movies: Movie[]; totalResults: number }> => {
  const response = await axiosInstance.get<MoviesResponse>("", {
    params: {
      s: keyword,
      page,
    },
  });

  if (response.data.Response === "False") {
    throw new Error(response.data.Error || "Failed to fetch movies");
  }

  return {
    movies: response.data.Search,
    totalResults: Number(response.data.totalResults),
  };
};
