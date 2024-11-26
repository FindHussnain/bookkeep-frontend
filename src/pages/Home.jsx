import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../component/searchBar/SearchBar'; // Import the SearchBar component

function Home() {
  const [books, setBooks] = useState([]); // Books to display
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [query, setQuery] = useState(''); // Query state to keep track of search text

  // Fetch books from the API based on the search query
  const fetchBooks = async (query = '') => {
    setLoading(true);
    setError(null);  // Reset any previous errors
  
    try {
      const baseURL = process.env.REACT_APP_API_BASE_URL;
      let url = `${baseURL}/api/books`; // Default endpoint to fetch all books
  
      if (query) {
        url = `${baseURL}/api/books/search?title=${query}`;
      }
  
      const response = await axios.get(url);
      setBooks(response.data.books);
    } catch (err) {
      console.error(err);
  
      // Check if the error is a 404, which indicates no books were found.
      if (err.response && err.response.status === 404) {
        setError('No books found matching your search query.');
      } else {
        setError('Failed to fetch books.'); // Generic error message
      }
    } finally {
      setLoading(false);
    }
  };  

  // Fetch all books when the component mounts
  useEffect(() => {
    fetchBooks(); // Fetch all books initially
  }, []);

  // Handle search when the user inputs a query
  const handleSearch = (query) => {
    setQuery(query);  // Update the query state to reflect search text
    fetchBooks(query); // Fetch books based on the query entered
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Search Bar */}
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

      {/* Display books */}
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book, id) => (
          <div
            key={id}
            className="max-w-[350px] bg-white h-auto border bottom-1 border-gray-500 rounded-2xl shadow-lg flex flex-col"
          >
            <a href="#">
              <img
                className="card-image rounded-t-2xl w-full h-56"
                src={book.coverImage ? `${process.env.REACT_APP_API_BASE_URL}${book.coverImage}` : `${process.env.REACT_APP_API_BASE_URL}images/default.png`}
                alt={book.title}
              />
            </a>
            <div className="p-5 flex flex-col flex-1">
              <a href="#">
                <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900">
                  {book.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500">{book.description}</p>
              <div className="mt-auto">
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
