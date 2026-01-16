import { SearchInput } from "../components/SearchInput";
import { useMovies } from "../hooks/useMovies";
import { MovieList } from "../components/MovieList";
import { NotFound } from "@/components/NotFound";
import { Loading } from "@/components/Loading";
import { ErrorMessage } from "@/components/ErrorMessage";

export const MoviesPage = () => {
  const { movies, loading, error, lastMovieRef, search, keyword } = useMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <SearchInput onSearch={search} />

      {error && <ErrorMessage message={error} />}

      {!loading && movies.length === 0 && (
        <NotFound message="No movies found" keyword={keyword} />
      )}

      <MovieList movies={movies} lastItemRef={lastMovieRef} />

      {loading && <Loading />}
    </div>
  );
};
