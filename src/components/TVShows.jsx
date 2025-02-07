import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const TvShows = function () {
  return (
    <div>
      <Navbar expand="lg" className="bg-black text-white">
        <Container fluid>
          <Navbar.Brand className="text-white" href="#home">
            TV Shows
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title={<span className="text-white">Geners</span>} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default TvShows;
