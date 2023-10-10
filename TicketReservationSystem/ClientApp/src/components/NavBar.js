import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo1.png";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: '#178377' }}>
      <div className="container">
      <div className="navbar-logo">
          <img src={logo} alt="Sample Logo" width="100" height="100" className="mr-2" />
          <span className="navbar-logo-text">Mates Travel</span>
        </div>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/home" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/manage-users" className="navbar-link">
              Manage Users
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/booking" className="navbar-link">
              Booking
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Manage Train
            </Link>
          </li>
        </ul>
        <div className="navbar-actions">
          <Link to="/login" className="login-button">
            Login / Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
