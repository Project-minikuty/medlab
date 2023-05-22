import React from "react";
import "./Doctor-Bg.css";

const Bg = () => {
  return (
    <div className="parent-bg-container">
      <div 
        // width="750"
        alt="Description"
        className="bg-image"
      />
      <div className="bg-text">
        Welcome Doctor
        </div>
        <div className="bg-sub-text">
        Manage your patient data here
        </div>
    </div>
  );
};

export default Bg;
