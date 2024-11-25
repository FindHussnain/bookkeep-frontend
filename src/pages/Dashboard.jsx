import React, { useState } from 'react'
import BookCard from '../component/BookCard'
// import '../component/card.css'
import AddingBookDashboard from '../component/modal/AddingBookDashboard'

function Dashboard() {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <>
      <div className='md:w-4/5 mx-auto flex justify-end'>
        <button className='text-lg rounded-lg  bg-slate-800 my-6 px-4 py-2 mb-8 shadow-md text-white '
          onClick={handleOpen}
        >
          Add Book
        </button>
      </div>
      {/* open modal/form to add book from dashboard*/}
      {open && <AddingBookDashboard isOpen={open} onClose={()=>setOpen(false)}/>}
      {/* Show some books on dashboard */}
      <BookCard />

    </>
  )
}

export default Dashboard
