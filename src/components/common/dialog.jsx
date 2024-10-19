import { twMerge } from "tailwind-merge";

const DialogBox = ({ isVisible, title, message, onOkay, onCancel, okayLabel = "Okay", cancelLabel = "Cancel" }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={twMerge("bg-white p-6 rounded-lg shadow-lg")}>
        <p className="text-lg font-semibold mb-2">{title}</p>
        <p className="mb-4">{message}</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onCancel}
            className="bg-gray-300 text-black px-4 py-2 rounded-md shadow-lg transform transition-transform hover:scale-110"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onOkay}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg transform transition-transform hover:scale-110"
          >
            {okayLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;