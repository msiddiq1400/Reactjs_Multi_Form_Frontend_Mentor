import React from "react";
import "./sidebar.scss";

const SideBarContent = ({ step, topText, bottomText }) => {
  return (
    <div className="main">
      <div className="icon">{step}</div>
      <div className="texts">
        <div className="top-text">{topText}</div>
        <div className="bottom-text">{bottomText}</div>
      </div>
    </div>
  );
};

export default SideBarContent;
