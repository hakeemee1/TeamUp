import React, { useState } from "react";
import FileUpload from "./FileUpload";
import axios from "axios";

const AddDataModal = ({ isOpen, onClose, onSubmit }) => {
  const [taskStatus, setTaskStatus] = useState("To-do");
  const handleStatusChange = (e) => {
    setTaskStatus(e.target.value);
  };
  const [formData, setFormData] = useState({
    // Define your form fields here
  });

  const handleChange = (e) => {
    //call handleStatusChange
    handleStatusChange(e);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send a POST request to your API endpoint with formData
      const response = await axios.post('http://localhost:8000/api/addproject', formData);
  
      // Handle the response as needed (e.g., show a success message)
      console.log('Project added successfully:', response.data);
  
      // Clear the form fields if needed
      setFormData({});
      
      // Close the modal
      onClose();
    } catch (error) {
      // Handle any errors that occur during the request (e.g., show an error message)
      console.error('Error adding project:', error);
    }
  };
  

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md z-50">
        <h2 className="text-2xl font-semibold mb-4">Create new project</h2>
        <form onSubmit={handleSubmit}>
          {/* Form fields go here */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="fieldName"
            >
              Project name
            </label>
            <input
              required
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="fieldName"
            >
              Description
            </label>
            <input
              required
              type="text"
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="fieldName"
            >
              Date
            </label>
            <input
              required
              type="date"
              name="date"
              value={formData.date || ""}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="fieldName"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={taskStatus}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 mt-2 focus:outline-none focus:border-blue-500"
            >
              <option value="To-do">To-do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
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
