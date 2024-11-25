import Modal from 'react-modal';

function DeleteModal({ isOpen, onClose, onDelete }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      padding: '20px',
      maxWidth: '400px',
      width: '90%',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Delete Confirmation Modal"
    >
      <div className="text-center">
        <p className="text-2xl mt-4 font-semibold text-gray-800">
          Are you sure?
        </p>
        <p className="text-gray-600 mt-2">Do you really want to delete this book?</p>
        <div className="flex mt-6 justify-between">
          <button
            className="text-lg font-medium px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="text-lg font-medium px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteModal;
