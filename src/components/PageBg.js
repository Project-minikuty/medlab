import React from "react";
import "./Bg.css"; // Import the CSS file for styling
import Heading from "./PageHeading";


const Bg = (props) => {
  // const { bgText, bgSubText } = props;
  const type = props.type || 0;

  return (
    <div className="parent-bg-container">
      <div 
        // width="750"
        alt="Description"
        className="bg-image"
      />
      <Heading type={type} view="mobile"/>
    </div>
  );
};

export default Bg;
