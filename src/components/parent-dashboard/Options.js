import React from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';

function ButtonGrid() {
  const handleButtonClick = (buttonId) => {
    console.log(`Button ${buttonId} clicked`);
  };

  const buttonStyle = {
    borderColor: '#498589',
    color: '#498589',
    padding: '10px 30px',
    borderRadius: '25px',
    background: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '400px',
    marginBottom: '25px',
    marginLeft: '8px',
  };

  const desktopButtonStyle = {
    ...buttonStyle,
    marginLeft: '190px',
  };

  const isDesktopView = window.innerWidth > 768; // Adjust the breakpoint as per your design

  return (
    <div >
   <Heading />
    <SubHeading />
    <div>
      <button style={buttonStyle} onClick={() => handleButtonClick(1)}>Button 1</button>
    </div>
    <div>
    <button style={buttonStyle} onClick={() => handleButtonClick(2)}>Button 1</button>
  </div>
  <div>
    <button style={buttonStyle} onClick={() => handleButtonClick(3)}>Button 1</button>
  </div>
  <div>
    <button style={buttonStyle} onClick={() => handleButtonClick(4)}>Button 1</button>
  </div>
  <div>
    <button style={buttonStyle} onClick={() => handleButtonClick(5)}>Button 1</button>
  </div>
  </div>
    
  );
}

export default ButtonGrid;
