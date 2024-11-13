import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import DriversContainer from './components/DriversContainer';
import DriverModal from './components/DriverModal';

const App = () => {
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    axios
      .get('https://api.openf1.org/v1/drivers?session_key=9158')
      .then((response) => {
        setDrivers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching the drivers data:', error);
      });
  }, []);

  const handleCardClick = (driver) => {
    setSelectedDriver(driver);
    setIsModalOpen(true);
    setIsAnimated(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsAnimated(false);
  };

  return (
    <div className="App bg-#121313-100 min-h-screen">
      <Header isAnimated={isAnimated} backgroundPic="images/car.jpg" />
      <DriversContainer drivers={drivers} onCardClick={handleCardClick} />
      <audio ref={audioRef} src="/engine-rev.mp3" />
      {isModalOpen && <DriverModal driver={selectedDriver} onClose={closeModal} />}
    </div>
  );
};

export default App;