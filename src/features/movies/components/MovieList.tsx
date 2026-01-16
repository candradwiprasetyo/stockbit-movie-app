import type { Movie } from "@/features/movies/types/movie";
import { MovieCard } from "@/features/movies/components/MovieCard";

interface Props {
  movies: Movie[];
  lastItemRef?: (node: HTMLDivElement | null) => void;
}

export const MovieList = ({ movies, lastItemRef }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4 pt-4">
      {movies.map((movie, index) => {
        const isLast = index === movies.length - 1;

        if (isLast && lastItemRef) {
          return (
            <div ref={lastItemRef} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </div>
          );
        }

        return <MovieCard key={movie.imdbID} movie={movie} />;
      })}
    </div>
  );
};
