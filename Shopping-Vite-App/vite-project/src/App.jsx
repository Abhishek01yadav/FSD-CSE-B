import React, { useState } from 'react';
import Book from "./components/Book";
import products from './assets/data/products';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]); // Har baar call hone par image repeat hogi
  };

  return (
    <div className="app">
      <h1>🛒 Shopping Vite App</h1>
      <div className="product-list">
        {products.map(product => (
          <Book key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <div className="cart">
        <h2>🧺 Cart Items</h2>
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} width="50" />
            <span>{item.name} - ₹{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;