import React from "react";
import { Label } from "@/components/Label";

interface MovieRatedProps {
  rated?: string;
}

export const MovieRated: React.FC<MovieRatedProps> = ({ rated }) => {
  if (!rated) return null;

  let variant: Parameters<typeof Label>[0]["variant"] = "gray";

  switch (rated.toUpperCase()) {
    case "G":
      variant = "green";
      break;
    case "PG":
      variant = "blue";
      break;
    case "PG-13":
      variant = "yellow";
      break;
    case "R":
      variant = "red";
      break;
    case "NC-17":
      variant = "purple";
      break;
    case "TV-MA":
      variant = "orange";
      break;
    case "TV-PG":
      variant = "yellow";
      break;
    default:
      variant = "gray";
  }

  return <Label variant={variant}>{rated}</Label>;
};
