import React from 'react';
import F1Logo from './F1Logo';

const Header = ({ isAnimated, backgroundPic }) => (
  <header
    className="relative text-white p-6 mb-6 bg-cover bg-center"
    style={{
      backgroundColor: '#e10600', 
      height: '300px', 
      backgroundImage: `url(${backgroundPic})`,
    }}
  >
    <F1Logo orientation="left" isAnimated={isAnimated} />
    <F1Logo orientation="right" isAnimated={isAnimated} />
    <h1 className="text-4xl font-bold text-center">Formula 1 Drivers</h1>
    <p className="text-lg text-center">Your ultimate guide to F1 drivers!</p>
  </header>
);

export default Header;
