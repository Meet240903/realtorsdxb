import React, { useState } from 'react';
import '../assets/css/header.css';
import headerLogo from '../assets/images/headerLogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='header-page-section-container'>
            <div className='header-page-img-section-content'>
                <Link to='/'>
                    <img src={headerLogo} className='img-fluid' alt='header-logo' />
                </Link>
            </div>
            <div className={`header-page-section-right-content ${menuOpen ? 'open' : ''}`}>
                <Link onClick={()=>setMenuOpen(false)} to='/'>Home</Link>
                <Link onClick={()=>setMenuOpen(false)} to='/about-us'>How it works?</Link>
                <Link onClick={()=>setMenuOpen(false)} to='/projects'>Projects</Link>
                <Link onClick={()=>setMenuOpen(false)} to='/contact-us'>Contact us</Link>
            </div>
            <button className="menu-toggle-button" onClick={toggleMenu}>
                &#9776; {/* Hamburger icon */}
            </button>
        </div>
    );
};

export default Header;
