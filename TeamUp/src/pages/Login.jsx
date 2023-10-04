import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log('error', error);
    }
  };

  const getUser = async () => {
    try {
      const authToken = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8000/api/users', {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });
      console.log('user data', response.data);
    } catch (error) {
      console.error('error', error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-400 to-[#FFC0CB] h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            onClick={login}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Login
          </button>
          <button
            onClick={getUser}
            className="hidden mx-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Get Data
          </button>
        </div>

        <hr className="my-6 border-t" />

        <a href="Register" className="text-blue-400">
          Create an account?
        </a>
      </div>
    </div>
  );
};

export default Login;
