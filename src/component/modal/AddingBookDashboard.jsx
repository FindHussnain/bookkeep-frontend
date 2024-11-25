import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const AddingBookDashboard = ({ isOpen, onClose, onBookAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null); // File state
  const [preview, setPreview] = useState(null); // Image preview state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile); // Update file state
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile)); // Generate preview URL
    } else {
      setPreview(null); // Clear preview if no file is selected
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
        formData.append('coverImage', file); // Append file if selected
      }

      const response = await axios.post('http://localhost:8000/api/books', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const savedBook = response.data.book;
      if (onBookAdded) {
        onBookAdded(savedBook); // Pass the saved book to Dashboard
      }

      setTitle('');
      setDescription('');
      setFile(null);
      setPreview(null); // Clear the preview
      onClose(); // Close the modal
    } catch (err) {
      console.error('Error saving book:', err);
      setError('Failed to save book');
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
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Backdrop
          },
        }}
        contentLabel="Add Book Modal"
        className="flex items-center justify-center h-screen"
      >
        <div className="bg-white shadow-md rounded-lg py-2 px-4 w-full h-[550px] max-w-md relative">
          <h1 className="text-xl font-semibold text-gray-800 mb-1">Add A Book</h1>
          <p className="text-gray-600 mb-1">
            Please provide a title, description, and the file you want to upload.
          </p>
          <form onSubmit={handleSubmit}>
            {/* Title Field */}
            <div className="mb-1">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter the title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            {/* Description Field */}
            <div className="mb-1">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="3"
                placeholder="Enter a brief description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block resize-none w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              ></textarea>
            </div>

            {/* File Upload Field */}
            <div className="mb-1">
              <label
                htmlFor="file"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Select File
              </label>
              <input
                type="file"
                id="file"
                name="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2"
              />
              {/* Always Visible Preview Box */}
              <div
                className="mt-4 flex justify-center items-center h-40 w-full rounded-lg shadow-md border border-gray-300"
                style={{
                  backgroundColor: preview ? 'transparent' : '#f9f9f9',
                }}
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-full w-auto object-contain"
                  />
                ) : (
                  <span className="text-gray-500">No Image Selected</span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>

          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-500 font-bold hover:text-gray-700 rounded-xl px-1 outline outline-1 outline-slate-800/50 opacity-60 hover:opacity-95"
            onClick={onClose}
          >
            ✕
          </button>

          {/* Error Message */}
          {error && <p className="text-red-600 text-sm mt-3">{error}</p>}
        </div>
      </Modal>
    </div>
  );
};

export default AddingBookDashboard;
