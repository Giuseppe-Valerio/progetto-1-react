import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { BiBell, BiSearch, BiUserCircle } from "react-icons/bi";

const TopBar = function () {
  return (
    <div>
      <Navbar expand="lg" className="bg-black text-white">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" style={{ height: "40px", width: "auto" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" href="#TV shows">
                TV shows
              </Nav.Link>
              <Nav.Link className="text-white" href="#Movies">
                Movies
              </Nav.Link>
              <Nav.Link className="text-white" href="#Recently Added">
                Recently Added
              </Nav.Link>
              <Nav.Link className="text-white" href="# My list">
                My list
              </Nav.Link>
            </Nav>
            <BiSearch className="icons me-3" />
            <div id="kids" className="fw-bold me-3">
              KIDS
            </div>
            <div>
              <BiBell className="icons me-3" />
              <BiUserCircle className="icons" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default TopBar;
