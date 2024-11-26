import React, { useState } from 'react';
import DeleteModal from './modal/DeleteModal';

function BookCard({ book, onDeleteBook }) { // Accept `onDeleteBook` prop
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const openDeleteModal = () => {
    setIsDeleteOpen(true); // Open delete modal
  };

  const closeDeleteModal = () => {
    setIsDeleteOpen(false); // Close delete modal
  };

  const deleteBook = () => {
    onDeleteBook(book._id); // Call the parent delete function with the book ID
    closeDeleteModal(); // Close the modal after deletion
  };

  return (
    <div className="card bg-white" key={book._id}>
      <img
        src={book.coverImage ? `${process.env.REACT_APP_API_BASE_URL}${book.coverImage}` : '${process.env.REACT_APP_API_BASE_URL}/images/default.png'}
        alt="Book Cover"
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">{book.title}</h2>
        <p className="card-description">{book.description}</p>
      </div>
      {/* Align buttons horizontally */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <button className="cardbtn">Edit</button>
        <button className="cardbtnred" onClick={openDeleteModal}>
          Delete
        </button>
      </div>
      {/* Delete confirmation modal */}
      <DeleteModal
        isOpen={isDeleteOpen}
        onClose={closeDeleteModal}
        onDelete={deleteBook} // Pass delete logic to modal
      />
    </div>
  );
}

export default BookCard;
