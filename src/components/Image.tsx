import { useState } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const Image = ({
  src,
  alt,
  fallbackSrc = "/images/fallback-poster.png",
  className,
  ...props
}: ImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      loading="lazy"
      className={className}
      {...props}
    />
  );
};
