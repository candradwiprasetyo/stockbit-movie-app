import { useMovieDetail } from "../hooks/useMovieDetail";
import { MovieDetailView } from "../components/detail/MovieDetail";
import { Loading } from "@/components/Loading";
import { ErrorMessage } from "@/components/ErrorMessage";

export const MovieDetailPage = () => {
  const { movie, loading, error } = useMovieDetail();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!movie) return null;

  return <MovieDetailView movie={movie} />;
};
