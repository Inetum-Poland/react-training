interface ModalProps {
  header: string;
  body: string;
  onClose: () => void;
}

export default function Modal({ header, body, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg p-8 min-w-[320px] relative">
        <button
          className="absolute top-3 right-3 text-xl text-gray-400 hover:text-gray-700"
          onClick={onClose}
          aria-label="Zamknij">
          ×
        </button>
        <h3 className="text-lg font-bold mb-4">{header}</h3>
        <div className="text-sm text-neutral-700">{body}</div>
      </div>
    </div>
  );
}
