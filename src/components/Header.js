import React, { useState } from 'react';
import '../assets/css/header.css';
import headerLogo from '../assets/images/headerLogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const [activeLink, setActiveLink] = useState('home');

    return (
        <div className='header-page-section-container'>
            <div className='header-page-img-section-content'>
                <Link to='/' onClick={() => { setMenuOpen(false); setActiveLink('home') }}>
                    <img src={headerLogo} className='img-fluid' alt='header-logo' />
                </Link>
            </div>
            <div className={`header-page-section-right-content ${menuOpen ? 'open' : ''}`}>
                <Link onClick={() => { setMenuOpen(false); setActiveLink('home') }} to='/'
                    style={{ color: activeLink === 'home' ? '#bda588' : '' }}
                >Home</Link>
                <Link onClick={() => { setMenuOpen(false); setActiveLink('about-us') }} to='/about-us'
                    style={{ color: activeLink === 'about-us' ? '#bda588' : '' }}
                >How it works?</Link>
                <Link onClick={() => { setMenuOpen(false); setActiveLink('projects') }} to='/projects'
                    style={{ color: activeLink === 'projects' ? '#bda588' : '' }}
                >Projects</Link>
                <Link onClick={() => { setMenuOpen(false); setActiveLink('contact-us') }} to='/contact-us'
                    style={{ color: activeLink === 'contact-us' ? '#bda588' : '' }}
                >Contact us</Link>
            </div>
            <button className="menu-toggle-button" onClick={toggleMenu}>
                &#9776; {/* Hamburger icon */}
            </button>
        </div>
    );
};

export default Header;
