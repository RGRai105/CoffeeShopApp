import React from "react";
import "../../style.css"
export default function LearnMore() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul className="menu">
          <li>
            <a href="/FindmyBrew/Front page/About/About.html">About</a>
          </li>
          <li>
            <a href="/FindmyBrew/Front page/Services/Services.html">Services</a>
          </li>
          <li>
            <a href="/FindmyBrew/Front page/ContactUs/ContactUs.html">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Flex Container */}
      <main className="flex-container">
        <div className="step">
          <h2>Step 1: Understanding Your Needs</h2>
          <p>
            We start by understanding your requirements and objectives, tailoring our
            services to your goals.
          </p>
        </div>
        <div className="step">
          <h2>Step 2: Customized Solutions</h2>
          <p>
            We offer customized solutions that align with your business strategies to ensure
            success.
          </p>
        </div>
        <div className="step">
          <h2>Step 3: Continuous Support</h2>
          <p>
            Our team provides ongoing support to help you achieve your business goals
            effectively.
          </p>
        </div>
      </main>
    </div>
  );
};
