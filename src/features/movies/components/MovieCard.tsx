import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";
import { MoviePosterModal } from "./MoviePosterModal";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <div className="bg-white rounded-lg shadow p-3">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-72 object-cover rounded cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
        />

        <Link to={`/movies/${movie.imdbID}`}>
          <h3 className="mt-2 font-semibold hover:underline">{movie.Title}</h3>
          <p className="text-sm text-gray-500">{movie.Year}</p>
        </Link>
      </div>

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
