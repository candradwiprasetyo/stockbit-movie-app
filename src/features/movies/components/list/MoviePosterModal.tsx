import { Modal } from "../../../../components/Modal";
import { CloseButton } from "../../../../components/CloseButton";
import { Image } from "../../../../components/Image";

interface Props {
  poster: string;
  title: string;
  onClose: () => void;
}

export const MoviePosterModal = ({ poster, title, onClose }: Props) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="relative max-w-xl">
        <CloseButton
          onClick={onClose}
          className="absolute -top-3 -right-3 rounded-full w-8 h-8 shadow bg-gray-600"
        />

        <Image
          src={poster}
          alt={title}
          className="rounded-xl shadow-lg max-h-[100vh]"
        />
      </div>
    </Modal>
  );
};
