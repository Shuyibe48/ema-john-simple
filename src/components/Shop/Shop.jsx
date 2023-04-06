import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart()
        const saveCart = []

        for (const id in storedCart) {
            const addStoredCart = products.find(product => product.id === id)

            if (addStoredCart) {
                const quantity = storedCart[id]
                addStoredCart.quantity = quantity
                saveCart.push(addStoredCart)
            }
        }
        setCart(saveCart)
    }, [products])

    const cartInfo = (product) => {
        let newCart = []
        const exist = cart.find(productInCart => productInCart.id === product.id)

        if (!exist) {
            product.quantity = 1
            newCart = [...cart, product]
        } else {
            exist.quantity = + 1
            const remaining = cart.filter(productInCart => productInCart.id !== product.id)
            newCart = [...remaining, exist]
        }

        setCart(newCart)
        addToDb(product.id)
    }

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className='shop'>
                {
                    products.map(product => <Products
                        product={product}
                        key={product.id}
                        cartInfo={cartInfo}
                    ></Products>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    carts={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link className='review-btn' to="/order">
                        <button className='review-btn'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;