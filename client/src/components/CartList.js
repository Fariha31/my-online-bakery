import React, { useContext, useState } from "react";
import CartDetails from "./CartDetails";
import { Grid } from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";
import Footer from "./Footer";
const CartList = () => {
  const { cart } = useContext(CartContext);
  let total = 0;
  var basket = JSON.parse(localStorage.getItem("cart"));
  total = basket.reduce((acc, cart) => acc + cart.price * cart.quantity, 0);

  return (
    <div>
      cart.length !== 0 ? (
      <div style={{ padding: "3rem" }}>
        <h2 className="text-center" style={{ padding: "0.7rem" }}>
          My Shopping Cart
        </h2>
        <Grid container style={{ marginTop: "0.5rem" }}>
          {cart.map((cartItem, index) => {
            return <CartDetails key={index} cartItem={cartItem} />;
          })}
        </Grid>
        <div className="text-right">
          <span style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
            <b>Total Amount :</b>
          </span>
          <span style={{ marginLeft: "0.4rem", fontSize: "1.1rem" }}>
            PKR/-{total}
          </span>
        </div>
      </div>
      ) : (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h2>No Item is selected in cart</h2>
      </div>
      )
      <Footer />
    </div>
  );
};
export default CartList;
