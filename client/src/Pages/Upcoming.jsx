
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpcomingDatesPage = () => {
  const [upcomingDates, setUpcomingDates] = useState([]);
  const data=[
    {
      "title": "Legends Unleashed",
      "description": "A time capsule filled with memories from the golden era of sports.",
      "unveilingDate": "2023-12-25T08:00:00Z",
      "createdBy": {
        "username": "sportsFan1"
      }
    },
    {
      "title": "Stardust Chronicles",
      "description": "Journey through the captivating moments of legendary actors and actresses.",
      "unveilingDate": "2023-12-31T12:00:00Z",
      "createdBy": {
        "username": "filmBuff2"
      }
    },
    {
      "title": "Melodies of Time",
      "description": "A musical time capsule featuring the greatest hits and stories behind them.",
      "unveilingDate": "2024-01-10T18:30:00Z",
      "createdBy": {
        "username": "musicLover3"
      }
    }
  ]
  useEffect(() => {
    // Fetch upcoming dates from your API
    const fetchUpcomingDates = async () => {
      try {
        // const response = await axios.get('http://localhost:3000/api/timecapsules/upcoming-dates');
      
        setUpcomingDates([
            {
              "title": "Legends Unleashed",
              "description": "A time capsule filled with memories from the golden era of sports.",
              "unveilingDate": "2023-12-25T08:00:00Z",
              "createdBy": {
                "username": "sportsFan1"
              }
            },
            {
              "title": "Stardust Chronicles",
              "description": "Journey through the captivating moments of legendary actors and actresses.",
              "unveilingDate": "2023-12-31T12:00:00Z",
              "createdBy": {
                "username": "filmBuff2"
              }
            },
            {
              "title": "Melodies of Time",
              "description": "A musical time capsule featuring the greatest hits and stories behind them.",
              "unveilingDate": "2024-01-10T18:30:00Z",
              "createdBy": {
                "username": "musicLover3"
              }
            }
          ]
          );
      } catch (error) {
        console.error('Error fetching upcoming dates:', error);
      }
    };

    fetchUpcomingDates();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-6">Upcoming Capsule Opening Dates</h2>
        <ul className="list-disc pl-4">
          {upcomingDates.map((capsule) => (
            <li key={capsule.title} className="mb-6">
              <h3 className="text-blue-500 text-lg font-bold">{capsule.title}</h3>
              <p className="text-gray-600">{capsule.description}</p>
              <p className="text-gray-700">Unveiling Date: {new Date(capsule.unveilingDate).toLocaleDateString()}</p>
              <p className="text-gray-700">Created by: {capsule.createdBy.username}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingDatesPage;
