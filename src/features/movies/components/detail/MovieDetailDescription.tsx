import React from "react";
import type { MovieDetail } from "../../types/movieDetail";
import { DetailItem } from "@/components/DetailItem";

interface MovieDetailDescriptionProps {
  movie: MovieDetail;
}

export const MovieDetailDescription: React.FC<MovieDetailDescriptionProps> = ({
  movie,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200 text-sm">
      <DetailItem label="Genre" value={movie.Genre} />
      <DetailItem label="Director" value={movie.Director} />
      <DetailItem label="Writer" value={movie.Writer} />
      <DetailItem label="Actors" value={movie.Actors} />
      <DetailItem label="Language" value={movie.Language} />
      <DetailItem label="Country" value={movie.Country} />
      <DetailItem label="Awards" value={movie.Awards} />
      <DetailItem label="DVD" value={movie.DVD} />
      <DetailItem label="BoxOffice" value={movie.BoxOffice} />
      <DetailItem label="Production" value={movie.Production} />
      <DetailItem label="Website" value={movie.Website} />
      <DetailItem label="Type" value={movie.Type} />
      <DetailItem label="Metascore" value={movie.Metascore} />
      <DetailItem label="IMDB Votes" value={movie.imdbVotes} />
    </div>
  );
};
