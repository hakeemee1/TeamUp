import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="max-w-md mx-auto mb-5">
      <h2 className=" font-semibold mb-4">Upload File</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="border border-gray-300 rounded p-2 w-full"
      />
      {selectedFile && (
        <div className="mt-4">
          <p className="font-semibold">Uploaded File:</p>
          <p>{selectedFile.name}</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
