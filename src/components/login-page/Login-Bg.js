import React from "react";
import "./Login-Bg.css"; // Import the CSS file for styling

const Bg = () => {
  return (
    <div className="bg-container">
      <div 
        // width="750"
        alt="Description"
        className="bg-image"
      />
      <div className="bg-text">
        Welcome to MEDLAB
        </div>
        <div className="bg-sub-text">
        Please log in to continue
        </div>
    </div>
  );
};

export default Bg;
