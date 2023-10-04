import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the server
      await axios.post('http://localhost:8000/api/register', formData);

      // Handle success (e.g., show a success message)
      console.log('Data submitted successfully');
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className=''>    <form onSubmit={handleSubmit} className="bg-blue-200 p-6 rounded-lg shadow-md max-w-md mx-auto mt-56">
  <div className="mb-4">
    <h1 className=' text-center text-3xl font-semibold mb-10'>Register</h1>
    <label className="block text-blue-600 text-sm font-semibold mb-2" htmlFor="email">
      Email:
    </label>
    <input
      className="border border-blue-400 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-600"
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>
  <div className="mb-4">
    <label className="block text-blue-600 text-sm font-semibold mb-2" htmlFor="password">
      Password:
    </label>
    <input
      className="border border-blue-400 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-600"
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      required
    />
  </div>
  {/* Add more input fields as needed */}
  <button
    type="submit"
    className="bg-blue-600 hover:bg-green-500 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
  >
    Submit
  </button>
</form>
</div>

  )
};

export default Register;
