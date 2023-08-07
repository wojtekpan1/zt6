import React from "react";
import "./Button3.css";

function Button3(props) {
  const { children, className } = props;

  return (
    <div className={`button-7 ${className || ""}`}>
      <div className="button-text-2 buttonlarge">{children}</div>
    </div>
  );
}

export default Button3;
