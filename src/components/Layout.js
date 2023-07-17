// Purpose: Layout component for the website
import React from "react";
import Bg from "./Bg";
import NavBar from "./NavBar";
import Paragraph from "./Paragraph";
import ImageComponent from "./ImageComponent";
import FullWidthComponent from ".//FullWidthComponent";
import WelcomeComponent from "./WelcomeComponent";
import EightComponent from "./EightComponent";
import EmptySpace from "./EmptySpace";
import ExperienceLogos from "./ExperienceLogos";
import ImageComponentHalf from "./ImageComponentHalf";
import FullWidthParagraph from "./FullWidthParagraphComponent";
import FullWidthParagraphComponent from "./FullWidthParagraphComponent"; // the new import

// import VerticalScrollCarousel from "./VerticalScrollCarousel";


// Styles

import "../styles/layout.css";
import "../styles/grid.css";
import 'swiper/swiper-bundle.css';


// Brake Pages
import svgImage1 from "../../static/mostexciting.svg";
import svgImage2 from "../../static/why-eight.svg";
import meetTheTeamImage from "../../static/meet-the-team.svg";
import svgImage4 from "../../static/Experence.svg";
import svgImage5 from "../../static/Design&Branding.svg";

// Meet the Team

import Happy from "../../static/Happy.jpg";
import TeamImage from "../../static/anna-samoylova-w55SpMmoPgE-unsplash.jpg";
import Al from "../../static/profile-shots/Al.jpeg"
import Person2 from "../../static/profile-shots/Amber Pic.jpeg"
import Person3 from "../../static/profile-shots/Claire Kenton.jpeg"
import Person4 from "../../static/profile-shots/MikePic1.jpeg"
import Person5 from "../../static/profile-shots/Unknown-1.jpeg"

const Layout = ({
  
  paragraphColumn = "left",
  titleColumn = "left",
  imageColumn = "left",
  children,

  
  
}) => (
  
  <div className="layout">
    <Bg />
    <NavBar />
    <main className="content">
      <div className="grid-container">
        <div className="left-column">
          <WelcomeComponent />
        </div>

        <div className="right-column">
          <EightComponent />
        </div>

        

        <div className="full-width-column" colSpan="2">
          <FullWidthComponent svgImage={svgImage1} />{" "}
          {/* Use the desired SVG image */}
        </div>

        {paragraphColumn === "left" && (
          <div className="left-column">
            <Paragraph text="A specialist PR & marketing agency working in the world of events and experience marketing. We exist because we love events, marketing, and live experiences. <br /> We talk about empathetic marketing; the creation of campaigns that take the time to understand audiences, their world, and their lives, and that build a closer connection with them. <br /> We talk about creativity; creating ideas, campaigns, and messages that create empathy and action.<br /> We exist in that sweet spot between events and brands, people and places, emotion, creativity, and intelligence." />
          </div>
        )}

        {imageColumn === "left" && (
          <div className="right-column">
            <ImageComponentHalf src={Happy} alt="Alistair Turner" />
          </div>
        )}

        <div className="full-width-column" colSpan="2">
          <FullWidthComponent svgImage={svgImage2} />{" "}
          {/* Use the desired SVG image */}
        </div>

        {imageColumn === "left" && (
          <div className="left-column">
            <ImageComponentHalf src={Happy} alt="Alistair Turner" />
          </div>
        )}
        {/* <div className="left-column">
          <EmptySpace />
        </div> */}

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
          <FullWidthComponent svgImage={meetTheTeamImage} />{" "}
          {/* Use the desired SVG image */}
        </div>

        {paragraphColumn === "left" && (
          <div className="left-column">
            <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </br> </br> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </br> </br> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </br> </br> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.ore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" />
          </div>
        )}

{imageColumn === "left" && (
          <div className="right-column">
            <ImageComponentHalf src={TeamImage} alt="Meat the Team Image (Tug)" />
          </div>
        )}


{imageColumn === "left" && (
  <div className="right-column">
    <ImageComponent src={Al} alt="Alistair" title="Alistair Turner" text="Managing Director" />
  </div>
)}

        <div className="left-column">
          <EmptySpace />
        </div>

        <div className="right-column">
          <EmptySpace />
        </div>

        {imageColumn === "left" && (
          <div className="left-column">
            <ImageComponent src={Person5} alt="Yvonne Turner" title="Yvonne Turner" text="MARKETING DIRECTOR"  />
          </div>
        )}

        <div className="left-column">
          <EmptySpace />
        </div>

        {imageColumn === "left" && (
          <div className="right-column">
            <ImageComponent src={Person4} alt="Mike Fletcher" title="Mike Fletcher" text="FREELANCE WRITER / CONTENT PRODUCER" />
          </div>
        )}

        <div className="right-column">
          <EmptySpace />
        </div>

        {imageColumn === "left" && (
          <div className="left-column">
            <ImageComponent src={Person3} alt="Claire Kenton" title="Claire Kenton" text="FREELANCE WRITER / JOURNALIST" />
          </div>
        )}

<div className="right-column">
          <EmptySpace />
        </div>

        {imageColumn === "left" && (
          <div className="right-column">
            <ImageComponent src={Person2} alt="Amber Maher" title="Amber Maher" text="FREELANCE ACCOUNT EXECUTIVE" />
          </div>
        )}

        <div className="full-width-column" colSpan="2">
          <FullWidthComponent svgImage={svgImage4} />{" "}
          {/* Use the desired SVG image */}
        </div>

        <div className="full-width-column" colSpan="2">
          <FullWidthParagraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in" />
        </div>

        <div className="full-width-column" colSpan="2">
  <ExperienceLogos />
</div>

<div className="full-width-column" colSpan="2">
          <FullWidthComponent svgImage={svgImage5} />{" "}
          {/* Use the desired SVG image */}
        </div>

        <div className="full-width-column" colSpan="2">
  <FullWidthParagraphComponent text={'This is design and branding EIGHT-style. Building on intelligence and audience insight before we let loose with the creatives. \n To do this takes an agency that understands the audiences you’re trying to reach, that make it their business to research who they are, what they care about - both at work and in their day to day lives. \nThe role of brand is increasingly important when it comes to how event planners select the people that they choose to work with. They don’t just want expertise and experience, that’s a given, they want brand alignment and shared values too. EIGHT gets this.'} />
</div>



      

        

        <div className="full-width-column" colSpan="2">
          <FullWidthComponent svgImage={svgImage5} />{" "}
          {/* Use the desired SVG image */}
        </div>

        {children}
      </div>

      
   

      


      
      

      



    





    </main>
  </div>
);

export default Layout;
