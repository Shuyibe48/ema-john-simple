import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const carts = props.cart
    console.log(props.cart)

    let totalPrice = 0
    let totalShipping = 0

    for(const cart of carts){
        totalPrice += cart.price
        totalShipping += cart.shipping
    }

    const tax = totalPrice*7/100
    const grandTotal = totalPrice + totalShipping + tax
    
    return (
        <div className='cart-body'>
            <h5>Order Summary</h5>
            <p>Selected Item: {carts.length}</p>
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