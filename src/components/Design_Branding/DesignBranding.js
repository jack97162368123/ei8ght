import React from "react";
import "./../Philosphy-File/FullWidthVideo.css";
import "./../../styles/layout.css";
import "./../../styles/grid.css";
import DBHalfWidthContainer from "./DBHalfWidthContainer";
import "./../Philosphy-File/Philosphy.css";
import PImageComponent from "./../Philosphy-File/P-ImageComponent";

import Image1 from "../../images/DesignBranding/DesignBranding.svg";
import Image3 from "../../images/DesignBranding/Images/NOEA.png";
import Image4 from "../../images/DesignBranding/Images/ConcertHall.png";
import Image5 from "../../images/DesignBranding/Images/People_Drinks.png";
import Image6 from "../../images/DesignBranding/Images/MashMedia.png";
import Image7 from "../../images/DesignBranding/Images/Thelondonslime.png";
import Image8 from "../../images/DesignBranding/Images/1-toy-slime-science-photo-library.jpeg";

const DesignBranding = () => {
  return (
    <div className="half-width-section">
      <PImageComponent src={Image1} alt="Desgin and Branding SVG" />

      <DBHalfWidthContainer>
        This is design and branding EIGHT-style. Building on intelligence and audience insight before we let loose with the creatives.<br /> <br />
        To do this takes an agency that understands the audiences you’re trying to reach, that make it their business to research who they are, what they care about - both at work and in their day to day lives.
        <br /> <br />
        The role of brand is increasingly important when it comes to how event planners select the people that they choose to work with. They don’t just want expertise and experience, that’s a given, they want brand alignment and shared values too. EIGHT gets this.
      </DBHalfWidthContainer>

      <DBHalfWidthContainer imageSrc={Image3}>
        .
      </DBHalfWidthContainer>

      <PImageComponent src={Image4} alt="Concert Hall In the evening" />
      
      <PImageComponent src={Image5} alt="People At an Evening Team Party" />

      <DBHalfWidthContainer imageSrc={Image6}>
       .
      </DBHalfWidthContainer>
      
      <DBHalfWidthContainer imageSrc={Image7}>
        .
      </DBHalfWidthContainer>

      <PImageComponent src={Image8} alt="Slime in hand" />
    </div>
  );
};

export default DesignBranding;
