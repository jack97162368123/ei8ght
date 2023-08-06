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
            customBurgerIcon={
              <div style={{ width: "20px", height: "20px" }}>
                <img
                  src={CustomHamburgerIcon}
                  alt="Menu"
                  style={{ width: "10%", height: "" }}
                />
              </div>
            }
            styles={{
              bmMenuWrap: {
                background: "#ffffff", 
                borderRadius: "30px",
                paddingTop: "30px",
                width: "calc(100% - 16px)", // reduce the width by 16px
                marginTop: "55px",
                marginRight: "8px",
                marginLeft: "8px",
              },

              bmMenu: {
                width: "100%",
                transition: "transform 0.5s ease-in-out", // Add this line
                pading: "0px",
                marginright: "0px",
                textAlign: "right", // Add this line
                paddingRight: "10px",
              },

              bmCrossButton: {
                height: "24px",
                width: "24px",
                right: "25px",
                top: "10px",
              },
              bmCross: {
                height: "24px",
                width: "3px",
                background: "#ef0690",
              },

              bmItem: {
                display: "inline-block",
                textDecoration: "none",
                marginBottom: "10px",
                marginTop: "1em",
                color: "#ef0690",
                transition: "color 0.2s",
                fontSize: "1.3em",
              },
              bmOverlay: {
                background: "transparent",
              },
              bmItemList: {
                paddingLeft: "45%", // Adjust this value as needed
                margin: "0",
                width: "50%",
              },
              bmBurgerButton: {
                position: "fixed",
                width: "100%",
                height: "",
                right: "-80%", // Adjust this to move the button to the right
                top: "25px", // Adjust this to move the button down from the top
              },
            }}
            right // This makes the menu appear from the right side
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
            <a href="#home"> 
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