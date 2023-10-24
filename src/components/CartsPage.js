import axios from "axios";
import React, { useEffect, useState } from "react";

function CartsPage() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/carts");

      setCarts(response.data.carts);
    } catch (error) {}
  };

  return (
    <div>
      {carts.map((cart, index) => (
        <div key={index}>
          <p>CART ID: {cart.id}</p>
          {cart.products.map((product, index) => (
            <div key={index}>
              <p>product id: {product.id}</p>
              <p>product title: {product.title}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CartsPage;
