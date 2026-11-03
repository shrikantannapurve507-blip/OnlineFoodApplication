import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../Context/StoreContext';
import './Navbar.css';
import AppDownload from '../AppDownload/AppDownload';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('home');
    const [search, setSearch] = useState('');

    const { getTotalCartItems, setSearchText } = useContext(StoreContext);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchText(search.trim());
    };

    return (
        <nav className="navbar">

            {/* Logo */}
            <Link to="/" onClick={() => setMenu('home')}>
                <img
                    src={assets.logos}
                    alt="Foodie Logo"
                    className="logo"
                />
            </Link>

            {/* Navigation Menu */}

            <ul className="navbar-menu">

                <li>
                    <Link
                        to="/"
                        onClick={() => setMenu('home')}
                        className={menu === 'home' ? 'active' : ''}
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        to="/menu"
                        onClick={() => setMenu('menu')}
                        className={menu === 'menu' ? 'active' : ''}
                    >
                        Menu
                    </Link>
                </li>

                <li>
                    <Link
                        to="/app-download"
                        onClick={() => setMenu('mobile-app')}
                        className={menu === 'mobile-app' ? 'active' : ''}
                    >
                        Mobile App
                    </Link>
                </li>

                <li>
                    <Link
                        to="/contact"
                        onClick={() => setMenu('contact-us')}
                        className={menu === 'contact-us' ? 'active' : ''}
                    >
                        Contact Us
                    </Link>
                </li>

            </ul>


            {/* Right Section */}
            <div className="navbar-right">

                {/* Search */}
                <form className="navbar-search" onSubmit={handleSearch}>
                    <input
                        type="search"
                        placeholder="Search food..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button type="submit" className="search-btn">
                        <img src={assets.search_icon} alt="Search" />
                    </button>
                </form>

                {/* Cart */}
                <Link to="/cart" className="navbar-search-icon">
                    <img
                        src={assets.basket_icon}
                        alt="Cart"
                        className="basket"
                    />

                    {getTotalCartItems() > 0 && (
                        <span className="dot">
                            {getTotalCartItems()}
                        </span>
                    )}
                </Link>

                {/* Sign In */}
                <button
                    className="signin-btn"
                    onClick={() => setShowLogin(true)}
                >
                    Sign In
                </button>

            </div>
        </nav>
    );
};

export default Navbar;