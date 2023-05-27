import React from "react";
import "./Heading.css"
const Heading = (props) => {
  const headingStyle = {
    marginTop: "70px", // Adjust the margin as needed
    paddingLeft: "200px", // Adjust the padding as needed
    color: "#498589", // Set the color to #498589
    fontSize: "36px", // Set the desired font size
  };
  const subheadingStyle = {
    paddingLeft: "205px", // Adjust the padding as needed
    color: "#498589", // Set the color to #498589
    fontWeight: "normal", 
    fontSize: "16px",// Set the font weight to normal
  };
  let type = props.type || "user";
  const typeData ={
    0: ["User","user profile"],
    1: ["Admin","admin privileges"],
    3: ["Parent","ward's data"],
    2: ["Doctor","patient data"]
  };
  
  return (
    <>
      <h2 className="heading" style={headingStyle}>Welcome {typeData[type][0]}</h2>
      <h6 className="subheading" style={subheadingStyle}>Manage your {typeData[type][1]} here</h6>
    
    </>
  );
};

export default Heading;
