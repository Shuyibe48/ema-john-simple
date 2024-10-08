import React, { useState } from "react";
import "./Order.css";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import OrderProducts from "../OrderProducts/OrderProducts";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Order = () => {
  const SaveCart = useLoaderData();

  const [cart, setCart] = useState(SaveCart);

  const handleRemoveProduct = (id) => {
    const remaining = cart.filter((rp) => rp._id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div>
      <div className="shop-container">
        <div className="order">
          {cart.map((product) => (
            <OrderProducts
              key={product._id}
              orderProduct={product}
              handleRemoveProduct={handleRemoveProduct}
            ></OrderProducts>
          ))}
        </div>
        <div className="cart-container">
          <Cart
            carts={cart}
            handleClearCart={handleClearCart}
            btnText={"Proceed Checkout"}
            linkText={"/orderProceed"}
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
