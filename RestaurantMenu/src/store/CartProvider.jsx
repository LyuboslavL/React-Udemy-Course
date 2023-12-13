import React, { useReducer } from "react";

import CartContext from "./cart-context.jsx";

const defaultCartState = {
  items: [],
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    let updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return {
      ...state,
      items: updatedItems,
    };
  } else if (action.type === "REMOVE") {
    const searchedItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const searchedItem = state.items[searchedItemIndex];

    let updatedItems;

    if (searchedItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...searchedItem,
        quantity: searchedItem.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[searchedItem] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  const cartContext = {
    items: cartState.items,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };

  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
