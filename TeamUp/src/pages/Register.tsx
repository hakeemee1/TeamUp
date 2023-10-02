import React from 'react'
import axios from 'axios'

function Register() {

  const register = async () => {
    try {
      const email = document.querySelector('input[name = email]').value 
      const password = document.querySelector('input[name = password]').value
      const response = await axios.post('http://localhost:8000/api/register' , {
        email,
        password
      })
    } catch (error) {
      console.log('error', error)

    }
  }
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
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
          <button  className="bg-green-400 text-white py-2 px-4 rounded hover:bg-blue-600">
            Register
          </button>
         
        </div>

        <hr className="my-6 border-t" />
        <p className=' text-center text-gray-400'>created by hakeemee1</p>
      </div>
    </div>
  )
}

export default Register