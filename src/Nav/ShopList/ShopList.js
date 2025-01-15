import React from 'react';
import ShopContainer from '../../component/ShopContainer';

function App() {
  const products = [
    { id: 1, name: 'Product 1', price: 'R29.99', img: 'https://via.placeholder.com/200', detailsLink: '/product/1' },
    { id: 2, name: 'Product 2', price: 'R39.99', img: 'https://via.placeholder.com/200', detailsLink: '/product/2' },
    { id: 3, name: 'Product 3', price: 'R49.99', img: 'https://via.placeholder.com/200', detailsLink: '/product/3' },
    { id: 4, name: 'Product 4', price: 'R19.99', img: 'https://via.placeholder.com/200', detailsLink: '/product/4' },
  ];

  return (
    <div>
      <ShopContainer products={products} />
    </div>
  );
}

export default App;
