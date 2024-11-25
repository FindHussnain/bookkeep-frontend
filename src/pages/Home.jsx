import React, { useState } from 'react'
// import '../component/card.css'
import { bookBio } from '../constents/BookConstant'
import SearchBar from '../component/searchBar/SearchBar'
import { BiSolidStar } from "react-icons/bi";



function Home() {

  const [card, setCard] = useState(bookBio)

  return (
    <div>

      {/* search bar */}
      <SearchBar />


      {/* cards of books */}
      <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
        {
          card.map((cards, id) => (

            <div className="max-w-[350px] bg-white h-auto border bottom-1 border-gray-500 rounded-2xl shadow-lg flex flex-col">
              <a href="#">
                <img className=" card-image rounded-t-2xl w-full h-56 " src={cards.image} alt="" />
              </a>
              <div className="p-5 flex flex-col flex-1">
                <a href="#">
                  <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900">{cards.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500">{cards.description}</p>
                <div className="mt-auto">
                  <a
                    href={cards.path}
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home
