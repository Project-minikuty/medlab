import React from "react";
import "./Heading.css"
const Heading = (props) => {
  const view = props.view || "default";
  const type = props.type || 0;
  const text = props.text ;
  const typeData ={
    0: ["User","user profile"],
    1: ["Admin","admin privileges"],
    3: ["Parent","ward's data"],
    2: ["Doctor","patient data"]
  };
  
  return (
    text?<div className="default">
      <h2 className="heading2"> {text} </h2>
    </div>:
    <div className={view}>
      <h2 className="heading" >Welcome {typeData[type][0]}</h2>
      <h6 className="subheading" >Manage your {typeData[type][1]} here</h6>
    
    </div>


  );
};

export default Heading;
