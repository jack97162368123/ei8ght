import React from "react";
import "./../Philosphy-File/FullWidthVideo.css";
import "./../../styles/layout.css";
import "./../../styles/grid.css";
import PImageComponent from "../Philosphy-File/P-ImageComponent";
import DBHalfWidthContainer from "./DBHalfWidthContainer";
import "./../Philosphy-File/Philosphy.css";


import DesginBranding from "./../../images/DesignBranding/DesignBranding.svg";
import Umbrella from "../../images/DesignBranding/Images/Unbrela.png";
import House from "./../../images/DesignBranding/Images/ConcertHall.png";
import People_Drinks from "./../../images/DesignBranding/Images/People_Drinks.png";
import NOEA from "./../../images/DesignBranding/Images/NOEA.png";
import Slime from "./../../images/DesignBranding/Images/1-toy-slime-science-photo-library.jpeg";
import Slimelogo from "./../../images/DesignBranding/Images/Thelondonslime.png";
import MashMedia from "./../../images/DesignBranding/Images/MashMedia.png";

const DesignBranding = () => {
  return (
    <div className="half-width-section">
      <PImageComponent src={DesginBranding} alt="Desgin and Branding SVG" />


      <DBHalfWidthContainer imageSrc={Umbrella}>
        This is design and branding EIGHT-style. Building on intelligence and audience insight before we let loose with the creatives.
      </DBHalfWidthContainer>
      
      

      <DBHalfWidthContainer imageSrc={NOEA}>
        To do this takes an agency that understands the audiences you’re trying to reach, that make it their business to research who they are, what they care about - both at work and in their day to day lives.
      </DBHalfWidthContainer>

      <PImageComponent src={House} alt="Concert Hall In the everning" />
      
      
      <PImageComponent src={People_Drinks} alt="People At a Eerning Team Party" />

      <DBHalfWidthContainer imageSrc={MashMedia}>
        The role of brand is increasingly important when it comes to how event planners select the people that they choose to work with. They don’t just want expertise and experience, that’s a given, they want brand alignment and shared values too. EIGHT gets this.
      </DBHalfWidthContainer>
      
      
      <DBHalfWidthContainer imageSrc={Slimelogo}>
        Place holder text
      </DBHalfWidthContainer>

      <PImageComponent src={Slime} alt="Slime in hand" />

     
    </div>
  );
};

export default DesignBranding;
  
