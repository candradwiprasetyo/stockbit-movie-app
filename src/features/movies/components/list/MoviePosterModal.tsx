import { Modal } from "@/components/Modal";
import { X } from "lucide-react";

interface Props {
  poster: string;
  title: string;
  onClose: () => void;
}

export const MoviePosterModal = ({ poster, title, onClose }: Props) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="relative max-w-xl">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 rounded-full w-8 h-8 shadow flex items-center justify-center cursor-pointer bg-gray-600"
        >
          <X />
        </button>

        <img
          src={poster}
          alt={title}
          className="rounded shadow-lg max-h-[100vh]"
        />
      </div>
    </Modal>
  );
};
