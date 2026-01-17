import { axiosInstance } from "../../../services/axios";
import type { MovieDetail, MovieDetailResponse } from "../types/movieDetail";

export const fetchMovieDetailApi = async (
  movieId: string
): Promise<MovieDetail> => {
  const response = await axiosInstance.get<MovieDetailResponse>("", {
    params: { i: movieId },
  });

  if (response.data.Response === "False") {
    throw new Error(response.data.Error || "Movie not found");
  }

  return response.data;
};
