import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-info">
            <p>© 2024 My Shop - All Rights Reserved</p>
            <p>
              <Link to="/privacy-policy" className="btn-2">
                Privacy Policy
              </Link>
              {" | "}
              <Link to="/terms" className="btn-2">
                Terms & Conditions
              </Link>
            </p>
          </div>

          <div className="footer-nav">
            <ul>
              <li>
                <Link to="/" className="btn2">
                <span className="spn2">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="btn2">
                <span className="spn2">About</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="btn2">
                <span className="spn2">Services</span>
                </Link>
              </li>
              <li>
                <Link to="/shop" className="btn2">
                <span className="spn2">Shop</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <Link to="https://facebook.com" className="btn-2">
              Facebook
            </Link>
            <Link to="https://twitter.com" className="btn-2">
              Twitter
            </Link>
            <Link to="https://instagram.com" className="btn-2">
              Instagram
            </Link>
          </div>

          <div className="footer-cta"></div>
          
          <div className="footer-contact">
            <p>
              Contact us at:{" "}
              <Link to="mailto:info@example.com" className="btn-2">
                info@example.com
              </Link>
            </p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
