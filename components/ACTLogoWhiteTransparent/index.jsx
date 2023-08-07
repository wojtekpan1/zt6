import React from "react";
import "./ACTLogoWhiteTransparent.css";

function ACTLogoWhiteTransparent(props) {
  const { src } = props;

  return <div className="act-logo-white-transparent" style={{ backgroundImage: `url(${src})` }}></div>;
}

export default ACTLogoWhiteTransparent;
