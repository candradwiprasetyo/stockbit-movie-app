import { axiosInstance } from "../../../services/axios";
import type { Movie } from "../types/movie";

interface MoviesResponse {
  Search: Movie[];
  Response: "True" | "False";
  Error?: string;
}

export const fetchMoviesApi = async (): Promise<Movie[]> => {
  const response = await axiosInstance.get<MoviesResponse>("", {
    params: {
      s: "Batman",
      page: 1,
    },
  });

  if (response.data.Response === "False") {
    throw new Error(response.data.Error || "Failed to fetch movies");
  }

  return response.data.Search;
};
