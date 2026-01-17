import React from "react";

interface MovieDetailPlotProps {
  plot?: string | null;
}

export const MovieDetailPlot: React.FC<MovieDetailPlotProps> = ({ plot }) => {
  if (!plot) return null;

  return <p className="text-gray-400 my-6 text-sm md:text-base">{plot}</p>;
};
