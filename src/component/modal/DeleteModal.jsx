import Modal from "react-modal"


function DeleteModal({ isOpen, onClose }) {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Backdrop
          },
        }}
        contentLabel="Example Modal"
        className="flex items-center justify-center h-screen"
      >
        <div className="w-2/5 h-auto bg-white p-6 rounded-xl shadow-2xl relative">
          <p className="text-2xl mt-4 font-semibold text-gray-800 text-center">
            Are you sure?
          </p>
          <p className="text-gray-600 text-center mt-2">
           You really want to delete this card.
          </p>
          <div className="flex mt-6 justify-between">
            <button
              className="text-lg font-serif font-medium px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              className="text-lg font-serif font-medium px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              onClick={onClose}
            >
              Delete
            </button>
          </div>
          <button
            className="absolute top-3 right-3 text-gray-500 font-bold hover:text-gray-700 rounded-xl px-1 outline outline-1 outline-slate-800/50 opacity-60 hover:opacity-95"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
      </Modal>
    </div>

  );
}

export default DeleteModal