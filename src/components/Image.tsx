import { useState } from "react";
import { ImageOff } from "lucide-react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export const Image = ({ src, alt, className, ...props }: ImageProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src || src === "N/A") {
    return (
      <div
        className={twMerge(
          clsx(
            "flex items-center justify-center text-center bg-gray-900 text-gray-400 inset-0 w-full h-full opacity-50",
            className
          )
        )}
        aria-label="Image not available"
      >
        <div className="flex flex-col items-center gap-2">
          <ImageOff size={32} />
          <span className="text-xs">No Image Found</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
      {...props}
    />
  );
};
