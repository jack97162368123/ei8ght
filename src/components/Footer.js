// src/components/Footer.js

import React from 'react'
import { gsap } from 'gsap'
import Logo from "../../static/8_Logo.svg"
import { Link } from 'gatsby'
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
        <div className="logo">
          <img src={Logo} alt="Logo" />  {/* Use the Logo variable here */}
        </div>
        <div className="footer-content">
          <div className="footer-text">
            <h1>JOIN THE CLUB!</h1>
            <p>Email us or call one of us will get back to you as soon as possible.</p>
            <div className="contact-info">
              <Link to="/contact/" className="contact-button">Contact</Link>
              <span className="phone-number">+1 (234) 567-8901</span>
            </div>
            <div className="social-icons">
              <TwitterIcon />
              <LinkedInIcon />
              <InstagramIcon />
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
