import React from "react";
import { Link } from "react-router-dom";
import "../../style.css"

function Whitelist() {
  return (
    <div>
      <section className="whitelist-container">
        <WhitelistItem
          imgSrc="https://via.placeholder.com/200"
          productName="Approved Product 1"
          category="Electronics"
          productId="1"
        />
        <WhitelistItem
          imgSrc="https://via.placeholder.com/200"
          productName="Approved Product 2"
          category="Home Appliances"
          productId="2"
        />
        <WhitelistItem
          imgSrc="https://via.placeholder.com/200"
          productName="Approved Product 3"
          category="Furniture"
          productId="3"
        />
        <WhitelistItem
          imgSrc="https://via.placeholder.com/200"
          productName="Approved Product 4"
          category="Clothing"
          productId="4"
        />
      </section>
    </div>
  );
}

function WhitelistItem({ imgSrc, productName, category, productId }) {
  return (
    <div className="whitelist-item">
      <img src={imgSrc} alt={productName} />
      <h3>{productName}</h3>
      <p>Category: {category}</p>
      <p>Status: Approved</p>
      <Link to={`/product/${productId}`} className="view-details-btn">
        View Details
      </Link>
    </div>
  );
}

export default Whitelist;
