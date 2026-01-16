import { createPortal } from "react-dom";

interface Props {
  poster: string;
  title: string;
  onClose: () => void;
}

export const MoviePosterModal = ({ poster, title, onClose }: Props) => {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-md">
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
    </div>,
    document.body
  );
};
