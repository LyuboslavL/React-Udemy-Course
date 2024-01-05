import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Loading...",
        message: "Loading cart data",
      })
    );

    const fetchRequest = async () => {
      const response = await fetch(
        "https://fir-react-database-5427c-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Fetching cart data failed...");
      }

      const data = response.json();
      return data;
    };

    try {
      const cartData = await fetchRequest();
      dispatch(cartActions.replaceCart(cartData));

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Cart data fetched successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error while fetching cart data",
          message: "Something went wrong...",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://fir-react-database-5427c-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed...");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error while sending cart data",
          message: "Something went wrong...",
        })
      );
    }
  };
};
