import React from "react";
import "./Bg.css"; // Import the CSS file for styling

const Bg = (props) => {
  const { bgText, bgSubText } = props;

  return (
    <div className="parent-bg-container">
      <div 
        // width="750"
        alt="Description"
        className="bg-image"
      />
      <div className="bg-text">
        {bgText}
      </div>
      <div className="bg-sub-text">
        {bgSubText}
      </div>
    </div>
  );
};

export default Bg;
