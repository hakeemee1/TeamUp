import React from 'react';

function InproCard({ title, description }) {
  return (
    <div>
      <div className="bg-white w-64 h-36 rounded-lg shadow-lg mx-6 hover:bg-blue-50 hover:scale-105 -z-10">
        <h1 id='title' className="px-5 pb-1 pt-2 font-medium text-blue-900">{title}</h1>
        <p id='description' className=" font-thin px-5">{description}</p>
      </div>
    </div>
  );
}

export default InproCard;
