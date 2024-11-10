import React from 'react';
import './LocationCard.css';

function LocationCard({ location }) {
  return (
    <div className="location-card">
      <img src={location.image} alt={`${location.name} location`} />
      <h2>{location.name}</h2>
      <p>📞 {location.phone}</p>
      <p>✉️ {location.email}</p>
    </div>
  );
}

export default LocationCard;
