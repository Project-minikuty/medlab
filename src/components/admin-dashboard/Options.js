import React, { useEffect, useState } from 'react';
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
    width: '390px',
    marginBottom: '25px',
    marginLeft: '10px',
    marginRight: 'auto',
  };

  const desktopButtonStyle = {
    ...buttonStyle,
    marginLeft: '190px',
    marginRight: 'auto',
  };

  const [isDesktopView, setIsDesktopView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopView(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflowX = isDesktopView ? 'auto' : 'hidden';
  }, [isDesktopView]);

  return (
    <>
      <div>
        <Heading />
        <SubHeading />
        <br />
        <br />
        <div>
          <button style={isDesktopView ? desktopButtonStyle : buttonStyle} onClick={() => handleButtonClick(1)}>
            <img src={require('../../images/parentOptions/option1.png')} height="15px" width="17px" alt="option1" />&nbsp; View List of Students
          </button>
        </div>
        <div>
          <button style={isDesktopView ? desktopButtonStyle : buttonStyle} onClick={() => handleButtonClick(1)}>
            <img src={require('../../images/parentOptions/option1.png')} height="15px" width="17px" alt="option1" />&nbsp; View List of Doctors
          </button>
        </div>
        <div>
          <button style={isDesktopView ? desktopButtonStyle : buttonStyle} onClick={() => handleButtonClick(5)}>
            <img src={require('../../images/adminOptions/option3.png')} height="19px" width="19px" alt="option1" />&nbsp; Add New User
          </button>
        </div>
        <div>
          <button style={isDesktopView ? desktopButtonStyle : buttonStyle} onClick={() => handleButtonClick(5)}>
            <img src={require('../../images/adminOptions/option4.png')} height="17px" width="17px" alt="option1" />&nbsp; Delete User
          </button>
        </div>
      </div>
    </>
  );
}

export default ButtonGrid;
