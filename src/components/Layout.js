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
import Philosophy from "./Philosophy";

// import VerticalScrollCarousel from "./VerticalScrollCarousel";

// Styles

import "../styles/layout.css";
import "../styles/grid.css";
import "swiper/swiper-bundle.css";

// Brake Pages
import svgImage1 from "../../static/mostexciting.svg";
import svgImage2 from "../../static/why-eight.svg";
import meetTheTeamImage from "../../static/meet-the-team.svg";
import svgImage4 from "../../static/Experence.svg";
import svgImage5 from "../../static/Design&Branding.svg";
import svgImage6 from "../../static/Philosophy.svg";
import About_EIGHT from "../../static/About_EIGHT.svg";
import Join from "../../static/Join.svg";
import Footer from "../../static/Bottom.svg";

// Meet the Team

import Happy from "../../static/Happy.jpg";
import TeamImage from "../../static/anna-samoylova-w55SpMmoPgE-unsplash.jpg";
import Al from "../../static/profile-shots/Al.jpeg";
import Person2 from "../../static/profile-shots/Amber Pic.jpeg";
import Person3 from "../../static/profile-shots/Claire Kenton.jpeg";
import Person4 from "../../static/profile-shots/MikePic1.jpeg";
import Person5 from "../../static/profile-shots/Unknown-1.jpeg";
import future from "../../static/Philosophy/Future_Generations.png";
import Diversity from "../../static/Philosophy/DIV.png";
import Sustainability from "../../static/Philosophy/Sustainability.png";
import Blank from "../../static/Philosophy/Blank.png";
import Branding from "../../static/Design-Branding.png";

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
            <Paragraph text="A specialist PR & marketing agency working in the world of events and experience marketing. We exist because we love events, marketing, and live experiences. <br /> We talk about empathetic marketing; the creation of campaigns that take the time to understand audiences, their world, and their lives, and that build a closer connection with them. <br /> We talk about creativity; creating ideas, campaigns, and messages that create empathy and action.\n We exist in that sweet spot between events and brands, people and places, emotion, creativity, and intelligence." />
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
            <ImageComponentHalf
              src={TeamImage}
              alt="Meat the Team Image (Tug)"
            />
          </div>
        )}

        {imageColumn === "left" && (
          <div className="right-column">
            <ImageComponent
              src={Al}
              alt="Alistair"
              title="Alistair Turner"
              text="Managing Director"
            />
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
            <ImageComponent
              src={Person5}
              alt="Yvonne Turner"
              title="Yvonne Turner"
              text="MARKETING DIRECTOR"
            />
          </div>
        )}

        <div className="left-column">
          <EmptySpace />
        </div>

        {imageColumn === "left" && (
          <div className="right-column">
            <ImageComponent
              src={Person4}
              alt="Mike Fletcher"
              title="Mike Fletcher"
              text="FREELANCE WRITER / CONTENT PRODUCER"
            />
          </div>
        )}

        <div className="right-column">
          <EmptySpace />
        </div>

        {imageColumn === "left" && (
          <div className="left-column">
            <ImageComponent
              src={Person3}
              alt="Claire Kenton"
              title="Claire Kenton"
              text="FREELANCE WRITER / JOURNALIST"
            />
          </div>
        )}

        <div className="right-column">
          <EmptySpace />
        </div>

        {imageColumn === "left" && (
          <div className="right-column">
            <ImageComponent
              src={Person2}
              alt="Amber Maher"
              title="Amber Maher"
              text="FREELANCE ACCOUNT EXECUTIVE"
            />
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
          <FullWidthParagraphComponent
            text={
              "This is design and branding EIGHT-style. Building on intelligence and audience insight before we let loose with the creatives. \n To do this takes an agency that understands the audiences you’re trying to reach, that make it their business to research who they are, what they care about - both at work and in their day to day lives. \n The role of brand is increasingly important when it comes to how event planners select the people that they choose to work with. They don’t just want expertise and experience, that’s a given, they want brand alignment and shared values too. EIGHT gets this."
            }
          />
        </div>

        <div className="full-width-column" colSpan="2">
          <FullWidthComponent svgImage={Branding} />{" "}
          {/* Use the desired SVG image */}
        </div>

        <div className="full-width-column" colSpan="2">
          <FullWidthComponent svgImage={svgImage6} />{" "}
          {/* Use the desired SVG image */}
        </div>

        {paragraphColumn === "left" && (
          <div className="left-column">
            <Philosophy
              title="1. Future Generations"
              text="At EIGHT we believe in the future of the events industry.
              Our research points to a new event consumer and a new event organiser, backed by super brands with a conscious.
              <br />
        
              For us, this is the real force behind moves towards better sustainability, inclusion, accessibility, and wellbeing outcomes. <br />
        
              Its why we support Event First Steps and the work they are doing to raise the voice of this generation across these so urgent subjects. <br />"
              imageSrc={future}
            />
          </div>
        )}

        {paragraphColumn === "left" && (
          <div className="right-column">
            <Philosophy
              title="2. Accessibility & Inclusion"
              text="It’s part of EIGHT’s core values that the event industry be as inclusive as possible. Our agency has been at the forefront of both ensuring that events are produced to cater for those who would not normally attend events – be they disabled from a motor or sensory reason, or that they just don’t like event environments – and from a societal point of view.
              <br />
        
              At the same time, we believe that one of the key structural issues that faces then industry is its ability to attract talent from across society. Be they from marginalised, disenfranchised or minority communities. Again, we have worked with our clients to bring these issues to the industry, and to address them proactively and aggressively. <br />
        
              Note: On a very basic level, the type face used on the website is designed to communicate better to those with dyslexia <br />"
              imageSrc={Blank}
            />
          </div>
        )}

        {paragraphColumn === "left" && (
          <div className="left-column">
            <Philosophy
              title="3. Diversity, Equity & Inclusion"
              text="We choose to separate accessibility led inclusion with equity and diversity within the industry. They do mix however and speak to a more ethical approach to meetings and events.
              <br />
        
              Through our work as opinion leaders within the industry, and as advisors to events businesses, we advocate for more diversity, forging partnerships with smart businesses and movements that represent these believes. It’s something that is intrinsic across our content programmes, as we look to present a more representative view of the industry with more diversity of opinion.. <br />"
              imageSrc={Diversity}
            />
          </div>
        )}

        {paragraphColumn === "left" && (
          <div className="right-column">
            <Philosophy
              title="4. Sustainability"
              text="Events have, for too long, been disregarded as a battleground for sustainable business. Now we need to show that, not only can they be a powerful communication resource for showcasing businesses sustainability, but that they can be sustainable in their own right.
              <br />
        
              EIGHT clients have always been ahead of the game, and we have been delighted to be involved in some of the most influential and industry defining campaigns around sustainability. These include the multi-award winning Beyond Food Reports, by Lime Venue Portfolio. <br />
              
              We were also one of the first followers, fans, and supporters of isla, the event industry’s own sustainability movement. We are a strategic advisor to The Rubbish Project a business that looks to create beauty from waste and install circular waste models into businesses. <br />
              
              At EIGHT PR & Marketing, we’re delighted to share that all of our business activities are offset through Carbon Neutral Britain, that we endeavour to use the most sustainable travel option possible and that we work with clients that share these same values towards more sustainable business and events. "
              imageSrc={Sustainability}
            />
          </div>
        )}

        {paragraphColumn === "left" && (
          <div className="left-column">
            <Philosophy
              title="5. The Virtual Experience Economy"
              text="We are, right now, in the age of the Virtual Experience Economy. A phrase initially coined by our partners at trendwatching.com, but which also provided a natural evolution of The Experience Economy, first explored by Pine & Gilmore in their same named book first published in 1999.
              <br />
        
              EIGHT PR & Marketing first bought the experience economy into the global event industry in 2018, predicting that the age of The Experience Economy (2009 -2019) had evolved into a 10-year trend. With it, we predicted a more empathetic and purpose led approach to experience, which laid out brand’s values to their audiences using events and technology in the ultimate hybrid. <br />
              
              This prediction has come true, with the increase in augmented experiences and the first forays of the event industry into the Metaverse. <br />
              
              We remain key influencers in this era of experience. In short, you heard it here first. "
              imageSrc={Blank}
            />
          </div>
        )}

        <div className="full-width-column" colSpan="2">
          <FullWidthComponent svgImage={About_EIGHT} />{" "}
          {/* Use the desired SVG image */}
        </div>

        <div className="full-width-column" colSpan="2">
          <FullWidthParagraphComponent
            text={
              "Intelligence is Part One of the three main tenets of EIGHT.\n Everyone at EIGHT is committed to what we call the 70/30 principle: that 30% of everything we do will be non-client related. Intelligence gathering. This is about collecting information, trends, data, anecdotal information, gossip, market intelligence and case studies. It’s about becoming information junkies. It means we bring new information to our clients every day.\n This approach got big on us, as more and more clients look for us to bring data and insight to their own events. \n It started with our creating the ibtm World Trends Report (see below) and has involved in us being curators of content across some of our clients’ events, from CHS to ibtm."
            }
          />
        </div>



        {paragraphColumn === "left" && (
          <div className="left-column">
            <Philosophy
              title="Creativity"
              text="Albert Einstein once said, ‘Creativity is Intelligence having fun’. Its why we harvest so much information because creativity needs to add value, to be continual and inexhaustible; that’s why EIGHT is also an infinity symbol. We’re not an agency that needs to be fed like a little puppy, we come armed with intelligence driven ideas."
              imageSrc={Blank}
            />
          </div>
        )}
       

       {paragraphColumn === "left" && (
          <div className="right-column">
            <Philosophy
              title="The Club"
              text="Because we spend so much time in the marketplace, we’ve built up a large network of people, organisations and business that add value to us and our clients. This could be value gained through information, partnerships, contacts, or event direct business. But it’s all added value, a perk of being a client. We call it The Club."
              imageSrc={Blank}
            />
          </div>
        )}


<div className="full-width-column" colSpan="2">
          <FullWidthComponent svgImage={Join} />{" "}
          {/* Use the desired SVG image */}
        </div>

        <div className="full-width-column" colSpan="2">
          <FullWidthComponent svgImage={Footer} />{" "}
          {/* Use the desired SVG image */}
        </div>
        


       

        {children}
      </div>
    </main>
  </div>
);

export default Layout;
