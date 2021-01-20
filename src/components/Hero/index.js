import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Hero = ({ children }) => (
  <header className="masthead">
    {children}
  </header>
);

Hero.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Hero;
