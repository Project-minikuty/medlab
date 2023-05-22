import React from "react";
import "./Parent-Bg.css"; // Import the CSS file for styling

const Bg = () => {
  return (
    <div className="parent-bg-container">
      <div 
        // width="750"
        alt="Description"
        className="bg-image"
      />
      <div className="bg-text">
        Welcome Parent
        </div>
        <div className="bg-sub-text">
        Manage your student data here
        </div>
    </div>
  );
};

export default Bg;
