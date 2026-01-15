import { axiosInstance } from "@/services/axios";
import type { MovieDetail } from "../types/movieDetail";

interface MovieDetailResponse extends MovieDetail {
  Response: "True" | "False";
  Error?: string;
}

export const fetchMovieDetailApi = async (
  imdbID: string
): Promise<MovieDetail> => {
  const response = await axiosInstance.get<MovieDetailResponse>("", {
    params: { i: imdbID },
  });

  if (response.data.Response === "False") {
    throw new Error(response.data.Error || "Movie not found");
  }

  return response.data;
};
