import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`rounded-lg shadow bg-white p-3 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
