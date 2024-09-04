import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/Service'}>Service</Link>
                <Link to={'Contact'}>Contact Us</Link>
                <Link to={'About'}>About Us</Link>
                <Link to="/login" className="header-button">Login</Link>
                <Link to="/register" className="header-button">Register</Link>
                <Link to="/API" className="header-button">API</Link>            
            </nav>
        </header>
    );
}

export default Header;