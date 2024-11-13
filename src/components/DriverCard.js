import React from 'react';

const DriverCard = ({ driver, onClick }) => (
  <div
    className="bg-white shadow-md rounded-lg p-4 m-4 w-80 cursor-pointer transform transition-transform hover:scale-105"
    onClick={() => onClick(driver)}
  >
    <div className="relative">
      <img
        src={driver.headshot_url}
        alt={driver.full_name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div 
        className="absolute bottom-0 left-0 right-0 p-2"
        style={{ backgroundColor: `#${driver.team_colour}` }}
      >
        <p className="text-black text-center font-bold">{driver.team_name}</p>
      </div>
    </div>
    <div className="mt-4">
      <h2 className="text-xl font-semibold">{driver.full_name}</h2>
      <p className="text-gray-600">Driver #{driver.driver_number}</p>
      <p className="text-gray-600">{driver.country_code}</p>
    </div>
  </div>
);

export default DriverCard;