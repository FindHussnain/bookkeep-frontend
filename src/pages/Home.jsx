import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from '../component/searchBar/SearchBar';

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const fetchBooks = async (query = '') => {
    setLoading(true);
    setError(null);

    try {
      const baseURL = process.env.REACT_APP_API_BASE_URL;
      let url = `${baseURL}/api/books`;

      if (query) {
        url = `${baseURL}/api/books/search?title=${query}`;
      }

      const response = await axios.get(url);
      setBooks(response.data.books);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch books.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSearch = (query) => {
    setQuery(query);
    fetchBooks(query);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className='mt-6'><SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} /></div>
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="max-w-[350px] bg-white h-auto border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Link to={`/book/${book._id}`}>
              <img
                className="card-image rounded-t-xl w-full h-56 object-cover"
                src={
                  book.coverImage
                    ? `${process.env.REACT_APP_API_BASE_URL}${book.coverImage}`
                    : `${process.env.REACT_APP_API_BASE_URL}/images/default.png`
                }
                alt={book.title}
              />
            </Link>
            <div className="p-5">
              <Link to={`/book/${book._id}`}>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 hover:text-blue-600">
                  {book.title}
                </h5>
              </Link>
              <p className="text-gray-500 mt-3">{book.description.substring(0, 100)}...</p>
              <Link
                to={`/book/${book._id}`}
                className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
