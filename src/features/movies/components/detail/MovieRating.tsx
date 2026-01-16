import React from "react";
import type { Rating } from "../../types/movieDetail";
import { Star } from "lucide-react";
import { RottenIcon } from "@/assets/icons/Rotten";
import { ImdbIcon } from "@/assets/icons/Imdb";
import { MetacriticIcon } from "@/assets/icons/Metametric";

interface MovieRatingsProps {
  ratings?: Rating[];
}

export const MovieRatings: React.FC<MovieRatingsProps> = ({ ratings }) => {
  if (!ratings || ratings.length === 0) return null;

  const getRatingIcon = (source: string) => {
    switch (source.toLowerCase()) {
      case "internet movie database":
        return <ImdbIcon className="text-2xl" />;
      case "rotten tomatoes":
        return <RottenIcon className="text-lg" />;
      case "metacritic":
        return <MetacriticIcon className="text-lg" />;
      default:
        return <Star size={16} className="text-gray-400" />;
    }
  };

  return (
    <div className="mt-6">
      <ul className="list-none text-gray-200 flex flex-col gap-2">
        {ratings.map((rating) => (
          <li key={rating.Source} className="flex items-center gap-2">
            {getRatingIcon(rating.Source)}
            <span>
              <strong>{rating.Source}:</strong> {rating.Value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
