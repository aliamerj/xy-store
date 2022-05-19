import { useState } from "react";
import { SwipeableDrawer } from "@mui/material";
import CartItems from "../CartItems";
import CartHeader from "../../cartHeader/CartHeader";
import CartFooter from "../../cartFooter/CartFooter";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

const CartDrawer = ({ cartState }) => {
  const {
    showDrawer: [showDrawer, setShowDrawer],
  } = { showDrawer: useState(false), ...(cartState || {}) };
  const productCartArray = useSelector(
    (state) => state.entities.cart.cartItems
  );
  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        onOpen={() => true}
        role="presentation"
      >
        <CartHeader />
        {productCartArray.length !== 0 ? (
          <div>
            <CartItems
              cartState={{ showDrawer: [showDrawer, setShowDrawer] }}
            />
            <CartFooter
              cartState={{ showDrawer: [showDrawer, setShowDrawer] }}
            />
          </div>
        ) : (
          <EmptyCart />
        )}
      </SwipeableDrawer>
    </div>
  );
};

export default CartDrawer;
