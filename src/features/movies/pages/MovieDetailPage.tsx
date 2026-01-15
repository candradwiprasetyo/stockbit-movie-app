import { useMovieDetail } from "../hooks/useMovieDetail";
import { MovieDetailView } from "../components/MovieDetail";

export const MovieDetailPage = () => {
  const { movie, loading, error } = useMovieDetail();

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!movie) return null;

  return <MovieDetailView movie={movie} />;
};
