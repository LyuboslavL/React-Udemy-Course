import React, { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItem;
        let updatedItems;

        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItem = {
                ...action.item
            };
            updatedItems = state.items.concat(updatedItem);

        }

        return ({
            items: updatedItems,
            totalAmount: updatedTotalAmount
        });

    } else if (action.type === 'REMOVE') {
        const searchedItemIndex = state.items.findIndex((item) => item.id === action.id);
        const searchedItem = state.items[searchedItemIndex];

        if (searchedItem.amount > 1) {
            searchedItem.amount -= 1;
            console.log(searchedItem);
        }
    };

    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addToCartHandler = item => {
        dispatchCartAction({ type: 'ADD', item: item })
    };

    const removeFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addToCartHandler,
        removeItem: removeFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;