import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  return (
    <Link to={`/movies/${movie.imdbID}`}>
      <div className="bg-white rounded-lg shadow p-3 hover:shadow-lg transition">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-72 object-cover rounded"
        />
        <h3 className="mt-2 font-semibold">{movie.Title}</h3>
        <p className="text-sm text-gray-500">{movie.Year}</p>
      </div>
    </Link>
  );
};
