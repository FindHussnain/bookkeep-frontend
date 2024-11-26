import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const baseURL = process.env.REACT_APP_API_BASE_URL;
      const response = await axios.post(`${baseURL}/api/login`, { email, password });

      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/dashboard');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4 bg-gray-50">
      <div className="max-w-md w-full mx-auto bg-white border border-gray-300 rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-5">
          <a href="#" className="font-semibold text-2xl">Login</a>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter email"
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter password"
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
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>

          <p className="text-gray-800 text-sm mt-6 text-center">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-600 font-semibold hover:underline ml-1">
              Sign up here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
