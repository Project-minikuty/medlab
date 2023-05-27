import React from 'react';
import Heading from '../Heading';


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
    width: '390px',
    marginBottom: '25px',
    marginLeft: '10px',
  };

  const desktopButtonStyle = {
    ...buttonStyle,
    marginLeft: '190px',
  };

  const isDesktopView = window.innerWidth > 768; // Adjust the breakpoint as per your design

  return (
    <>
    
    <div>
      <Heading type={2} />
      <br />
      <br />
      <br />
      <div>
        <button style={isDesktopView ? desktopButtonStyle : buttonStyle} onClick={() => handleButtonClick(1)}>
          <img src={require('../../images/parentOptions/option1.png')} height="15px" width="17px" alt="option1"></img>&nbsp; View List of Student
        </button>
      </div>
      <br />
      <div>
        <button style={isDesktopView ? desktopButtonStyle : buttonStyle} onClick={() => handleButtonClick(5)}><img src={require('../../images/parentOptions/option5.png')} height="17px" width="17px" alt="option1"></img>&nbsp;
          View Appointments
        </button>
      </div>
    </div>
    </>
  );
}

export default ButtonGrid;
