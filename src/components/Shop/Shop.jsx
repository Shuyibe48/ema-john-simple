import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const cartInfo = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
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
                <h5>Order Summary</h5>
                <p>Selected Item: {cart.length}</p>
                <p>Total Price: </p>
                <p>Total Shipping Charge: </p>
                <p>Tax: </p>
                <p>Grand Total: </p>
                <button>Clear Chat</button>
                <button>Review Order</button>
            </div>
        </div>
    );
};

export default Shop;