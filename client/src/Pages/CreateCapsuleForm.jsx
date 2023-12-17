// CreateCapsuleForm.js
import React, { useState } from 'react';
import UploadPage from './UploadPage'

const CreateCapsuleForm = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (fileInfo) => {
    setUploadedFiles((prevFiles) => [...prevFiles, fileInfo]);
  };
  const createCapsule = async () => {
    try {
      // Prepare data to be sent to the server
      const data = {
        // Other form fields
        files: uploadedFiles,
      };

      // Make the API call to save the data on the server
      const response = await axios.post('YOUR_SERVER_API_ENDPOINT', data);

      // Handle the response as needed
      console.log('Capsule created successfully:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error creating time capsule:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-6">Create a Time Capsule</h2>

        {/* Other form fields */}
        <UploadPage handleFileUpload={handleFileUpload} />

        {/* Display uploaded files */}
        <div className="mt-4 space-y-2">
          {uploadedFiles.map((file) => (
            <div key={file.public_id} className="flex items-center">
              {file.resource_type === 'image' && (
                <img src={`${file.secure_url}`} alt="Thumbnail" className="rounded mr-2" />
              )}
              {file.resource_type === 'video' && (
                <span className="text-2xl mr-2" role="img" aria-label="Video Icon">
                  📹
                </span>
              )}
              {file.resource_type === 'audio' && (
                <span className="text-2xl mr-2" role="img" aria-label="Audio Icon">
                  🎵
                </span>
              )}
              <span className="truncate">{file.original_filename}</span>
            </div>
          ))}
        </div>

        <button
          onClick={createCapsule}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          type="button" // Change to type="submit" if you are wrapping the form in a <form> element
        >
          Create Time Capsule
        </button>
      </div>
    </div>
  );
};

export default CreateCapsuleForm;
