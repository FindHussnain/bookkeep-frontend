import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const AddingBookDashboard = ({ isOpen, onClose, book, isEdit, onBookAdded, onBookUpdated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isEdit && book) {
      setTitle(book.title);
      setDescription(book.description);
      setPreview(book.coverImage ? `${process.env.REACT_APP_API_BASE_URL}${book.coverImage}` : null);
    } else {
      setTitle('');
      setDescription('');
      setFile(null);
      setPreview(null);
    }
  }, [isEdit, book]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      if (file) {
        formData.append('coverImage', file);
      }

      const baseURL = process.env.REACT_APP_API_BASE_URL;

      if (isEdit) {
        const response = await axios.put(`${baseURL}/api/books/${book._id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        const updatedBook = response.data.book;
        if (onBookUpdated) {
          onBookUpdated(updatedBook);
        }
      } else {
        const response = await axios.post(`${baseURL}/api/books`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        const savedBook = response.data.book;
        if (onBookAdded) {
          onBookAdded(savedBook);
        }
      }

      onClose();
    } catch (err) {
      console.error('Error saving/updating book:', err);
      setError(isEdit ? 'Failed to update book' : 'Failed to save book');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        }}
        className="flex items-center justify-center h-screen"
      >
        <div className="bg-white shadow-md rounded-lg py-6 px-6 w-full max-w-md relative">
          <h1 className="text-xl font-semibold text-gray-800 mb-3">
            {isEdit ? 'Edit Book' : 'Add A Book'}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="3"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                Cover Image
              </label>
              <input
                type="file"
                id="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {preview && (
                <div className="mt-4">
                  <img src={preview} alt="Preview" className="h-40 w-full object-contain rounded" />
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              {loading ? 'Saving...' : isEdit ? 'Update Book' : 'Add Book'}
            </button>
          </form>
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddingBookDashboard;
