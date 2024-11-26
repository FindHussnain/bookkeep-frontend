import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book, onDeleteBook, onEditBook }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="card bg-white border border-gray-200 rounded-lg shadow-sm p-4" key={book._id}>
      {/* Book Cover */}
      <Link to={`/book/${book._id}`}>
        <img
          src={
            book.coverImage
              ? `${process.env.REACT_APP_API_BASE_URL}${book.coverImage}`
              : `${process.env.REACT_APP_API_BASE_URL}/images/default.png`
          }
          alt="Book Cover"
          className="card-image w-full h-56 object-cover rounded-md"
        />
      </Link>

      {/* Book Content */}
      <div className="card-content mt-4">
        <Link to={`/book/${book._id}`}>
          <h2 className="card-title text-xl font-bold text-gray-800 hover:text-blue-600">
            {book.title}
          </h2>
        </Link>

        {/* Description */}
        <p className="card-description text-gray-700 mt-2">
          {isExpanded ? book.description : `${book.description.substring(0, 100)}...`}
          <span
            onClick={handleToggleDescription}
            className="text-blue-600 cursor-pointer ml-1 hover:underline"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </span>
        </p>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <button className="cardbtn bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onEditBook}>
          Edit
        </button>
        <button
          className="cardbtnred bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={() => onDeleteBook(book._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookCard;
