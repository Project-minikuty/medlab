import React from "react";
import "./Heading.css"
const Heading = (props) => {
  // const headingStyle = {
  //   marginTop: "70px", // Adjust the margin as needed
  //   paddingLeft: "200px", // Adjust the padding as needed
  //   color: "#498589", // Set the color to #498589
  //   fontSize: "36px", // Set the desired font size
  // };
  // const subheadingStyle = {
  //   paddingLeft: "205px", // Adjust the padding as needed
  //   color: "#498589", // Set the color to #498589
  //   fontWeight: "normal", 
  //   fontSize: "16px",// Set the font weight to normal
  // };
  const view = props.view || "desktop";
  const type = props.type || 0;
  const typeData ={
    0: ["User Profile","user profile"],
    1: ["Assignments","assignment data"],
    2: ["Submissions","submission data"],
    3: ["Submit Assignment","assignment submission"],
    4: ["Schedule Appointments","appointments"],
    5: ["View Progress","student progress"],
    6: ["Add New User","new user"],
  };
  
  return (
    <div className={view}>
      <h2 className={type===6?"p-heading":"heading"} >{typeData[type][0]}</h2>
      <h6 className={type===6?"p-subheading":"subheading2"} >Manage your {typeData[type][1]} here</h6>
    
    </div>
  );
};

export default Heading;
