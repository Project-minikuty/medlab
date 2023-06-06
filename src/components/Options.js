import React, { useEffect, useState } from 'react';
import './Option.css'

function ButtonGrid({ buttons, isHighlighted }) {
  const handleButtonClick = (buttonId) => {
    console.log(`Button ${buttonId} clicked`);
    const button = buttons[buttonId];
    if (button && button.navigateTo) {
      window.location.href = button.navigateTo;
    }
  };




  const [isDesktopView, setIsDesktopView] = useState(false);

  useEffect(() => {
    const newLocal = window.innerWidth > 768;
    console.log(newLocal);
    const handleResize = () => {
      setIsDesktopView(newLocal);
    }
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
            <button className={`buttonStyle ${isHighlighted ? 'highlighted' : ''}`}  onClick={() => handleButtonClick(i)}>
              <img src={button1.img} height="15px" width="17px" alt={button1.alt} />&nbsp; {button1.text}
            </button>
            {button2 && (
              <button className={`buttonStyle ${isHighlighted ? 'highlighted' : ''}`}  onClick={() => handleButtonClick(i + 1)}>
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
          <button className={`buttonStyle ${isHighlighted ? 'highlighted' : ''}`} onClick={() => handleButtonClick(index)}>
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
