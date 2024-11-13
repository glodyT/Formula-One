import React from 'react';

const DriverModal = ({ driver, onClose }) => (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
    <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 border-4"
         style={{ borderColor: `#${driver.team_colour}` }}>
      <div className="relative flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <img
            src={driver.headshot_url}
            alt={driver.full_name}
            className="w-full rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4" 
              style={{ color: `#${driver.team_colour}` }}>
            {driver.full_name}
          </h2>
          <div className="space-y-2">
            <p className="text-lg">
              <span className="font-semibold">Team:</span> {driver.team_name}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Number:</span> {driver.driver_number}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Country:</span> {driver.country_code}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Abbreviation:</span> {driver.name_acronym}
            </p>
          </div>
        </div>
      </div>
      <button
        className="mt-6 px-6 py-2 rounded text-white"
        style={{ backgroundColor: `#${driver.team_colour}` }}
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

export default DriverModal;