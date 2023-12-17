
// TimeCapsuleCard.js
import React from 'react';

const TimeCapsuleCard = ({ title, description, creator, thumbnail }) => {
  return (
    <div className="time-capsule-card">
      <div className="thumbnail-container">
        {thumbnail ? (
          <img src={thumbnail} alt="Time Capsule Thumbnail" />
        ) : (
          <div className="default-thumbnail">📷</div>
        )}
      </div>
      <div className="info-container">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Creator: {creator}</p>
      </div>
    </div>
  );
};

export default TimeCapsuleCard;
