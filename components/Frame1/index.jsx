import React from "react";
import "./Frame1.css";

function Frame1(props) {
  const { title } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-1 screen">
        <div className="desktop-1">
          <div className="rectangle-1"></div>
          <a href="www.yahoo.com" target="_blank">
            <h1 className="title xxl">{title}</h1>
          </a>
          <img className="slice-1" src="/img/slice-1.svg" alt="Slice 1" />
        </div>
      </div>
    </div>
  );
}

export default Frame1;
