import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Movie } from "../../types/movie";
import Card from "../../../../components/Card";
import { MoviePosterModal } from "./MoviePosterModal";
import { Image } from "../../../../components/Image";
import { Button } from "../../../../components/Button";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <Card className="p-0 bg-gray-900 overflow-hidden relative group">
        <div className="relative z-0">
          <Image
            src={movie.Poster}
            alt={movie.Title}
            className="
              w-full h-48 md:h-72 object-cover rounded-t-lg cursor-pointer
              transition-transform duration-500 ease-out
              origin-bottom
              hover:scale-110
            "
            onClick={() => setIsOpen(true)}
          />

          <div className="bg-gradient-to-t from-gray-900 to-transparent h-32 bottom-0 absolute left-0 right-0 pointer-events-none z-0" />
        </div>

        <div className="absolute left-0 right-0 opacity-0 top-[40%] transition-opacity duration-300 z-10 group-hover:opacity-100 mx-auto text-center">
          <Link to={`/movies/${movie.imdbID}`}>
            <Button variant="primary" className="text-sm mx-auto">
              View Movie
            </Button>
          </Link>
        </div>

        <div className="p-4 relative">
          <Link to={`/movies/${movie.imdbID}`}>
            <h3 className="font-semibold text-sm md:text-base hover:underline line-clamp-1">
              {movie.Title}
            </h3>
            <p className="text-sm text-gray-500">{movie.Year}</p>
          </Link>
        </div>
      </Card>

      {isOpen && (
        <MoviePosterModal
          poster={movie.Poster}
          title={movie.Title}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
