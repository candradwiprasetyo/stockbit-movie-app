import { MovieCard } from "../components/MovieCard";
import { useMovies } from "../hooks/useMovies";

export const MoviesPage = () => {
  const { movies, loading, error } = useMovies();

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};
