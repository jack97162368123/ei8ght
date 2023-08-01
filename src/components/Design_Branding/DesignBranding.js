import React from "react";
import "./../Philosphy-File/FullWidthVideo.css";
import "./../../styles/layout.css";
import "./../../styles/grid.css";
import DBHalfWidthContainer from "./DBHalfWidthContainer";
import "./../Philosphy-File/Philosphy.css";
import { StaticImage } from 'gatsby-plugin-image';

const DesignBranding = () => {
  return (
    <div className="half-width-section">
      <StaticImage src="../../images/DesignBranding/DesignBranding.svg" alt="Desgin and Branding SVG" />

      <DBHalfWidthContainer image={<StaticImage src="../../images/DesignBranding/Images/Unbrela.png" alt="Umbrella" />}>
        This is design and branding EIGHT-style. Building on intelligence and audience insight before we let loose with the creatives.<br /> <br />
        To do this takes an agency that understands the audiences you’re trying to reach, that make it their business to research who they are, what they care about - both at work and in their day to day lives.
        <br /> <br />
        The role of brand is increasingly important when it comes to how event planners select the people that they choose to work with. They don’t just want expertise and experience, that’s a given, they want brand alignment and shared values too. EIGHT gets this.
      </DBHalfWidthContainer>

      <DBHalfWidthContainer image={<StaticImage src="../../images/DesignBranding/Images/NOEA.png" alt="NOEA" />}>
        .
      </DBHalfWidthContainer>

      <StaticImage src="../../images/DesignBranding/Images/ConcertHall.png" alt="Concert Hall In the everning" />
      
      <StaticImage src="../../images/DesignBranding/Images/People_Drinks.png" alt="People At a Eerning Team Party" />

      <DBHalfWidthContainer image={<StaticImage src="../../images/DesignBranding/Images/MashMedia.png" alt="Mash Media" />}>
       .
      </DBHalfWidthContainer>
      
      <DBHalfWidthContainer image={<StaticImage src="../../images/DesignBranding/Images/Thelondonslime.png" alt="Slimelogo" />}>
        .
      </DBHalfWidthContainer>

      <StaticImage src="../../images/DesignBranding/Images/1-toy-slime-science-photo-library.jpeg" alt="Slime in hand" />
     
    </div>
  );
};

export default DesignBranding;

  
