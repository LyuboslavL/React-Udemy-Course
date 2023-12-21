import React, { createContext } from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  removeAll: () => {},
});

export default CartContext;
