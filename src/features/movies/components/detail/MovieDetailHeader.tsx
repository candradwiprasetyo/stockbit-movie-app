import React from "react";
import type { MovieDetail } from "../../types/movieDetail";
import { MovieRated } from "./MovieRated";
import { Calendar, Clock } from "lucide-react";

interface MovieDetailHeaderProps {
  movie: Pick<MovieDetail, "Title" | "Rated" | "Year" | "Runtime">;
}

export const MovieDetailHeader: React.FC<MovieDetailHeaderProps> = ({
  movie,
}) => {
  return (
    <div className="mb-6">
      <h1 className="text-xl md:text-4xl font-bold mb-4 text-yellow-500">
        {movie.Title}
      </h1>

      <div className="flex gap-4 text-gray-400">
        <MovieRated rated={movie.Rated} />

        <div className="flex items-center gap-1">
          <Calendar size={16} />
          {movie.Year}
        </div>

        <div className="flex items-center gap-1">
          <Clock size={16} />
          {movie.Runtime}
        </div>
      </div>
    </div>
  );
};
