import React from "react";
import "./Button.css";

function Button(props) {
  const { children, className } = props;

  return (
    <article className={`button-4 ${className || ""}`}>
      <div className="button-text buttondefault">{children}</div>
    </article>
  );
}

export default Button;
