import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='w-full h-auto px-[70px] py-2 font-medium flex justify-end items-center text-2xl '>
        {/* login button */}
        <div className='flex gap-2'>
          <NavLink to={'/login'}>
            <button className="flex items-center rounded-md border border-slate-500 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-800 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Login
            </button>
          </NavLink>
          <NavLink to={'/signup'}>
            <button className="flex items-center rounded-md border border-slate-500 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-800 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Sign up
            </button>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar
