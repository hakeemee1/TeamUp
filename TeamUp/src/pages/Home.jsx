import React, { useState } from 'react';
import AddDataModal from '../components/AddDataModal';
import FileUpload from '../components/FileUpload'
import Avarta from "react-avatar";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import BoardView from '../components/BoardView';
import { RectangleStackIcon } from '@heroicons/react/24/outline';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (formData) => {
    // Handle form submission, e.g., send formData to the server
    console.log('Form data submitted:', formData);
    closeModal(); // Close the modal after submission
  };

  return (
    <header>
      <div className=" flex flex-col md:flex-row items-center p-5 rounded-b-2xl   ">
        <div
          className="
             absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-400 t0-[#FFC0CB] rounded-md filter blur-3xl opacity-50 -z-50"
        />
        <h1 className=" text-4xl font-bold mx-10">TeamUP™</h1>
        <div className=" flex items-center space-x-5 flex-1 justify-end w-full">
          
        <button onClick={openModal} className=" bg-blue-400 p-3 rounded-lg text-white hover:bg-blue-500 hover:scale-105">Add new project +</button>
          {/* Search Box */}
          <form
            action=""
            className=" flex  shadow-md space-x-4 bg-white rounded-md p-3 flex-1 md:flex-initial items-end"
          >
            <MagnifyingGlassIcon className=" h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className=" flex-1 outline-none"
            />
            <button hidden type="submit">
              Search
            </button>
          </form>
          {/* Avatar  */}
          <Avarta name="Hakeemee Kirai" round size="50" color="#0055D1" />
          
        </div>
        
        
      </div>
      <div className=" flex my-5 mx-10 w-full h-full">
            <h1 className=' font-semibold text-2xl ml-10 mr-5'>In Progess project</h1>
            <RectangleStackIcon className=' w-8 h-8' />
        </div>
    <div className="container mx-auto">
      <AddDataModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit} />
    </div>
    <BoardView />
    </header>
  );
}

export default Home;
