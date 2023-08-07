import React from "react";
import Radio5 from "../Radio5";
import "./Radio6.css";

function Radio6(props) {
  const { labelpositionStart, className, radio5Props } = props;

  return (
    <div className={`radio-13 ${className || ""}`}>
      <div className="label-position-start-6 inputdefault">{labelpositionStart}</div>
      <Radio5 className={radio5Props.className} />
    </div>
  );
}

export default Radio6;
