import { useState } from "react";
import { get } from "react-hook-form";
import { useSelector } from "react-redux";
import CheckoutComponent from "../components/content/CheckoutForm/Checkout/Checkout.compoment";

const Checkout = () => {
  const getCartItems = useSelector((state) => state.entities.cart.cartItems);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div>
      {getCartItems.map(cart =>  <CheckoutComponent cart={cart}
      order={order} onCaptureCheckout={console.log(cart)} error={errorMessage}/>  )}
    </div>
  );
};

export default Checkout;
