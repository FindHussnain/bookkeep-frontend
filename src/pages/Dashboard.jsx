import React, { useState, useEffect } from 'react';
import BookCard from '../component/BookCard';
import AddingBookDashboard from '../component/modal/AddingBookDashboard';
import axios from 'axios';

function Dashboard() {
  const [open, setOpen] = useState(false); // Modal state
  const [books, setBooks] = useState([]); // State to store fetched books
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Fetch books from the backend
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const baseURL = process.env.REACT_APP_API_BASE_URL;
        const response = await axios.get(`${baseURL}/api/books`);
        setBooks(response.data.books);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Function to add a new book to the state
  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => {
      const bookExists = prevBooks.some((book) => book._id === newBook._id);
      if (!bookExists) {
        return [newBook, ...prevBooks]; // Add new book if it doesn't exist
      }
      return prevBooks; // No changes if the book already exists
    });
    handleClose(); // Close the modal
  };

  // Function to remove a book from the state
  const handleDeleteBook = async (bookId) => {
    try {
      const baseURL = process.env.REACT_APP_API_BASE_URL;
      // Send DELETE request to the backend
      await axios.delete(`${baseURL}/api/books/${bookId}`);
      // Remove the book from the state
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
    } catch (err) {
      console.error('Error deleting book:', err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="md:w-4/5 mx-auto flex justify-end">
        <button
          className="text-lg rounded-lg bg-slate-800 my-6 px-4 py-2 mb-8 shadow-md text-white"
          onClick={handleOpen}
        >
          Add Book
        </button>
      </div>

      {/* Open modal/form to add book */}
      {open && (
        <AddingBookDashboard
          isOpen={open}
          onClose={handleClose}
          onBookAdded={handleAddBook} // Pass callback to AddingBookDashboard
        />
      )}

      {/* Render book cards */}
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book._id} book={book} onDeleteBook={handleDeleteBook} />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
