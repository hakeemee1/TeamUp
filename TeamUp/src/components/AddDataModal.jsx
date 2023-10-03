import React, { useState } from 'react';
import FileUpload from './FileUpload';

const AddDataModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    // Define your form fields here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function and pass formData
    onSubmit(formData);
    // Clear the form fields if needed
    setFormData({});
    // Close the modal
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Ceate new project</h2>
        <form onSubmit={handleSubmit}>
          {/* Form fields go here */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="fieldName">
              Project name
            </label>
            <input
            required
              type="text"
              name="title"
              value={formData.title || ''}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="fieldName">
              Description
            </label>
            <input
            required
              type="text"
              name="detail"
              value={formData.detail || ''}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="fieldName">
              Date
            </label>
            <input
            required
              type="date"
              name="date"
              value={formData.date || ''}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <FileUpload />
          
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDataModal;
