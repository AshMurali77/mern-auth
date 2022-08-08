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
      <h2 className="text-center display-4 fw-bold pb-4">Sign In</h2>
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
        <Button
          disabled={isLoading}
          className="mt-4 w-100 btn-lg"
          type="submit"
        >
          Sign In
        </Button>
      </Form>
      <p class="text-center text-muted pt-3">
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
