import React from "react";
import type { Rating } from "../../types/movieDetail";
import { getRatingIcon } from "../../constants/ratingIcons";

interface MovieRatingsProps {
  ratings?: Rating[];
}

export const MovieRatings: React.FC<MovieRatingsProps> = ({ ratings }) => {
  if (!ratings || ratings.length === 0) return null;

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
