import React, { useContext } from "react";
import "./Cart.css";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { connectAuthEmulator } from "firebase/auth/cordova";

const Cart = ({ carts, handleClearCart, btnText, linkText }) => {
  const { setCartPrice } = useContext(AuthContext);

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;

  for (const cart of carts) {
    totalPrice += cart.price * cart.quantity;
    totalShipping += cart.shipping * cart.quantity;
    quantity += cart.quantity;
  }

  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  setCartPrice(grandTotal);

  const checkoutOrder = async () => {
    const stripe = await loadStripe(
      "pk_test_51PmZ97FW0ZiV4vTBvuzzsNhtZwSIACZvaDASdP9EOe45vYpQ9fHdAuyr96dNSuoLtTww36DW8H5IX4U6XNTlYjy300x4U3H0gj"
    );

    const response = await fetch(
      "http://localhost:5000/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: carts }),
      }
    );

    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <div className="cart-body">
      <h5>Order Summary</h5>
      <p>Selected Item: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax}</p>
      <h6>Grand Total: ${grandTotal}</h6>
      <button onClick={handleClearCart} className="clear-btn">
        Clear Cart
      </button>
      <span onClick={checkoutOrder}>
        {/* <Link className="review-btn" to={linkText}> */}
        <button className="review-btn">{btnText}</button>
        {/* </Link> */}
      </span>
    </div>
  );
};

export default Cart;
