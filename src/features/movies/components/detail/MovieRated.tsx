import React from "react";
import { Label } from "@/components/Label";
import { ratingColors } from "../../constants/ratingColors";

interface MovieRatedProps {
  rated?: string;
}

export const MovieRated: React.FC<MovieRatedProps> = ({ rated }) => {
  if (!rated) return null;

  const variant = ratingColors[rated.toUpperCase()] ?? "gray";

  return <Label variant={variant}>{rated}</Label>;
};
