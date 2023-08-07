import React from "react";
import Heading from "../Heading";
import "./BannerVariant3.css";

function BannerVariant3(props) {
  const { actLogoWhiteSvg, headingProps } = props;

  return (
    <div className="banner-variant3">
      <div className="act-logo-white-svg" style={{ backgroundImage: `url(${actLogoWhiteSvg})` }}></div>
      <Heading>{headingProps.children}</Heading>
    </div>
  );
}

export default BannerVariant3;
