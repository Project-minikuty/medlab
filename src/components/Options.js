import React, { useEffect, useState } from 'react';

function ButtonGrid({ buttons, isHighlighted }) {
  const handleButtonClick = (buttonId) => {
    console.log(`Button ${buttonId} clicked`);
  };

  const buttonStyle = {
    borderColor: '#498589',
    color: isHighlighted ? '#F5FDFB':'#498589',
    padding: isHighlighted ? '40px 50px' : '10px 30px',
    borderRadius: '25px',
    background: isHighlighted ? '#10C99D' : 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: isHighlighted ? '160px' : '390px',
    marginBottom: '25px',
    marginLeft: '200px',
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

    const handleOrientationChange = () => {
      setIsDesktopView(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  const renderButtons = () => {
    if (isDesktopView && isHighlighted) {
      const rows = [];
      for (let i = 0; i < buttons.length; i += 2) {
        const button1 = buttons[i];
        const button2 = buttons[i + 1];
        rows.push(
          <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
            <button style={desktopButtonStyle} onClick={() => handleButtonClick(i)}>
              <img src={button1.img} height="15px" width="17px" alt={button1.alt} />&nbsp; {button1.text}
            </button>
            {button2 && (
              <button style={desktopButtonStyle} onClick={() => handleButtonClick(i + 1)}>
                <img src={button2.img} height="15px" width="17px" alt={button2.alt} />&nbsp; {button2.text}
              </button>
            )}
          </div>
        );
      }
      return rows;
    } else {
      return buttons.map((button, index) => (
        <div key={index}>
          <button style={buttonStyle} onClick={() => handleButtonClick(index)}>
            <img src={button.img} height="15px" width="17px" alt={button.alt} />&nbsp; {button.text}
          </button>
        </div>
      ));
    }
  };
  

  return (
    <>
      <div>
        <br />
        <br />
        {renderButtons()}
      </div>
    </>
  );
}

export default ButtonGrid;
