import React, { useState, useEffect } from "react";
import { slide as BurgerMenu } from "react-burger-menu";
import EightLogo from "../images/Navbar/8_Logo.svg"; // replace this with your logo path
import CustomHamburgerIcon from "../images/Navbar/NAV.png"; // replace this with your custom hamburger icon path
import "../styles/NavBar.css";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItems = [
    { href: "#home", text: "Home" },
    { href: "#design-branding", text: "Design & Branding" },
    { href: "#philosophy", text: "Philosophy" },
    { href: "#About", text: "About Eight" },
  ];

  return (
    <>
      {windowWidth <= 768 ? (
        <nav className="nav">
          <div className="nav__logo">
            <img src={EightLogo} alt="Logo" className="nav__logo-mobile" />
          </div>
          <BurgerMenu
            // ...BurgerMenu properties
          >
            {menuItems.map((item, index) => (
              <a key={index} href={item.href}>
                {item.text}
              </a>
            ))}
          </BurgerMenu>
        </nav>
      ) : (
        <nav className="nav">
          <div className="nav__logo">
            <a href="#home"> {/* Linking the logo to the home section */}
              <img src={EightLogo} alt="Logo" className="nav__logo-desktop" />
            </a>
          </div>
          <ul className="nav__links">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
