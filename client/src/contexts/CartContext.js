import React, { createContext, useReducer, useEffect, useState } from "react";
import { cartReducer, ncartReducer } from "../reducers/cartReducer";
export const CartContext = createContext();
const CartContextProvider = (props) => {
  var counter = 0;
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });
  console.log("cart");
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
