import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import logoNetflix from "../assets/netflix_logo.png";
import kidsIcon from "../assets/kids_icon.png";
import { BellFill, Search } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const MyNav = () => {
  return (
    <Navbar expand="lg" className=" container-fluid mx-0" bg="dark" variant="dark">
      <Container className="container-fluid">
        <Navbar.Brand href="#home">
          <img src={logoNetflix} alt="" style={{ width: "100px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/tvShows" className="nav-link">
              TV Shows
            </NavLink>
            <NavLink to="/movies" className="nav-link">
              Movies
            </NavLink>
            <NavLink to="/recent" className="nav-link">
              Recently Added
            </NavLink>
            <NavLink to="/list" className="nav-link">
              My List
            </NavLink>
          </Nav>
          <Nav className="d-flex align-items-center">
            <NavLink className="nav-link">
              <Search />
            </NavLink>
            <NavLink className="nav-link">KIDS</NavLink>
            <NavLink className="nav-link">
              <BellFill />
            </NavLink>
            <NavDropdown
              title={<img src={kidsIcon} alt="" style={{ width: "50px" }} />}
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
