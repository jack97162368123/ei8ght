import React, { useState, useEffect } from 'react';
import Loading from './loading/Loading'; // Make sure this path is correct
import Bg from "./Bg";
import NavBar from "./NavBar";
import Paragraph from "./Paragraph";
import FullWidthComponent from ".//FullWidthComponent";
import ExperienceLogos from "./ExperienceLogos";
import ImageComponentHalf from "./ImageComponentHalf";
import VerticalScrollCarousel from "./VerticalScrole/VerticalScrollCarousel";
import ThreeColumnImageComponent from "./ThreeColumnImageComponent";
import Philosphy from "./Philosphy-File/Philosphy.js";
import DesignBranding from "./Design_Branding/DesignBranding";
import Footer from "./Footer";
import ThreeColumnGrid from "./About/ThreeColumnGrid";
import WelcomeEightComponent from "./WelcomeEightComponent";
import Seo from "./seo.js";

import "../styles/layout.css";
import "../styles/grid.css";
import "swiper/swiper-bundle.css";

import svgImage1 from "../../static/mostexciting.svg";
import svgImage2 from "../../static/About_EIGHT.svg";

import meetTheTeamImage from "../../static/meet-the-team.svg";
import svgImage4 from "../../static/Experence.svg";
import About_EIGHT from "../../static/About_EIGHT.svg";

import Happy from "../images/TopImages/shutterstock_247713031.jpg";
import TeamImage from "../images/TopImages/shutterstock_794460844.jpg";
import svgImage5 from "../images/TopImages/Artboard 1.png";
import Swote_Top from "../images/TopImages/Swote_Top.png";

const words = ["Share", "Connect", "Learn"];

const Layout = ({ paragraphColumn = "left", titleColumn = "left", imageColumn = "left", children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Minimum duration timer
    const minimumDurationTimer = setTimeout(() => {
      // If the page has already loaded, start the fade-out
      if (document.readyState === 'complete') {
        startFadeOut();
      } else {
        // If the page hasn't loaded yet, wait for the load event
        window.addEventListener('load', startFadeOut);
      }
    }, 2000); // Minimum duration of 2 seconds

    const startFadeOut = () => {
      setOpacity(0);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Duration of the fade transition
    };

    return () => {
      window.removeEventListener('load', startFadeOut);
      clearTimeout(minimumDurationTimer);
    };
  }, []);

  return (
    <div className="layout">
      {isLoading && <Loading opacity={opacity} />}

          <Seo
            title="Eight PR & Marketing - Creating Empathetic and Creative Experiences"
            description="EIGHT PR & Marketing is a specialist agency with a mission to blend business with pleasure in the realm of events and experience marketing. Our focus is empathetic marketing and creative campaigns that connect deeply with audiences. EIGHT is more than a number, it's a club, a network, and a promise of quality and connection."
          />
          <Bg />
          <NavBar />
          <main className="content">
            <WelcomeEightComponent welcomeText="Welcome to" contentText="EI8HT" />

      <div className="grid-container">
      

        <div className="full-width-column" colSpan="2">
          <FullWidthComponent svgImage={svgImage1} />{" "}
        </div>

        <div className="full-width-column" colSpan="2">
          <VerticalScrollCarousel words={words} />{" "}
        </div>

        {paragraphColumn === "left" && (
          <div className="left-column">
            <Paragraph text="A specialist PR & marketing agency working in the world of events and experience marketing. We exist because we love events, marketing, and live experiences. <br /> We talk about empathetic marketing; the creation of campaigns that take the time to understand audiences, their world, and their lives, and that build a closer connection with them. <br /> We talk about creativity; creating ideas, campaigns, and messages that create empathy and action.\n We exist in that sweet spot between events and brands, people and places, emotion, creativity, and intelligence." />
          </div>
        )}

        {imageColumn === "left" && (
          <div className="right-column">
            <ImageComponentHalf src={Happy} alt="Alistair Turner" />
          </div>
        )}

        <div className="full-width-column">
          <FullWidthComponent svgImage={svgImage2} />
        </div>

        {imageColumn === "left" && (
          <div className="left-column">
            <ImageComponentHalf src={svgImage5} alt="Alistair Turner" />
          </div>
        )}

        {paragraphColumn === "left" && (
          <div className="right-column">
            <Paragraph
              text="EIGHT started with a simple mission; to create a business that mixes business and pleasure. We attend events because they are productive, hard work, but great fun. This is allowed. You are allowed to enjoy your work.<br />
            
              EIGHT was formed out of a belief that this is what business should be like; that if you love what you do, you will be good at it, and it will be good for everyone; colleagues, clients, people, planet. <br />
              
              EIGHT was built around connections; a club mentality. Our first followers are our clients, then our network of stakeholders who formed the rest of our club. <br />
              
              So why EIGHT? Because we like circles but we also like connections. Because EIGHT is a lucky number, and we’re the lucky ones; we love what we do. EIGHT isn’t just a number to us; it’s a club, a network, and a promise."
            />
          </div>
        )}

        <div className="full-width-column" colSpan="2">
          <FullWidthComponent svgImage={meetTheTeamImage} />
        </div>

        {imageColumn === "left" && (
          <div className="left-column">
            <ImageComponentHalf
              src={Swote_Top}
              alt="Qwote saying IF YOU WANT TO LIFT YOURSELF UP LIFT UP SOMEONE ELSE Booker T Washington"
            />
          </div>
        )}

        {imageColumn === "left" && (
          <div className="right-column">
            <ImageComponentHalf
              src={TeamImage}
              alt="Meat the Team Image (Tug)"
            />
          </div>
        )}

        <div className="full-width-column" colSpan="2">
          <ThreeColumnImageComponent />
        </div>

        <div className="full-width-column" colSpan="2">
          <FullWidthComponent svgImage={svgImage4} />{" "}
        </div>

        <div className="full-width-column" colSpan="2">
          <ExperienceLogos />
        </div>

        <div id="design-branding" className="full-width-column" colSpan="2">
          <DesignBranding />
        </div>

        <div id="philosophy" className="full-width-column">
          <Philosphy />
        </div>

        <div id="About" className="full-width-column" colSpan="2">
          <FullWidthComponent svgImage={About_EIGHT} />{" "}
        </div>

        <div className="full-width-column" colSpan="2">
          <ThreeColumnGrid />
        </div>

        <div className="full-width-column" colSpan="2">
          <div className="layout">
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default Layout;