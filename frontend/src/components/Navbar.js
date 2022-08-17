import { useState } from "react";
import { Container, Navbar, Button, Nav, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
/* import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext"; */
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import InterestForm from "../components/InterestForm";

const Navigation = () => {
  /*   const { logout } = useLogout(); */
  /*   const { user } = useAuthContext();
  const location = useLocation(); */
  const [modalShow, setModalShow] = useState(false);

  /*   const handleClick = () => {
    logout();
  }; */

  return (
    <>
      {/*       {(location.pathname === "/login" ||
        location.pathname === "/signup" ||
        location.pathname === "/password-reset") && (
        <Navbar
          bg="light"
          expand="lg"
          variant="light"
          fixed="top"
          className="border-bottom border-grey"
        >
          <Container>
            <Navbar.Brand className="fs-3" href="/">
              ALO
            </Navbar.Brand>

            {user && (
              <>
                <span>{user.email}</span>
                <Button variant="outline-primary " onClick={handleClick}>
                  Log Out
                </Button>
              </>
            )}
            {!user && location.pathname === "/login" && (
              <Link to="/signup">
                <Button variant="outline-primary">Create an Account</Button>
              </Link>
            )}
            {!user &&
              (location.pathname === "/signup" ||
                location.pathname === "/password-reset") && (
                <Link to="/login">
                  <Button variant="outline-primary">Log In</Button>
                </Link>
              )}
          </Container>
        </Navbar>
      )} */}
      <Navbar
        bg="blue"
        expand="lg"
        variant="light"
        fixed="top"
        className="border-primary main-nav"
      >
        <Container>
          <Navbar.Brand className="fs-3" href="/">
            ALO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />

          <NavbarCollapse id="navbar-nav" className="justify-content-around ">
            <Nav>
              <Nav.Link>
                <Link
                  to="/vision"
                  className="text-decoration-none  text-secondary nav-text"
                >
                  Vision
                </Link>
              </Nav.Link>
              <Nav.Link className="text-secondary nav-text">
                <Link
                  to="/function"
                  className="text-decoration-none  text-secondary nav-text"
                >
                  How it Works
                </Link>
              </Nav.Link>
              <NavDropdown
                title={
                  <span className="text-secondary nav-text">Education</span>
                }
                id="nav-dropdown"
              >
                <NavDropdown.Item className="bg-blue text-secondary nav-text">
                  <Link
                    to="/students"
                    className="text-decoration-none  text-secondary nav-text"
                  >
                    Students
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="text-secondary nav-text">
                  <Link
                    to="/institutions"
                    className="text-decoration-none  text-secondary nav-text"
                  >
                    Institutions
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </NavbarCollapse>

          <Button
            id="nav-signup"
            variant="outline-secondary"
            onClick={() => setModalShow(true)}
          >
            Sign Up
          </Button>
          <InterestForm show={modalShow} onHide={() => setModalShow(false)} />
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
