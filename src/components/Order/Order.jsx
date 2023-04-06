import React, { useEffect, useState } from 'react';
import './Order.css'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OrderProducts from '../OrderProducts/OrderProducts';

const Order = () => {

    const cart = useLoaderData()
    
    return (
        <div>
            <div className='shop-container'>
                <div className='order'>
                    {
                        cart.map(product => <OrderProducts
                            key={product.id}
                            orderProduct={product}
                        ></OrderProducts>)
                    }
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