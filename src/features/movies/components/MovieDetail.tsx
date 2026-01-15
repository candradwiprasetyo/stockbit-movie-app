import type { MovieDetail } from "../types/movieDetail";
import { useNavigate } from "react-router-dom";

export const MovieDetailView = ({ movie }: { movie: MovieDetail }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto p-4 grid md:grid-cols-3 gap-6">
      <img src={movie.Poster} alt={movie.Title} className="rounded shadow" />

      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold mb-2">{movie.Title}</h1>
        <p className="text-gray-500 mb-4">{movie.Year}</p>

        <p className="mb-2">
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p className="mb-2">
          <strong>Director:</strong> {movie.Director}
        </p>
        <p className="mb-2">
          <strong>Actors:</strong> {movie.Actors}
        </p>
        <p className="mt-4">{movie.Plot}</p>

        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-sm text-blue-600 hover:underline"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};
