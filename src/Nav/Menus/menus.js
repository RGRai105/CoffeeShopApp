import React, { useState } from 'react';
import '../../style.css';

const menus_grid = [
  { id: 1, name: 'Espresso' },
  { id: 2, name: 'Cappuccino' },
  { id: 3, name: 'Latte' },
  { id: 4, name: 'Mocha' },
];

const menus = [
  { id: 1, name: 'Espresso', description: 'A rich, dark coffee made with finely ground beans.', price: '$3.00' },
  { id: 2, name: 'Cappuccino', description: 'Espresso topped with steamed milk foam.', price: '$4.50' },
  { id: 3, name: 'Latte', description: 'Espresso with steamed milk, topped with a little foam.', price: '$4.00' },
  { id: 4, name: 'Mocha', description: 'Espresso with chocolate syrup and steamed milk.', price: '$5.00' },
  { id: 5, name: 'Americano', description: 'Espresso diluted with hot water, resulting in a black coffee.', price: '$3.50' },
  { id: 6, name: 'Macchiato', description: 'Espresso with a small amount of steamed milk or foam.', price: '$3.50' },
  { id: 7, name: '1', description: 'Espresso with a small amount of steamed milk or foam.', price: '$3.50' },
  { id: 8, name: '2', description: 'Espresso with a small amount of steamed milk or foam.', price: '$3.50' },
  { id: 9, name: '3', description: 'Espresso with a small amount of steamed milk or foam.', price: '$3.50' },
  { id: 10, name: '4', description: 'Espresso with a small amount of steamed milk or foam.', price: '$3.50' },
];

const Menus = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const openMenu = (menuName) => {
    // Find the menu by name in the menus array
    const menu = menus.find((item) => item.name === menuName);
    setSelectedMenu(menu);
  };

  const closeMenu = () => {
    setSelectedMenu(null);
  };

  return (
    <div className="menus-container">
      <h2>Our Coffee Menu</h2>
      <div className="menu-grid">
        {menus_grid.map((menuItem) => (
          <div
            key={menuItem.id}
            className="menu-card"
            onClick={() => openMenu(menuItem.name)} // Use the name to find details
          >
            <h3>{menuItem.name}</h3>
          </div>
        ))}
      </div>

      {selectedMenu && (
        <div className="menu-modal">
          <div className="modal-content">
            <button className="close" onClick={closeMenu}>
              &times;
            </button>
            <h3>{selectedMenu.name}</h3>
            <p>{selectedMenu.description}</p>
            <p><strong>{selectedMenu.price}</strong></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menus;
