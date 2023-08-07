import React from "react";
import "./Button2.css";

function Button2(props) {
  const { src, className } = props;

  return (
    <div className={`button-5 ${className || ""}`}>
      <img className="button-icon" src={src} alt="Button Icon" />
    </div>
  );
}

export default Button2;
