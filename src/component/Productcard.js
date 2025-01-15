import React from "react";
import "../style.css"; // Ensure your CSS file is correctly imported

const ProductCard = ({ product = {} }) => {
  const { name = "Default Name", price = "0.00", image = "default-image.jpg", description = "No description available" } = product;

  const handleAddToCart = () => {
    alert(`${name} has been added to your cart!`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-card-image" />
      <div className="product-card-content">
        <h3 className="product-card-title">{name}</h3>
        <p className="product-card-description">{description}</p>
        <p className="product-card-price">${price}</p>
        <button onClick={handleAddToCart} className="product-card-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
