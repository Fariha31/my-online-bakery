import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Button, Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
const CartDetails = (props) => {
  const { dispatch } = useContext(CartContext);
  console.log(props);
  const { cartItem } = props;

  return (
    <Grid item>
      <Grid container>
        <Grid
          item
          md={3}
          style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }}
        >
          <img className="img-fluid" src={cartItem.photo} />
        </Grid>
        <Grid item md={9} style={{ paddingLeft: "2rem", paddingTop: "1rem" }}>
          <h3>{cartItem.title}</h3>
          <h6>Price: {cartItem.price}</h6>
          <div>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => {
                if (cartItem.quantity > 0) {
                  cartItem.quantity = cartItem.quantity - 1;
                } else cartItem.quantity = 0;
              }}
            >
              <RemoveIcon />
            </IconButton>
            <span>{cartItem.quantity}</span>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() =>
                dispatch({
                  type: "INC_QTY",
                  count1: cartItem.quantity,
                })
              }
            >
              <AddIcon />
            </IconButton>
          </div>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => dispatch({ type: "DELETE_ITEM", id: cartItem.id })}
          >
            Remove
          </button>
        </Grid>
      </Grid>
      <hr />
    </Grid>
  );
};
export default CartDetails;
