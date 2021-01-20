import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <Link to="/" class="navbar-brand">Start Bootstrap</Link>
          {(open
            ? (
              <button
                onClick={() => setOpen(!open)}
                className="navbar-toggler navbar-toggler-right collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Menu
                <i className="fas fa-bars" />
              </button>
            )
            : (
              <button
                onClick={() => setOpen(!open)}
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                Menu
                <i className="fas fa-bars"> </i>
              </button>
            )
          )}

          {(open ? (
            <div className="navbar-collapse collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/" class="nav-link">
                    HOME
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about/" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/post/blog1" className="nav-link">Sample Post</Link>

                </li>
                <li className="nav-item">
                  <Link to="/contact/" className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          )
            : (
              <div className="navbar-collapse collapse show" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/" class="nav-link">
                      HOME
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about/" class="nav-link">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/post/blog1" class="nav-link">Sample Post</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact/" class="nav-link ">Contact</Link>
                  </li>
                </ul>
              </div>
            )
          )}
        </div>
      </nav>

    </>

  );
};

export default Navbar;
