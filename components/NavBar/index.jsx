import React from "react";
import Frame321 from "../Frame321";
import "./NavBar.css";

function NavBar(props) {
  const { className, frame321Props } = props;

  return (
    <div className={`nav-bar ${className || ""}`}>
      <div className="navbar">
        <a href="www.yahoo.com" target="_blank">
          <div className="navbar-link-dashboard inter-bold-electric-violet-24px">Symptoms Capture</div>
        </a>
        <div className="navbar-link-jobs inter-bold-black-24px">Conditions List</div>
        <p className="navbar-link-reports inter-bold-black-24px">CT SDK&nbsp;&nbsp;&nbsp;&nbsp;Provide Feedback</p>
        <div className="navbar-link-facilities inter-bold-black-24px">About ACT</div>
      </div>
      <Frame321 image={frame321Props.image} className={frame321Props.className} />
    </div>
  );
}

export default NavBar;
