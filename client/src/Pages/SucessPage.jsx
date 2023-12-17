import React from 'react';
import { useLocation } from 'react-router-dom';
const SuccessPage = () => {
    const location = useLocation();
    console.log(location)
     // Get the location object from React Router
    const capsuleData = location?.state?.capsuleData || {}; 
    console.log(capsuleData)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-6">Time Capsule Created Successfully!</h2>
{/* {JSON.stringify(capsuleData)} */}
        {/* Display information about the created time capsule */}
        <p className="mb-4">
          <span className="font-bold">Title:</span> {capsuleData.title}
        </p>
        <p className="mb-4">
          <span className="font-bold">Description:</span> {capsuleData.description}
        </p>

        {/* Display uploaded files */}
        <div className="mt-4 space-y-2">
          {capsuleData.files && capsuleData.files.map((file, index) => (
            <div key={index} className="flex items-center">
              {file.type === 'image' && (
                <img src={`${file.data}`} alt="Thumbnail" className="rounded mr-2" />
              )}
              {file.type === 'video' && (
                <span className="text-2xl mr-2" role="img" aria-label="Video Icon">
                  📹
                </span>
              )}
              {file.type === 'audio' && (
                <span className="text-2xl mr-2" role="img" aria-label="Audio Icon">
                  🎵
                </span>
              )}
              <span className="truncate">{file.data}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-green-600 font-bold">Thank you for creating a time capsule!</p>
      </div>
    </div>
  );
};

export default SuccessPage;
