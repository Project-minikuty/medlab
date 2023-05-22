import React from "react";
import "./Heading.css"
const Heading = () => {
  const headingStyle = {
    marginTop: "130px", // Adjust the margin as needed
    paddingLeft: "200px", // Adjust the padding as needed
    color: "#498589", // Set the color to #498589
    fontSize: "36px", // Set the desired font size
  };

  return (
    <>
      <h2 className="heading" style={headingStyle}>Welcome Doctor</h2>
    </>
  );
};

export default Heading;
