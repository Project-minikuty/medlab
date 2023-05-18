import React from "react";
import "./TwoGrids.css";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import Login from "./Login";
import Bg from "./Bg";

const TwoGrids = () => {
  return (
    <div className="container">
      <div className="grid-item-no-margin">
        <Heading />
        <SubHeading />
        <Login />
      </div>
      <div className="grid-item">
        <Bg />
      </div>
    </div>
  );
};

export default TwoGrids;
