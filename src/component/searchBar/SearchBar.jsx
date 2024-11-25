import React from 'react'

const SearchBar = () => {
    return (
        <div>
            <div className="bg-white flex px-1 py-1 rounded-full border border-teal-600 overflow-hidden max-w-md mx-auto font-[sans-serif] mb-6 shadow-md">
                <input type='email' placeholder='Search Something...' className="w-full outline-none bg-white pl-4 text-sm" />
                <button type='button' className="bg-blue-500 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5">Search</button>
            </div>
        </div>
    )
}

export default SearchBar
