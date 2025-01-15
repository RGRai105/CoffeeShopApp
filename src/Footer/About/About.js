import React from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="main-header">
        <h1>About Us</h1>
        <div className="header-content">
          <div className="buttons">
            <Link to="/main" className="nav-button">Home</Link>
            <Link to="/login" className="login-button">Login</Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <ul className="menu">
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/services" className="nav-link">Services</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Who We Are</h2>
        <p>
          We are a dedicated team passionate about providing the best services to our customers. 
          Our mission is to make your experience seamless and enjoyable by offering top-notch solutions 
          tailored to your needs.
        </p>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
