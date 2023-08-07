import React from "react";
import Button2 from "../Button2";
import "./SearchField.css";

function SearchField(props) {
  const { label, placeholder, className, button2Props } = props;

  return (
    <div className={`search-field ${className || ""}`}>
      <div className="label componentsbuttonlarge">{label}</div>
      <div className="input-group">
        <div className="input">
          <div className="placeholder inputdefault">{placeholder}</div>
          <Button2 src={button2Props.src} className={button2Props.className} />
        </div>
      </div>
    </div>
  );
}

export default SearchField;
