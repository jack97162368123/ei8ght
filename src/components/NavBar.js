import React, { useState, useEffect } from 'react';
import EightLogo from '/static/8_Logo.svg'; // replace this with your logo path
import CustomHamburgerIcon from '/static/burger-menu-svgrepo-com.svg'; // replace this with your custom hamburger icon path
import '../styles/NavBar.css';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`nav ${showMenu ? 'show' : ''}`}>
      <div className="nav__logo">
        {windowWidth <= 768 && (
          <img src={EightLogo} alt="Logo" className="nav__logo-mobile" />
        )}
        {windowWidth > 768 && (
          <img src={EightLogo} alt="Logo" className="nav__logo-desktop" />
        )}
      </div>
      <ul className={`nav__links ${showMenu ? 'show' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      {windowWidth <= 768 && (
        <button className="nav__burger-menu" onClick={toggleMenu} aria-label="Toggle Menu">
          <img src={CustomHamburgerIcon} alt="Burger Icon" className="nav__burger-icon" />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
