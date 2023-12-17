// CreateCapsuleForm.js
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import UploadPage from './UploadPage'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Context/Auth";
const CreateCapsuleForm = () => {
  const [auth, setAuth] = useAuth();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [scope, setScope] = useState('public');
  const [unveilDate, setUnveilDate] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
const navigate = useNavigate();
  const handleFileUpload = (result) => {
    console.log("Called")
    // Extract relevant information from the result
    // const fileInfo = {
    //   public_id: result.info.public_id,
    //   original_filename: result.info.original_filename,
    //   resource_type: result.info.resource_type,
    //   secure_url: result.info.secure_url,
    //   // Add more properties as needed
    // };
    const fileInfo = {
      type: result.info.resource_type,
      data: result.info.secure_url,
      // Add more properties as needed
    };


    // Update the state with the new file information
    setUploadedFiles((prevFiles) => [...prevFiles, fileInfo]);
  };
  const createCapsule = async () => {
    try {
      // Prepare data to be sent to the server
      const data = {
        // Other form fields
        files: uploadedFiles,
        user:auth.user._id,
        scope: scope,
        unveilDate: unveilDate, 
      };

      // Make the API call to save the data on the server
      const response = await axios.post('http://localhost:3000/api/timecapsules/create', data);

      // Handle the response as needed

      if(response.data)
      {
        console.log('Capsule created successfully:', response.data);
navigate('/Sucess',{state: { capsuleData: response.data }})
      }
      else{
        console.log('Capsule not created');
      }
      
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
            <div key={file.data} className="flex items-center">
              {file.type === 'image' && (
                <img src={`${file.data}`} alt="Thumbnail" className="rounded mr-2" />
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
        <div className="mt-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Select Scope:</label>
          <select
            onChange={(e) => setScope(e.target.value)}
            value={scope}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Select Unveiling Date:</label>
          <DatePicker
            selected={unveilDate}
            onChange={(date) => setUnveilDate(date)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            dateFormat="MMMM d, yyyy"
            placeholderText="Select a date"
          />
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
