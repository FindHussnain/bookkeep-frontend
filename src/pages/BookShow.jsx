import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BookShow() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const baseURL = process.env.REACT_APP_API_BASE_URL;
        const response = await axios.get(`${baseURL}/api/books/${id}`);
        setBook(response.data.book);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch book details');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <div className="text-center mt-10 text-gray-600">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 px-6">
      <div className="flex flex-col md:flex-row items-start">
        <img
          className="w-full md:w-1/3 h-auto object-cover rounded-md"
          src={
            book.coverImage
              ? `${process.env.REACT_APP_API_BASE_URL}${book.coverImage}`
              : `${process.env.REACT_APP_API_BASE_URL}/images/default.png`
          }
          alt={book.title}
        />
        <div className="md:ml-6 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800">{book.title}</h1>
          <p className="mt-4 text-gray-700 leading-relaxed text-lg">{book.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookShow;
