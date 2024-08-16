import React from 'react';
import './Products.css'

const Products = (props) => {
    const { name, img, price, seller, ratings } = props.product
    const cartInfo = props.cartInfo
    console.log(props);

    return (
        <div>
            <div className='card'>
                <div className='img'>
                    <img src={img} />
                </div>
                <div className='card-body'>
                    <h6>{name}</h6>
                    <p className='price'>Price: ${price}</p>
                    <div className='card-optional-info'>
                        <p className='seller'>Manufacturer : {seller}</p>
                        <p className='ratings'>Ratings : {ratings} star</p>
                    </div>
                </div>
                <div className='card-footer'>
                    <button onClick={() => cartInfo(props.product)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Products;