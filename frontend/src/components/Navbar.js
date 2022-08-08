import { Container, Navbar, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
const Navigation = () => {
  const location = useLocation();
  return (
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
        {(location.pathname === "/signup" ||
          location.pathname === "/password-reset") && (
          <Link to="/login">
            <Button variant="outline-primary">Log In</Button>
          </Link>
        )}
        {location.pathname === "/login" && (
          <Link to="/signup">
            <Button variant="outline-primary">Create an Account</Button>
          </Link>
        )}
      </Container>
    </Navbar>
  );
};

export default Navigation;
