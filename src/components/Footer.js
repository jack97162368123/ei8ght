// src/components/Footer.js

import React from 'react'
import { gsap } from 'gsap'
import Logo from "../images/Bottomabout/shutterstock_1696341169.jpg";
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.footerRef = React.createRef()
  }

  componentDidMount() {
    gsap.from(this.footerRef.current, { duration: 1, y: 100, opacity: 0 })
  }

  render() {
    return (
      <footer className="footer" ref={this.footerRef}>
        
        <div className="footer-content">
          <div className="logo">
            <img src={Logo} alt="Logo" /> 
          </div>
          <div className="footer-text">
            <h2>JOIN THE CLUB!</h2>
            <p>Email us or call one of us will get back to you as soon as possible.</p>
            <div className="contact-info">
              <a href="mailto:alistair@eightpr.co.uk" className="contact-button">Contact</a>
              <span className="phone-number">+44 (0)20 3637 4818</span>
            </div>
            <div className="social-icons">
              <a href="https://twitter.com/Aliabouttown" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><TwitterIcon /></a>
              <a href="https://www.linkedin.com/in/alistair-turner-6b42375/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="https://www.instagram.com/aliturner702/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            </div>
          </div>
          <nav className="navbar">
            {/* Your navigation items go here */}
          </nav>
        </div>
      </footer>
    )
  }
}

export default Footer
