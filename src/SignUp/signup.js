import React from 'react';
import Header from '../Nav/Header';
import Footer from '../Footer/Footer';
import "../style.css"

function SignUp() {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Signup Form */}
      <div className="login-container">
        <form className="login-form">
          <h2>Sign Up</h2>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
          </div>
          <button type="submit" className="login-button">Sign Up</button>
        </form>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default SignUp;
