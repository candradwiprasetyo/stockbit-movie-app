import { useState, useEffect } from "react";
import type { Movie } from "../types/movie";
import { MoviePosterModal } from "./MoviePosterModal";
import Card from "@/components/Card";

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
      <Card
        image={movie.Poster}
        title={movie.Title}
        subtitle={movie.Year}
        link={`/movies/${movie.imdbID}`}
        onImageClick={() => setIsOpen(true)}
      />

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
