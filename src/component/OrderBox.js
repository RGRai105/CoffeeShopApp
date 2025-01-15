import React from 'react';
import "../style.css"

const OrderBox = () => (
  <div className="box">
    <div className="item">
      <h2>Your Location</h2>
      <img src="images/location.jpg" alt="Map showing location" className="location-image" />
      
    </div>
    <div className="button-container">
      <button className="my-button">Order</button>
    </div>
  </div>
);

export default OrderBox;
