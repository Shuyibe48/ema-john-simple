import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const carts = props.cart

    let totalPrice = 0
    let totalShipping = 0
    let quantity = 0

    for(const cart of carts){  
        totalPrice += cart.price * cart.quantity
        totalShipping += cart.shipping * cart.quantity
        quantity += cart.quantity
    }

    const tax = totalPrice*7/100
    const grandTotal = totalPrice + totalShipping + tax
    
    return (
        <div className='cart-body'>
            <h5>Order Summary</h5>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${grandTotal}</h6>
            <button className='clear-btn'>Clear Chat</button>
            <button className='review-btn'>Review Order</button>
        </div>
    );    
};

export default Cart;