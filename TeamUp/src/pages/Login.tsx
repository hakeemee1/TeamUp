import React from 'react';
import axios from 'axios';

const Login = () => {

  const login = async () => {
    try {
    const email = document.querySelector('input[name = email]').value 
    const password = document.querySelector('input[name = password]').value
    const response = await axios.post('http://localhost:8000/api/login' , {
      email,
      password
    })
    localStorage.setItem('token', response.data.token) //เก็บ Token ใน Localstorage
  
    } catch (error) {
      console.log('error', error)
    }
  }

  const getUser = async () => {
    try {
    const authToken = localStorage.getItem('token')
    const response = await axios.get('http://localhost:8000/api/users' , {
      headers: {
        'authorization': `Bearer ${authToken}`
      }
    })
    console.log('user data', response.data)

    } catch {

    }
  }
  return (
  //   <div
  //   className="
  //      absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-400 t0-[#FFC0CB] rounded-md filter blur-3xl opacity-50 -z-50"
  // />
    <div className="bg-gradient-to-br from-blue-400 t0-[#FFC0CB]   h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md">
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
          <button onClick={getUser} className=" mx-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            get data
          </button>
        </div>

        <hr className="my-6 border-t" />

        <a href="Register" className='  text-blue-400'>Create an account ?</a>

      </div>
    </div>
  );
};

export default Login;
