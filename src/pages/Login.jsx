import React, { useState } from 'react'
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";



function Login() {

    const [passtype,setPasstype] = useState(false);
    // const [passIcon,setPassIcon] = useState(false);

    const handleShowIcon = () => {
        setPasstype(!passtype);
    }

    return (
        <div>
            <div className="bg-gray-50 font-[sans-serif] shadow-md">
                <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                    <div className="max-w-md w-full">
                        <div className="p-8 rounded-2xl border border-gray-300 bg-white shadow-lg">
                            <h2 className="text-gray-800 text-center text-2xl font-bold">Login</h2>
                            <form className="mt-8 space-y-4">
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Email</label>
                                    <div className="relative flex items-center">
                                        <input name="email" type="email" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter email" />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                                            <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                            <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                    <div className="relative flex items-center">
                                        <input name="password" type={passtype? 'text':'password'} required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter password" />                                        
                                        
                                        {/* password show icon */}
                                        <div className='absolute right-4 text-gray-500'>
                                            {
                                                passtype? <FaRegEye onClick={handleShowIcon}/> : <FaRegEyeSlash onClick={handleShowIcon}/>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <button type="button" className="w-full py-3 px-4 text-md font-semibold tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                        Login
                                    </button>
                                </div>
                                <p className="text-gray-800 text-sm !mt-8 text-center">Don't have an account? <a href='./Signup' className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

