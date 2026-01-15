import { MovieCard } from "../components/MovieCard";
import { SearchInput } from "../components/SearchInput";
import { useMovies } from "../hooks/useMovies";

export const MoviesPage = () => {
  const { movies, loading, error, lastMovieRef, search, keyword } = useMovies();

  return (
    <>
      <SearchInput onSearch={search} />

      {error && <p className="text-center text-red-500 mb-4">{error}</p>}

      {!loading && movies.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No movies found for "<strong>{keyword}</strong>"
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
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

      {loading && <p className="text-center mt-4 text-gray-500">Loading...</p>}
    </>
  );
};
