import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className="nav">
                <ul>
                    <li><a href="/order">Order</a></li>
                    <li><a href="/orderReview">Order Review</a></li>
                    <li><a href="/manageInventory">Manage Inventory</a></li>
                    <li><a href="/login">Login</a></li> 
                </ul>
            </div>
        </div>
    );
};

export default Header;