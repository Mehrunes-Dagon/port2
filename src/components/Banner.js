import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm William Winberg.</h1>
      <h3>
        I'm a software developer. From reactive UIs to complex data structures to relational database models,
        I love building and learning new things... Start scrolling to learn more about me.
      </h3>
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
