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
      <Card className="p-0">
        <Image
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-72 object-cover rounded cursor-pointer"
          onClick={() => setIsOpen(true)}
        />

        <Link to={`/movies/${movie.imdbID}`}>
          <h3 className="mt-2 font-semibold hover:underline">{movie.Title}</h3>
          <p className="text-sm text-gray-500">{movie.Year}</p>
        </Link>
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
