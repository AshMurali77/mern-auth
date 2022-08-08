import { Container, Navbar, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navigation = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const location = useLocation();

  const handleClick = () => {
    logout();
  };

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
            (location.pathname === "/password-reset" && (
              <Link to="/login">
                <Button variant="outline-primary">Log In</Button>
              </Link>
            )))}
      </Container>
    </Navbar>
  );
};

export default Navigation;
