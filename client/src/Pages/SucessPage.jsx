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
  

        <p className="mt-6 text-green-600 font-bold">Thank you for creating a time capsule!</p>
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbng1cmkwM2h5MXZhcWlpdm9nOGtsNTlwemt5eWo0ZGV3dzhobmF4ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12xvz9NssSkaS4/giphy.gif" // Replace with the actual path to your GIF
          alt="Success GIF"
          className="mt-4 rounded"  // Apply styling as needed
        />
      </div>
    </div>
  );
};

export default SuccessPage;
