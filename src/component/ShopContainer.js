import React from 'react';
import PropTypes from 'prop-types';
import "../style.css"

function ShopContainer({ products }) {
  return (
    <section className="shop-container">
    </section>
  );
}

ShopContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      img: PropTypes.string, // img can be optional
      detailsLink: PropTypes.string, // detailsLink can be optional
    })
  ).isRequired,
};

export default ShopContainer;
