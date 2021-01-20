import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function Banner({ title, subtitle }) {
  return (
    <>
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>{title}</h1>
              <span className="subheading">{subtitle}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Banner;
