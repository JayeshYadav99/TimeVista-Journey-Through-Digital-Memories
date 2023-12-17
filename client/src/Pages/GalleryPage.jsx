// components/GalleryPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const GalleryPage = () => {
  const [publicCapsules, setPublicCapsules] = useState([]);

  useEffect(() => {
    // Fetch public capsules when the component mounts
    const fetchPublicCapsules = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/timecapsules/public');
        setPublicCapsules(response.data);
      } catch (error) {
        console.error('Error fetching public capsules:', error);
      }
    };

    fetchPublicCapsules();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-8">Public Time Capsules Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {publicCapsules.map((capsule) => (
          <div key={capsule._id} className="bg-white p-4 rounded-lg shadow-md">
            {/* Display capsule image (assuming the first file is an image) */}
            {capsule.files.length > 0 && capsule.files[0].type === 'image' && (
              <img
                src={capsule.files[0].data} // Assuming the first file is the thumbnail
                alt={`Thumbnail for ${capsule.title}`}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
            )}

            <h3 className="text-lg font-semibold mb-2">{capsule.title}</h3>
            <p className="text-gray-600 mb-4">{capsule.description}</p>

            {/* Additional information like creator, date, etc., can be added here */}
            <Link to ={`/Gallery/${capsule._id}`}>View Capsule Content</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
