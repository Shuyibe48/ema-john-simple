import React from 'react';
import './OrderProducts.css'
import { TrashIcon } from '@heroicons/react/24/solid'

const OrderProducts = ({ orderProduct, handleRemoveProduct }) => {
    const { img, name, price, shipping, id, quantity } = (orderProduct)

    let totalPrice = price * quantity

    return (
        <div className='order-cart'>
            <div className='order-cart-body'>
                <div className='order-cart-img'>
                    <img src={img} />
                </div>
                <div>
                    <h6>{name}</h6>
                    <p>Price: <span>${price}</span></p>
                    <p>Shipping: <span>${shipping}</span></p>
                    <p>Quantity: <span>{quantity}</span></p>
                    <p>Total Price: <span>${totalPrice}</span></p>
                </div>
            </div>
            <div>
                <TrashIcon onClick={() => handleRemoveProduct(id)} className="trash-icon" />
            </div>
        </div>
    );
};

export default OrderProducts;