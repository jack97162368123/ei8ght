// src/components/ThreeColumnGrid.js

import React from 'react'
import '../About/ThreeColumnGrid.css'
import PsychologyIcon from '@mui/icons-material/Psychology'
import AdfScannerIcon from '@mui/icons-material/AdfScanner'
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

class ThreeColumnGrid extends React.Component {
  constructor(props) {
    super(props)

    // Create a ref for each column
    this.column1 = React.createRef()
    this.column2 = React.createRef()
    this.column3 = React.createRef()
  }

  componentDidMount() {
    // Animate the columns with GSAP and ScrollTrigger
    gsap.from(this.column1.current, { 
      scrollTrigger: {
        trigger: this.column1.current,
        start: 'top 75%'
      },
      duration: 1, 
      y: 100, 
      opacity: 0, 
      delay: 0.2 
    })
    gsap.from(this.column2.current, { 
      scrollTrigger: {
        trigger: this.column2.current,
        start: 'top 75%'
      },
      duration: 1, 
      y: 100, 
      opacity: 0, 
      delay: 0.4 
    })
    gsap.from(this.column3.current, { 
      scrollTrigger: {
        trigger: this.column3.current,
        start: 'top 75%'
      },
      duration: 1, 
      y: 100, 
      opacity: 0, 
      delay: 0.6 
    })
  }

  render() {
    return (
      <div className="About-Section">
        <div className="main-item" ref={this.column1}>
          <PsychologyIcon className="icon" />
         
          <b>Intelligence</b>
          <div className="aboutparagraph">
          <p>Everyone at EIGHT is committed to what we call the 70/30 principle: that 30% of everything we do will be non-client related. Intelligence gathering. <br /><br />This is about collecting information, trends, data, anecdotal information, gossip, market intelligence and case studies. It’s about becoming information junkies. It means we bring new information to our clients every day.</p>
        </div>
        </div>
        <div className="main-item" ref={this.column2}>
          <SportsMartialArtsIcon className="icon" />
          <b>Place Holder</b>
          <div className="aboutparagraph">
          
            <p> This approach got big on us, as more and more clients look for us to bring data and insight to their own events. <br /><br /> It started with our creating the ibtm World Trends Report (see below) and has involved in us being curators of content across some of our clients’ events, from CHS to ibtm.</p>
            </div>
        </div>
        <div className="main-item" ref={this.column3}>
          <AdfScannerIcon className="icon" />
          <b>Links</b>
          <div className="aboutparagraph">
            <p>Text for column 3</p>
            </div>
        </div>
      </div>
    )
  }
}

export default ThreeColumnGrid
