import { Navbar, Container } from 'react-bootstrap';
import "./Brandnav.css"
function BrandNav() {
  const navBrandStyle = {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Lato, sans-serif'
  };

  return (
    <>
      <Navbar bg="light" variant="dark" className='Navbar'>
        <Container>
          <Navbar.Brand href="" style={navBrandStyle}>
            <img
              alt=""
              src={require("../images/MedlabLogo.png")}
              width="35"
              height="25"
              className="d-inline-block align-top"
            />{' '}
            <span>MEDLAB</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandNav;
