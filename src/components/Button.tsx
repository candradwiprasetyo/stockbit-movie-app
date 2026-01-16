import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  const baseStyles =
    "rounded-lg font-medium transition-colors cursor-pointer py-2 px-4";

  const variantStyles = clsx({
    "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400":
      variant === "default",
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500":
      variant === "primary",
    "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500":
      variant === "secondary",
  });

  return (
    <button className={clsx(baseStyles, variantStyles, className)} {...props}>
      {children}
    </button>
  );
};
