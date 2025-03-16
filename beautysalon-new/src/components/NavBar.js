import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Beauty by Nethu</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Our Services</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>  {/* NEW */}
        </li>
        <li>
          <Link to="/booking">Book Appointment</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

