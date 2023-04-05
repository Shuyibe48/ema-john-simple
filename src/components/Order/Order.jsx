import React, { useEffect, useState } from 'react';
import './Order.css'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Order = () => {

    const cart = useLoaderData()

    
    return (
        <div>
            <div className='shop-container'>
                <div className='shop'>
                    <h1>cart : {cart.length}</h1>
                </div>
                <div className='cart-container'>
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;