import React, { useState } from 'react';

const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

const LocationSelector = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div className='flex justify-between p-2 shadow-2xl items-center'>
        <div className='flex flex-col mr-4'>
      <h2>Your Location</h2>

      </div>

<div className='mt-2'>
      <select onChange={handleChange} className='w-22 border-none text-lg'>
        <option value="" >Select a location</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
};

export default LocationSelector;
