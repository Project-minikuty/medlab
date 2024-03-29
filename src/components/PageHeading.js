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
    3: ["Choose Option","appointment data"],
    4: ["Schedule Appointments","appointments"],
    5: ["View Progress","student progress"],
    6: ["Add New User","new user"],
    7: ["View Student List","student data"],
    8: ["View Doctor List","doctor data"],
    9: ["View Prescriptions","prescription data"],
    10:  ["Create Assignment", "assignment data"],
    11:  ["Appointment List", "daily appointment data"],
    12: ["View Assignments", "assignment data"],
    13: ["About MEDLAB", "child data"],
    14: ["View Reports", "report data"],
    15: ["Edit User Data", "users data"],
    
  };
  
  return (
    <div className={view}>
      <h2 className={type===6?"p-heading":"heading"} >{typeData[type][0]}</h2>
      <h6 className={type===6?"p-subheading":"subheading2"} >Manage your {typeData[type][1]} here</h6>
    
    </div>
  );
};

export default Heading;
