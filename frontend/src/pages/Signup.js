import { useState } from "react";
import { Link } from "react-router-dom";
import student from "../assets/certification.svg";
import building from "../assets/building.svg";
import {
  Container,
  Row,
  Col,
  FloatingLabel,
  Button,
  Form,
  Card,
} from "react-bootstrap";
import { useSignup } from "../hooks/useSignup";
const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [institution, setInstitution] = useState("");
  const [accounttype, setAccountType] = useState("");

  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    signup(firstname, lastname, email, password, institution);
  };
  return (
    <Container style={{ maxWidth: 800 }}>
      <h2 className="text-center display-4 fw-bold pb-4">Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="g-3">
          <Col>
            <Card
              className="shadow border-grey border-1"
              style={{ maxHeight: 300 }}
            >
              <Card.Body className="text-center">
                <Card.Img
                  variant="top"
                  src={student}
                  className=" mt-5"
                  style={{ width: 128, height: 128 }}
                />
                <Card.Title className="display-5 pb-5 pt-1">Student</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="shadow border-grey border-1"
              style={{ height: 300 }}
              onClick={() => {
                setAccountType("Institution");
                console.log(accounttype);
              }}
            >
              <Card.Body className="text-center">
                <Card.Img
                  variant="top"
                  src={building}
                  className=" mt-5"
                  style={{ width: 128, height: 128 }}
                />
                <Card.Text className="display-5 pb-5 pt-1">
                  Institution
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="mt-5"></div>
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
        <Link to="/login" class="text-decoration-none text-primary">
          Sign In
        </Link>
      </p>
      {error && <div className="text-center text-danger ">{error}</div>}
    </Container>
  );
};

export default Signup;
