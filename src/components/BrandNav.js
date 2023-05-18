import { Navbar, Container } from 'react-bootstrap';

function BrandNav() {
  const navBrandStyle = {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Lato, sans-serif'
  };

  return (
    <>
      <Navbar bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={navBrandStyle}>
            <img
              alt=""
              src={require("../images/MedlabLogo.png")}
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            MEDLAB
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandNav;
