import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">ABC HOTEL BOOKINGS</span>
        <div className="navItems">
          <Link to="/Register" className="navButton">Register</Link>
          
          <Link to="/Login" className="navButton">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
