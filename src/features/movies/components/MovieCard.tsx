import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";
import Card from "@/components/Card";
import { MoviePosterModal } from "./MoviePosterModal";
import { Image } from "@/components/Image";

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
      <Card className="p-0 bg-gray-900 overflow-hidden">
        <div className="relative">
          <Image
            src={movie.Poster}
            alt={movie.Title}
            className="
              w-full h-72 object-cover rounded-t-lg cursor-pointer
              transition-transform duration-500 ease-out
              origin-bottom
              hover:scale-110
            "
            onClick={() => setIsOpen(true)}
          />
          <div className="bg-gradient-to-t from-gray-900 to-transparent h-32 bottom-0 absolute left-0 right-0 pointer-events-none" />
        </div>
        <div className="p-4">
          <Link to={`/movies/${movie.imdbID}`}>
            <h3 className="font-semibold hover:underline line-clamp-1">
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
