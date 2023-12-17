// components/CloudinaryWidget.js
import React from 'react';
import { CloudinaryContext } from 'cloudinary-react';

const CloudinaryWidget = ({ handleFileUpload }) => {
  const openWidget = () => {
    // Configure Cloudinary widget parameters as needed
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'difz9x1sc',
        uploadPreset: 'mkef1qyj',
        // sources: ['local', 'url', 'camera', 'facebook', 'instagram'],
        // multiple: true,
        // resourceType: 'auto',
        // maxFiles: 5,
        // maxFileSize: 5000000, // 5MB
        // cropping: false,
        // inlineContainer: '#widget-container',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          // Handle the uploaded file
        console.log(result);
        handleFileUpload(result)
        }
        else{
            console.log(error)
        }
      }
    );

    widget.open(); // Open the Cloudinary widget
  };

  return (
    <div>
     <button
          onClick={openWidget}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          type="button"
        >
          Upload Files
        </button>
    </div>
  );
};

export default CloudinaryWidget;
