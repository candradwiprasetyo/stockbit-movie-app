import { Modal } from "@/components/Modal";

interface Props {
  poster: string;
  title: string;
  onClose: () => void;
}

export const MoviePosterModal = ({ poster, title, onClose }: Props) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="relative max-w-md">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white rounded-full w-8 h-8 shadow flex items-center justify-center"
        >
          ✕
        </button>

        <img
          src={poster}
          alt={title}
          className="rounded shadow-lg max-h-[80vh]"
        />
      </div>
    </Modal>
  );
};
