import React, { useContext } from "react";
import CartDetails from "./CartDetails";
import { Grid } from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";

const CartList = () => {
  const { cart } = useContext(CartContext);
  var total = cart.reduce((acc, cart) => acc + cart.price * cart.quantity, 0);
  return cart.length !== 0 ? (
    <div style={{ padding: "3rem" }}>
      <h2 className="text-center" style={{ padding: "0.7rem" }}>
        My Shopping Cart
      </h2>
      <Grid container>
        {cart.map((cartItem, index) => {
          return <CartDetails key={index} cartItem={cartItem} />;
        })}
      </Grid>
      <div>
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          <b>
            <i>Total Amount :</i>
          </b>
        </span>
        <span style={{ marginLeft: "0.4rem", fontSize: "1.2rem" }}>
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
  );
};
export default CartList;
