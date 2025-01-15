import React from 'react';
import OrderBox from '../../component/OrderBox';
import "../../style.css"

function App() {
  const orders = [
    { name: "Location 1", distance: "5km", description: "Description 1" },
    { name: "Location 2", address: "123 Main St", details: "Details 2" },
    { name: "Location 3", address: "456 Elm St", details: "Details 3" },
    { name: "Location 4", address: "789 Oak St", details: "Details 4" },
  ];

  return (
    <div>
      <div className="box-container">
        {orders.map((order, index) => (
          <OrderBox key={index} details={order} />
        ))}
      </div>
    </div>
  );
}

export default App;
