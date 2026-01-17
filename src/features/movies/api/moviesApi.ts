import { axiosInstance } from "../../../services/axios";
import type { Movie, MovieResponse } from "../types/movie";

export const fetchMoviesApi = async (
  keyword: string,
  page: number
): Promise<{ movies: Movie[]; totalResults: number }> => {
  const response = await axiosInstance.get<MovieResponse>("", {
    params: {
      s: keyword,
      page,
    },
  });

  if (response.data.Response === "False") {
    throw new Error(response.data.Error || "Movie not found!");
  }

  return {
    movies: response.data.Search,
    totalResults: Number(response.data.totalResults),
  };
};
