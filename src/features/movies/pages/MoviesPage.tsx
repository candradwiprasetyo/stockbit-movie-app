import { SearchInput } from "../components/list/SearchInput";
import { useMovies } from "../hooks/useMovies";
import { MovieList } from "../components/list/MovieList";
import { NotFound } from "@/components/NotFound";
import { MovieListSkeleton } from "../components/list/MovieListSkeleton";

export const MoviesPage = () => {
  const { movies, loading, lastMovieRef, search, keyword } = useMovies();

  return (
    <div className="max-w-7xl mx-auto px-4">
      <SearchInput onSearch={search} />

      {!loading && movies.length === 0 && (
        <NotFound message="No movies found" keyword={keyword} />
      )}

      <MovieList movies={movies} lastItemRef={lastMovieRef} />

      {loading && <MovieListSkeleton count={10} />}
    </div>
  );
};
