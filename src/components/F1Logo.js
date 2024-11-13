import React from 'react';
import PropTypes from 'prop-types';

const F1Logo = ({ orientation, isAnimated }) => (
  <img
    src="images/f1-logo.png"
    alt="F1 Logo"
    className={`absolute top-10 ${orientation}-2 w-16 h-16 ${
      isAnimated ? 'animate-bounce' : ''
    }`}
  />
);

F1Logo.propTypes = {
  orientation: PropTypes.oneOf(['left', 'right']).isRequired,
  isAnimated: PropTypes.bool,
};

F1Logo.defaultProps = {
  isAnimated: false,
};

export default F1Logo;