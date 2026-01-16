import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={twMerge(clsx("rounded-lg shadow bg-white p-3", className))}>
      {children}
    </div>
  );
};

export default Card;
