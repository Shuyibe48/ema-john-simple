import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
            </Link>
            <div className="nav">
                <ul>
                    <li><Link to="/order">Order</Link></li>
                    <li><Link to="/orderReview">Order Review</Link></li>
                    <li><Link to="/manageInventory">Manage Inventory</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;