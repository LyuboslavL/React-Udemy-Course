import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authenticationReducer from "./authentication-slice";

// for multiple slices and reducers
const store = configureStore({
  reducer: { counter: counterReducer, auth: authenticationReducer },
});

// for a single slice
// const store = configureStore({ reducer: counterSlice.reducer });

export default store;

/* Using Redux and a reducer the traditional way

// import { createStore } from "redux";

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

*/
