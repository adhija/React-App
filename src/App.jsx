import { useState } from "react";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import Cart from "./components/Cart";

function App() {

  const foods = [
    { id: 1, name: "Pizza", price: 250 },
    { id: 2, name: "Burger", price: 150 },
    { id: 3, name: "Pasta", price: 200 },
    { id: 4, name: "Sandwich", price: 100 }
  ];

  const [cartItems, setCartItems] = useState([]);

  function addToCart(food) {
    setCartItems([...cartItems, food]);
  }

  function removeFromCart(index) {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  }

  return (
    <div>
      <Header cartCount={cartItems.length} />
      <FoodList foods={foods} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;