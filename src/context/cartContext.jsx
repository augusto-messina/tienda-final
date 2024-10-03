import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const alreadyExist = cart.find(currentItem => currentItem.id === item.id);

    if (alreadyExist) {
      setCart(cart.map(currentItem => 
        currentItem.id === item.id 
        ? {
            ...currentItem,
            quantity: item.quantity
              ? currentItem.quantity + item.quantity
              : currentItem.quantity + 1
          } 
        : currentItem
      ));
    } else {
      const quantity = item.quantity || 1;
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.map(currentItem =>
      currentItem.id === id
        ? { ...currentItem, quantity: currentItem.quantity - 1 }
        : currentItem
    ).filter(item => item.quantity > 0)); // Elimina productos con cantidad 0
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};