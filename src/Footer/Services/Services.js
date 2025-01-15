import React from "react";
import { Link } from "react-router-dom";
import "../../style.css";

const Services = () => {
  return (
    <div>
      {/* Main Header */}
      <header className="main-header">
        <h1>Our Services</h1>
        <div className="header-content">
          <div className="buttons">
            <Link to="/" className="nav-button">
              Home
            </Link>
            <Link to="/login" className="login-button">
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="menu">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <h2>What We Offer</h2>
        <p>We offer a range of services to meet your needs:</p>
        <ul>
          <li>
            <strong>Consultation:</strong> Tailored advice to guide you through
            challenges and opportunities.
          </li>
          <li>
            <strong>Support:</strong> 24/7 assistance to ensure your needs are
            met at all times.
          </li>
          <li>
            <strong>Development:</strong> Customized solutions to optimize your
            operations and enhance productivity.
          </li>
        </ul>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Services;
