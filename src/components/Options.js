import React, { useEffect, useState } from 'react';

function ButtonGrid({ buttons }) {
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
      
        <br />
        <br />
        {buttons.map((button, index) => (
          <div key={index}>
            <button style={isDesktopView ? desktopButtonStyle : buttonStyle} onClick={() => handleButtonClick(index)}>
              <img src={button.img} height="15px" width="17px" alt={button.alt} />&nbsp; {button.text}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ButtonGrid;
