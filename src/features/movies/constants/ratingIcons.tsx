import { Star } from "lucide-react";
import { RottenIcon } from "../../../assets/icons/Rotten";
import { ImdbIcon } from "../../../assets/icons/Imdb";
import { MetacriticIcon } from "../../../assets/icons/Metametric";
import React from "react";

export const ratingIcons: Record<string, React.ReactNode> = {
  "internet movie database": <ImdbIcon className="text-2xl" />,
  "rotten tomatoes": <RottenIcon className="text-lg" />,
  metacritic: <MetacriticIcon className="text-lg" />,
};

export const defaultRatingIcon = <Star size={16} className="text-gray-400" />;

export const getRatingIcon = (source: string) =>
  ratingIcons[source.toLowerCase()] ?? defaultRatingIcon;
