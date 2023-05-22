import React from 'react';
import './Brandnav.css';

function BrandNav2(props) {
  const navBrandStyle = {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Lato, sans-serif'
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logout clicked');
  };

  const buttonStyle = {
    borderColor: '#498589',
    color: '#498589',
    fontWeight: 'bold',
    // Remove the hovering effect
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#498589',
      borderColor: '#498589',
    }
  };

  return (
    <>
      <nav className='navbar navbar-light bg-light'>
        <div className='container'>
          <a href='#home' className='navbar-brand' style={navBrandStyle}>
            <img
              alt='logo'
              src={require("../images/MedlabLogo.png")}
              width='35'
              height='25'
              className='d-inline-block align-top'
            />{' '}
            <span>MEDLAB</span>
          </a>
          {props.logout? <button className='btn btn-outline' onClick={handleLogout} style={buttonStyle}>
            Logout
          </button>:<></>}
        </div>
      </nav>
    </>
  );
}

export default BrandNav2;
