import React from "react";
import "./Radio2.css";

function Radio2(props) {
  const { className } = props;

  return (
    <div className={`radio-2 ${className || ""}`}>
      <div className="border"></div>
    </div>
  );
}

export default Radio2;
