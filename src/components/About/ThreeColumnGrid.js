// src/components/ThreeColumnGrid.js

import React from "react";
import "../About/ThreeColumnGrid.css";
import PsychologyImage from "../../images/Bottomabout/einstein.jpeg";
import SportsMartialArtsImage from "../../images/Bottomabout/shutterstock_1696341169.jpg";
import AdfScannerImage from "../../images/Bottomabout/shutterstock_1389384308.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class ThreeColumnGrid extends React.Component {
  constructor(props) {
    super(props);

    // Create a ref for each column
    this.column1 = React.createRef();
    this.column2 = React.createRef();
    this.column3 = React.createRef();
  }

  componentDidMount() {
    // Animate the columns with GSAP and ScrollTrigger
    gsap.from(this.column1.current, {
      scrollTrigger: {
        trigger: this.column1.current,
        start: "top 75%",
      },
      duration: 1,
      y: 100,
      opacity: 0,
      delay: 0.2,
    });
    gsap.from(this.column2.current, {
      scrollTrigger: {
        trigger: this.column2.current,
        start: "top 75%",
      },
      duration: 1,
      y: 100,
      opacity: 0,
      delay: 0.4,
    });
    gsap.from(this.column3.current, {
      scrollTrigger: {
        trigger: this.column3.current,
        start: "top 75%",
      },
      duration: 1,
      y: 100,
      opacity: 0,
      delay: 0.6,
    });
  }

  render() {
    return (
      <div className="About-Section">
        <div className="main-item" ref={this.column1}>
          <img src={SportsMartialArtsImage} className="image-icon" alt="Psychology" />
          <b>Intelligence</b>
          <div className="aboutparagraph">
          <p>
              Everyone at EIGHT is committed to what we call the 70/30
              principle: that 30% of everything we do will be non-client
              related. Intelligence gathering. <br />
              <br />
              This is about collecting information, trends, data, anecdotal
              information, gossip, market intelligence and case studies. It’s
              about becoming information junkies. It means we bring new
              information to our clients every day. This approach got big on us,
              as more and more clients look for us to bring data and insight to
              their own events. <br />
              <br /> It started with our creating the ibtm World Trends Report
              (see below) and has involved in us being curators of content
              across some of our clients’ events, from CHS to ibtm.
            </p>
          </div>
        </div>
        <div className="main-item" ref={this.column2}>
          <img src={PsychologyImage} className="image-icon" alt="Sports Martial Arts" />
          <b>Creativity</b>
          <div className="aboutparagraph">
          <p>
              Albert Einstein once said, ‘Creativity is Intelligence having
              fun’. Its why we harvest so much information because creativity
              needs to add value, to be continual and inexhaustible; that’s why
              EIGHT is also an infinity symbol. <br /><br />We’re not an agency that needs
              to be fed like a little puppy, we come armed with intelligence
              driven ideas.
            </p>
          </div>
        </div>
        <div className="main-item" ref={this.column3}>
          <img src={AdfScannerImage} className="image-icon" alt="Adf Scanner" />
          <b>The Club</b>
          <div className="aboutparagraph">
          <p>Because we spend so much time in the marketplace, we’ve built up a large network of people, organisations and business that add value to us and our clients. <br /><br />
            This could be value gained through information, partnerships, contacts, or event direct business. But it’s all added value, a perk of being a client. We call it The Club.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ThreeColumnGrid;
