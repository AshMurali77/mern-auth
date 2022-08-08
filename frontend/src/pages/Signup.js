import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  FloatingLabel,
  Button,
  Form,
} from "react-bootstrap";
import { useSignup } from "../hooks/useSignup";
const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [institution, setInstitution] = useState("");

  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    signup(firstname, lastname, email, password, institution);
  };
  return (
    <Container style={{ maxWidth: 800 }}>
      <h2 className="text-center display-4 fw-bold">Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mt-4">
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="text-secondary"
            >
              <Form.Control
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Last Name"
              className="text-secondary"
            >
              <Form.Control
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
            </FloatingLabel>
          </Col>
        </Row>
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
        <FloatingLabel
          controlId="floatingInput"
          label="Educational Institution Name"
          className="mt-4 text-secondary"
        >
          <Form.Control
            type="text"
            onChange={(e) => setInstitution(e.target.value)}
          />
        </FloatingLabel>
        <Button
          disabled={isLoading}
          className="mt-4 w-100 btn-lg"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
      <p class="text-center text-muted pt-3">
        Already have an account?{" "}
        <a
          href="localhost:3000/Login.js"
          class="text-decoration-none text-primary"
        >
          Log In
        </a>
      </p>
      {error && <div className="text-center text-danger ">{error}</div>}
    </Container>
  );
};

export default Signup;
