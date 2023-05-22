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
    margin: '5px',
    padding: '5px 10px',
    borderRadius: '4px',
    background: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

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
