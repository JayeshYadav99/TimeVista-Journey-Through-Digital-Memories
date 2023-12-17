import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CapsuleDetailPage = () => {
  const { capsuleId } = useParams();
  const [capsuleDetail, setCapsuleDetail] = useState(null);

  useEffect(() => {
    const fetchCapsuleDetail = async () => {
      try {
        // Make an API call to fetch capsule details by ID
        const response = await axios.get(`http://localhost:3000/api/timecapsules/${capsuleId}`);
        setCapsuleDetail(response.data);
      } catch (error) {
        console.error('Error fetching capsule details:', error);
      }
    };

    fetchCapsuleDetail();
  }, [capsuleId]);

  if (!capsuleDetail) {
    // Loading state or error handling
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-6">{capsuleDetail.title}</h2>
        <p className="text-gray-600 mb-4">{capsuleDetail.description}</p>
        <p className="text-gray-700 mb-4">Unveiling Date: {new Date(capsuleDetail.unveilingDate).toLocaleDateString()}</p>
        <p className="text-gray-700 mb-4">Created by: {capsuleDetail.createdBy.username}</p>

        {/* Display photos or other files */}
        <div className="grid grid-cols-2 gap-4">
          {capsuleDetail.files.map((file, index) => (
            <div key={index}>
              {file.type === 'image' && (
                <img src={file.data} alt={`File ${index}`} className="rounded mb-2" />
              )}
              {/* Add conditions for other file types (videos, audio, etc.) */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CapsuleDetailPage;
