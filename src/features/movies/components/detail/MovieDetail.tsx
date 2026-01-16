import type { MovieDetail } from "../../types/movieDetail";
import { useNavigate } from "react-router-dom";
import { Image } from "@/components/Image";
import { Button } from "@/components/Button";
import { MovieDetailBackground } from "./MovieDetailBackground";
import { MovieDetailHeader } from "./MovieDetailHeader";
import { MovieRatings } from "./MovieRating";
import { MovieDetailPlot } from "./MovieDetailPlot";
import { MovieDetailDescription } from "./MovieDetailDescription";

export const MovieDetailView = ({ movie }: { movie: MovieDetail }) => {
  const navigate = useNavigate();

  return (
    <MovieDetailBackground poster={movie.Poster}>
      <div className="h-screen w-full flex">
        <div className="flex-none p-10">
          <Image
            src={movie.Poster}
            alt={movie.Title}
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow overflow-y-auto p-10 pl-0 scrollbar-hidden">
          <MovieDetailHeader
            movie={{
              Title: movie.Title,
              Rated: movie.Rated,
              Year: movie.Year,
              Runtime: movie.Runtime,
            }}
          />
          <MovieRatings ratings={movie.Ratings} />
          <MovieDetailPlot plot={movie.Plot} />
          <MovieDetailDescription movie={movie} />
          <Button
            variant="primary"
            onClick={() => navigate(-1)}
            className="mt-6"
          >
            Back
          </Button>
        </div>
      </div>
    </MovieDetailBackground>
  );
};
