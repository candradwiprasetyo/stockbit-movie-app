import type { Movie } from "@/features/movies/types/movie";
import { MovieCard } from "../../../../features/movies/components/list/MovieCard";

interface Props {
  movies: Movie[];
  lastItemRef?: (node: HTMLDivElement | null) => void;
}

export const MovieList = ({ movies, lastItemRef }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-2">
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
    </div>
  );
};
