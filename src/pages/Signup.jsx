import React from 'react'
import Login from './Login'
function Signup() {
    return (
        <div>
            <div class="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4 bg-gray-50">
                <div class="max-w-md w-full mx-auto bg-white border border-gray-300 rounded-2xl p-8 shadow-lg">
                    <div class="text-center mb-5">
                        <a href="#" className='font-semibold text-2xl '>
                            Sign Up
                        </a>
                    </div>

                    <form>
                        <div class="space-y-6">
                            <div>
                                <label class="text-gray-800 text-sm mb-2 block">Email</label>
                                <input name="email" type="text" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
                            </div>
                            <div>
                                <label class="text-gray-800 text-sm mb-2 block">Password</label>
                                <input name="password" type="password" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
                            </div>
                            <div>
                                <label class="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                                <input name="cpassword" type="password" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Confirm password" />
                            </div>
                        </div>

                        <div class="!mt-8">
                            <button type="button" class="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                Create an account
                            </button>
                        </div>
                        <p class="text-gray-800 text-sm mt-6 text-center">Already have an account? <a href="./Login" class="text-blue-600 font-semibold hover:underline ml-1">Login here</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
