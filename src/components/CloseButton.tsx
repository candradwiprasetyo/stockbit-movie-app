import { X } from "lucide-react";

interface CloseButtonProps {
  onClick: () => void;
  className?: string;
}

export const CloseButton = ({ onClick, className }: CloseButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute  z-30 cursor-pointer ${className ?? ""}`}
    >
      <X size={22} className="mx-auto" />
    </button>
  );
};
