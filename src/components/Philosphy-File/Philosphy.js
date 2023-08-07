import React, { useEffect } from "react";
import FullWidthVideo from "./FullWidthVideo";
import "./../Philosphy-File/FullWidthVideo.css";
import "./../../styles/layout.css";
import "./../../styles/grid.css";
import PImageComponent from "./P-ImageComponent";
import HalfWidthContainer from "./HalfWidthContainer";
import "./../Philosphy-File/Philosphy.css";
import TitleAndLogos from "./TitleAndLogos";

import videoSrc from "./../../images/Videos/Philosify.mp4";
import thumbnailImage from "./../../images/Philosphy/PhPic.png";


import Image1 from "./../../images/Philosphy/Image1.png";
import Image2 from "./../../images/Philosphy/Image2.png";
import Image3 from "./../../images/Philosphy/shutterstock_1034738296.jpg";
import Image4 from "./../../images/Philosphy/Scottish-Event-Campus-during-COP26-November-2021-800x423-362d9c2b22.png";
import logo from "../../images/Philosphy/Logos/Logo.png";

import Logo1 from "./../../images/Philosphy/Logos/EventFirst.png";
import Divercity_Alliance from "./../../images/Philosphy/Logos/Divercity_Alliance.png";
import DIVERSE_SPEAKER_BUREAU from "./../../images/Philosphy/Logos/DIVERSE_SPEAKER_BUREAU.png";
import CO2Logo from "./../../images/Philosphy/Logos/CO2Logo.webp";
import ARBussstop from "./../../images/Philosphy/ARBussstop.gif";


const Philosphy = () => {
  const logosFutureGenerations = [{ src: Logo1, alt: "Logo 1" }];

  const logosDiversityEquityInclusion = [
    { src: Divercity_Alliance, alt: "Logo 1" },
    { src: DIVERSE_SPEAKER_BUREAU, alt: "Logo 2" },
  ];


  const logosSustainability = [
    { src: CO2Logo, alt: "Logo 1" },
    { src: DIVERSE_SPEAKER_BUREAU, alt: "Logo 2" },
  ];

  const logos = [{ src: Logo1, alt: "Logo 1" }];

  const videoObject = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Showreel from Birmingham Event",
    "description": "Highlights of the Birmingham event and history, evernyone is having fun at the B",
    "thumbnailUrl": thumbnailImage, 
    "uploadDate": "2023-08-05T08:00:00+08:00",
    "duration": "PT1M33S",
    "contentUrl": "/static/Philosify-bd65efb2724bcbd62159a84d2dddb6d2.mp4",  
    "embedUrl": "https://www.eightpr.co.uk/static/Philosify-bd65efb2724bcbd62159a84d2dddb6d2.mp4",  
    "publisher": {
      "@type": "Organization",
      "name": "EIGHT PR & Marketing",
      "logo": {
        "@type": "ImageObject",
        "url": logo,  
      },
    },
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": { "@type": "http://schema.org/WatchAction" },
      "userInteractionCount": "2347",
    },
  };
  
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(videoObject);
    document.getElementsByTagName('head')[0].appendChild(script);
  }, []);

  return (
    <div>
      <FullWidthVideo videoSrc={videoSrc} />
          <div className="philosphy-section"></div>
          

          <TitleAndLogos title="Future Generations" logos={logosFutureGenerations} />{" "}

      {/* Future Generations */}
      <div className="half-width-section">
        <PImageComponent src={Image1} alt="Image Description" />
        <HalfWidthContainer>
          At EIGHT we believe in the future of the events industry. Our research
          points to a new event consumer and a new event organiser, backed by
          super brands with a conscious. For us, this is the real force behind
          moves towards better sustainability, inclusion, accessibility, and
          wellbeing outcomes. Its why we support Event First Steps and the work
          they are doing to raise the voice of this generation across these so
          urgent subjects.
        </HalfWidthContainer>
      </div>
          

      <TitleAndLogos title="Accessibility & Inclusion" logos={logos} />{" "}


      {/* Accessibility & Inclusion */}
      <div className="half-width-section">
        <PImageComponent src={Image2} alt="Image Description" />
        <HalfWidthContainer>
          It’s part of EIGHT’s core values that the event industry be as
          inclusive as possible. Our agency has been at the forefront of both
          ensuring that events are produced to cater for those who would not
          normally attend events – be they disabled from a motor or sensory
          reason, or that they just don’t like event environments – and from a
          societal point of view.
          <br />
          <br />
          At the same time, we believe that one of the key structural issues
          that faces then industry is its ability to attract talent from across
          society. Be they from marginalised, disenfranchised or minority
          communities. Again, we have worked with our clients to bring these
          issues to the industry, and to address them proactively and
          aggressively.
          <br />
          <br />
          Note: On a very basic level, the type face used on the website is
          designed to communicate better to those with dyslexia
        </HalfWidthContainer>
      </div>
          

      <TitleAndLogos title="Diversity, Equity & Inclusion" logos={logosDiversityEquityInclusion} />{" "}


      {/* Accessibility & Inclusion */}
      <div className="half-width-section">
        <PImageComponent src={Image3} alt="Image Description" />
        <HalfWidthContainer>
          We choose to separate accessibility led inclusion with equity and
          diversity within the industry. They do mix however and speak to a more
          ethical approach to meetings and events. <br /><br />Through our work as opinion
          leaders within the industry, and as advisors to events businesses, we
          advocate for more diversity, forging partnerships with smart
          businesses and movements that represent these believes. It’s something
          that is intrinsic across our content programmes, as we look to present
          a more representative view of the industry with more diversity of
          opinion.
        </HalfWidthContainer>
      </div>

      <TitleAndLogos title="Sustainability" logos={logosSustainability} />{" "}


           {/* Sustainability */}
      <div className="half-width-section">
        <PImageComponent src={Image4} alt="Scotish Event Campus COP26" />
        <HalfWidthContainer>
        Events have, for too long, been disregarded as a battleground for sustainable business. Now we need to show that, not only can they be a powerful communication resource for showcasing businesses sustainability, but that they can be sustainable in their own right. <br /><br />
 
 EIGHT clients have always been ahead of the game, and we have been delighted to be involved in some of the most influential and industry defining campaigns around sustainability. These include the multi-award winning Beyond Food Reports, by Lime Venue Portfolio.<br /><br />
  
 We were also one of the first followers, fans, and supporters of isla, the event industry’s own sustainability movement. We are a strategic advisor to The Rubbish Project a business that looks to create beauty from waste and install circular waste models into businesses.<br /><br />
  
 At EIGHT PR & Marketing, we’re delighted to share that all of our business activities are offset through Carbon Neutral Britain, that we endeavour to use the most sustainable travel option possible and that we work with clients that share these same values towards more sustainable business and events.
 
        </HalfWidthContainer>
      </div>

      <TitleAndLogos title="The Virtual Experience Economy" logos={logos} />{" "}


                 {/* The Virtual Experience Economy */}
      <div className="half-width-section">
        <PImageComponent src={ARBussstop} alt="AR/VR pictuer of a bus stop" />
        <HalfWidthContainer>
        We are, right now, in the age of the Virtual Experience Economy. A phrase initially coined by our partners at trendwatching.com, but which also provided a natural evolution of The Experience Economy, first explored by Pine & Gilmore in their same named book first published in 1999. <br /><br />
 
EIGHT PR & Marketing first bought the experience economy into the global event industry in 2018, predicting that the age of The Experience Economy (2009 -2019) had evolved into a 10-year trend. With it, we predicted a more empathetic and purpose led approach to experience, which laid out brand’s values to their audiences using events and technology in the ultimate hybrid.<br /><br />
 
This prediction has come true, with the increase in augmented experiences and the first forays of the event industry into the Metaverse.<br /><br />
 
We remain key influencers in this era of experience. In short, you heard it here first.

 
        </HalfWidthContainer>
      </div>
          













    </div>
  );
};

export default Philosphy;
