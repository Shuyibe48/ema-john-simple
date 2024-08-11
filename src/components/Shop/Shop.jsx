import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { totalProducts } = useLoaderData();

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const pageNumber = [...Array(totalPages).keys()];

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    async function fetchData() {
      const respons = await fetch(
        `http://localhost:5000/products?page=0&limit=10`
      );
      const data = await respons.json();
      setProducts(data);
    }
  }, [currentPage, itemsPerPage]);

  console.log(products);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const saveCart = [];

    for (const id in storedCart) {
      const addStoredCart = products.find((product) => product._id === id);

      if (addStoredCart) {
        const quantity = storedCart[id];
        addStoredCart.quantity = quantity;
        saveCart.push(addStoredCart);
      }
    }
    setCart(saveCart);
  }, [products]);

  const cartInfo = (product) => {
    let newCart = [];
    const exist = cart.find(
      (productInCart) => productInCart._id === product._id
    );

    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity += 1;
      const remaining = cart.filter(
        (productInCart) => productInCart._id !== product._id
      );
      newCart = [...remaining, exist];
    }

    setCart(newCart);
    addToDb(product._id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <>
      <div className="shop-container">
        <div className="shop">
          {products.map((product) => (
            <Products
              product={product}
              key={product._id}
              cartInfo={cartInfo}
            ></Products>
          ))}
        </div>
        <div className="cart-container">
          <Cart
            carts={cart}
            handleClearCart={handleClearCart}
            btnText={"Review Order"}
            linkText={"/order"}
          />
        </div>
      </div>
      <div className="pagination">
        {pageNumber.map((number) => (
          <button key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        ))}
      </div>
    </>
  );
};

export default Shop;
