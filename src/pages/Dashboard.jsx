import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookCard from '../component/BookCard';
import AddingBookDashboard from '../component/modal/AddingBookDashboard';
import axios from 'axios';

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditingBook(null);
  };

  const fetchBooks = async () => {
    try {
      const baseURL = process.env.REACT_APP_API_BASE_URL;
      const response = await axios.get(`${baseURL}/api/books`);
      setBooks(response.data.books);
    } catch (err) {
      console.error(err);
      setError(err.message);
      toast.error('Error loading books!');
    } finally {
      setLoading(false);
    }
  };

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [newBook, ...prevBooks]);
    handleClose();
    toast.success('Book added successfully!');
  };

  const handleEditBook = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book._id === updatedBook._id ? updatedBook : book
      )
    );
    handleClose();
    toast.success('Book updated successfully!');
  };

  const handleDeleteBook = async (bookId) => {
    try {
      const baseURL = process.env.REACT_APP_API_BASE_URL;
      await axios.delete(`${baseURL}/api/books/${bookId}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
      toast.success('Book deleted successfully!');
    } catch (err) {
      toast.error('Error deleting book!');
      console.error('Error deleting book:', err);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="md:w-4/5 mx-auto flex justify-end">
        <button
          className="text-lg rounded-lg bg-slate-800 my-6 px-4 py-2 mb-8 shadow-md text-white"
          onClick={() => {
            setEditingBook(null);
            handleOpen();
          }}
        >
          Add Book
        </button>
      </div>

      {open && (
        <AddingBookDashboard
          isOpen={open}
          onClose={handleClose}
          onBookAdded={handleAddBook}
          onBookUpdated={handleEditBook}
          book={editingBook}
          isEdit={!!editingBook}
        />
      )}

      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard
            key={book._id}
            book={book}
            onDeleteBook={handleDeleteBook}
            onEditBook={() => {
              setEditingBook(book);
              handleOpen();
            }}
          />
        ))}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Dashboard;
