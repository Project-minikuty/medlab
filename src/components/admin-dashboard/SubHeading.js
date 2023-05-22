import React from "react";

const SubHeading = () => {
  const headingStyle = {
    paddingLeft: "205px", // Adjust the padding as needed
    color: "#498589", // Set the color to #498589
    fontWeight: "normal", 
    fontSize: "16px",// Set the font weight to normal
  };

  return (
    <>
      <h6 className="subheading" style={headingStyle}>Manage your admin privileges here</h6>
    </>
  );
};

export default SubHeading;
