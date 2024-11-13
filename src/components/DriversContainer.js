import React from 'react';
import DriverCard from './DriverCard';

const DriversContainer = ({ drivers, onCardClick }) => (
  <div className="flex flex-wrap justify-center">
    {drivers.map((driver) => (
      <DriverCard
        key={driver.driver_number}
        driver={driver}
        onClick={onCardClick}
      />
    ))}
  </div>
);

export default DriversContainer;