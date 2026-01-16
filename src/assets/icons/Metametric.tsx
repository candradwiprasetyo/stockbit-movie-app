import React from "react";

export const MetacriticIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="32"
      cy="32"
      r="30"
      fill="black"
      stroke="#FFD700"
      strokeWidth="4"
    />

    <text
      x="32"
      y="38"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="32"
      fontWeight="bold"
      fill="white"
      fontFamily="Arial, sans-serif"
      transform="rotate(-10 32 32)"
    >
      M
    </text>
  </svg>
);
