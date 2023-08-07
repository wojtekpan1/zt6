import React from "react";
import "./Heading.css";

function Heading(props) {
  const { children } = props;

  return (
    <div className="heading">
      <h1 className="heading-1 headingh3">{children}</h1>
    </div>
  );
}

export default Heading;
