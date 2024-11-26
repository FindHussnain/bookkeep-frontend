import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'cpassword') {
      setCPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== cpassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/register`, {
        name,
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 201) {
        alert('Account created successfully');
        navigate('/login');
      }
    } catch (err) {
      console.error('Error registering user:', err);
      setError(err.response?.data?.message || 'Failed to register user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4 bg-gray-50">
      <div className="max-w-md w-full mx-auto bg-white border border-gray-300 rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-5">
          <a href="#" className="font-semibold text-2xl">Sign Up</a>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Name</label>
              <input
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter email"
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter password"
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
              <input
                name="cpassword"
                type="password"
                value={cpassword}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Confirm password"
                required
              />
            </div>
          </div>

          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

          <div className="!mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              {loading ? 'Creating account...' : 'Create an account'}
            </button>
          </div>

          <p className="text-gray-800 text-sm mt-6 text-center">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 font-semibold hover:underline ml-1">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
