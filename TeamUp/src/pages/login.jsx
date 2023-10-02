import React from 'react';
import axios from 'axios';

const login = () => {

  const login = async () => {
    try {
    const email = document.querySelector('input[name = email]').value 
    const password = document.querySelector('input[name = password]').value
    const response = await axios.post('http://localhost:8000/api/login' , {
      email,
      password
    })
    console.log(response.data)
  
    } catch (error) {
      console.log('error', error)
    }
  }
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="text-center">
          <button onClick={login} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Login
          </button>
        </div>

        <hr className="my-6 border-t" />

        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registerEmail">
            Email
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="email"
            id="registerEmail"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registerPassword">
            Password
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="password"
            id="registerPassword"
            placeholder="Password"
          />
        </div>
        <div className="text-center">
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default login;
