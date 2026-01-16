import React from "react";
import clsx from "clsx";

interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "gray"
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "purple"
    | "indigo"
    | "pink"
    | "orange"
    | "teal";
}

export const Label: React.FC<LabelProps> = ({
  children,
  variant = "gray",
  className,
  ...props
}) => {
  const baseStyles =
    "inline-block font-medium rounded-lg text-sm px-2 py-1 shadow";

  const variantStyles = clsx({
    "bg-gray-700 text-gray-100": variant === "gray",
    "bg-blue-600 text-white": variant === "blue",
    "bg-green-600 text-white": variant === "green",
    "bg-yellow-400 text-black": variant === "yellow",
    "bg-red-600 text-white": variant === "red",
    "bg-purple-600 text-white": variant === "purple",
    "bg-indigo-600 text-white": variant === "indigo",
    "bg-pink-500 text-white": variant === "pink",
    "bg-teal-500 text-white": variant === "teal",
    "bg-orange-500 text-white": variant === "orange",
  });

  return (
    <span className={clsx(baseStyles, variantStyles, className)} {...props}>
      {children}
    </span>
  );
};
