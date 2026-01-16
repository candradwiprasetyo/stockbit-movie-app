import { DetailItem } from "@/components/DetailItem";
import { movieDetailsList } from "./MovieDetailItem";
import type { MovieDetail } from "../../types/movieDetail";

interface Props {
  movie: MovieDetail;
}

export const MovieDetailDescription = ({ movie }: Props) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200 text-sm">
    {movieDetailsList(movie).map((item) => (
      <DetailItem key={item.label} label={item.label} value={item.value} />
    ))}
  </div>
);
