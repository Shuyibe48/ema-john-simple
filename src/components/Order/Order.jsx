import React, { useEffect, useState } from 'react';
import './Order.css'
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import OrderProducts from '../OrderProducts/OrderProducts';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {

    const SaveCart = useLoaderData()

    const [cart, setCart] = useState(SaveCart)

    const handleRemoveProduct = id => {
        const remaining = cart.filter(rp => rp.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div>
            <div className='shop-container'>
                <div className='order'>
                    {
                        cart.map(product => <OrderProducts
                            key={product.id}
                            orderProduct={product}
                            handleRemoveProduct={handleRemoveProduct}
                        ></OrderProducts>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart
                        carts={cart}
                        handleClearCart={handleClearCart}
                    >
                        <Link className='review-btn' to="/orderProceed">
                            <button className='review-btn'>Proceed Checkout</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;