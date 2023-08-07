import React from "react";
import Radio2 from "../Radio2";
import "./Radio.css";

function Radio(props) {
  const { labelpositionStart, className, radio2Props } = props;

  return (
    <div className={`radio ${className || ""}`}>
      <div className="label-position-start inputdefault">{labelpositionStart}</div>
      <Radio2 className={radio2Props.className} />
    </div>
  );
}

export default Radio;
