import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  image: string;
  title: string;
  subtitle?: string;
  link?: string;
  onImageClick?: () => void;
  children?: ReactNode;
}

export const Card = ({
  image,
  title,
  subtitle,
  link,
  onImageClick,
  children,
}: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick();
    } else {
      setIsModalOpen(true);
    }
  };

  const Content = (
    <>
      <h3 className="mt-2 font-semibold hover:underline">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </>
  );

  return (
    <div className="bg-white rounded-lg shadow p-3">
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover rounded cursor-pointer"
        onClick={handleImageClick}
      />

      {link ? <Link to={link}>{Content}</Link> : Content}

      {children}
    </div>
  );
};

export default Card;
