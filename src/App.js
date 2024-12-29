import React from 'react';
import storeItems from "./items.json";
import Store from "./components/Store";
import Cart from "./components/Cart";
import VoiceAssistant from "./components/VoiceAssistant";
import { useCart } from "./context/CartContext";

function App() {
  const { addToCart } = useCart();

  const handleVoiceCommand = (command) => {
    if (command.includes("add to cart")) {
      const itemName = command.split("add to cart ")[1];
      const item = storeItems.find(item => item.name.toLowerCase() === itemName.toLowerCase());
      if (item) {
        addToCart(item.id);
        alert(`${item.name} has been added to your cart.`);
      } else {
        alert("Item not found.");
      }
    } else if (command.includes("show cart")) {
      // Logic to show cart
      alert("Here are the items in your cart.");
    } else if (command.includes("checkout")) {
      // Logic to checkout
      alert("Proceeding to checkout.");
    }
  };

  return (
    <>
      <VoiceAssistant onCommand={handleVoiceCommand} />
      <Store items={storeItems} />
      <Cart />
    </>
  );
}

export default App;