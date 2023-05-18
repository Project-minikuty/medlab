import React from "react";
import "./Bg.css"; // Import the CSS file for styling

const Bg = () => {
  return (
    <div className="bg-container">
      <img
        src={require("../images/Design.png")}
        width="750"
        height="650"
        alt="Description of the image"
        className="bg-image"
      />
    </div>
  );
};

export default Bg;
