import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => {
                const errorMessage = error.message
                console.log(errorMessage);
            })
    }

    return (
        <div className='header'>
            <Link to="/">
                <div className='logo'>
                    <img src={logo} />
                </div>
            </Link>
            <div className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/order">Order</Link></li>
                    <li><Link to="/orderReview">Order Review</Link></li>
                    <li><Link to="/manageInventory">Manage Inventory</Link></li>
                    {
                        user ?
                            <li><Link onClick={handleLogOut} to="/login">Log Out</Link></li>
                            :
                            <>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/signup">Sign Up</Link></li>
                            </>
                    }
                    <li>{user && user.email}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;