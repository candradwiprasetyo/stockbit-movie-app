import { MovieCard } from "../components/MovieCard";
import { useMovies } from "../hooks/useMovies";

export const MoviesPage = () => {
  const { movies, loading, error, lastMovieRef } = useMovies();

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie, index) => {
          if (index === movies.length - 1) {
            return (
              <div ref={lastMovieRef} key={movie.imdbID}>
                <MovieCard movie={movie} />
              </div>
            );
          }

          return <MovieCard key={movie.imdbID} movie={movie} />;
        })}
      </div>

      {loading && <p className="text-center mt-4">Loading more...</p>}
    </>
  );
};
