import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, FloatingLabel, Button, Form } from "react-bootstrap";
import { useLogin } from "../hooks/useLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
  };
  return (
    <Container style={{ maxWidth: 800 }}>
      <h2 className="text-center display-4 fw-bold pb-2">Sign In</h2>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email Address"
          className="mt-4 text-secondary"
        >
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Password"
          className="mt-4 text-secondary"
        >
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>
        <Link to="/password-reset" style={{ textDecoration: "none" }}>
          <p className="text-primary mt-2">I forgot my password </p>
        </Link>
        <Button
          disabled={isLoading}
          size="lg"
          className="mt-2 w-100"
          type="submit"
        >
          Sign In
        </Button>
      </Form>
      <p className="text-center text-muted pt-4">
        Don't have an account?{" "}
        <Link to="/signup" class="text-decoration-none text-primary">
          Create an Account
        </Link>
      </p>
      {error && <div className="text-center text-danger ">{error}</div>}
    </Container>
  );
};

export default Login;
