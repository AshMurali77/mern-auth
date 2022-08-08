import { Container, FloatingLabel, Button, Form } from "react-bootstrap";

const PasswordReset = () => {
  return (
    <Container style={{ maxWidth: 800 }}>
      <h2 className="text-center display-4 fw-bold pb-4">Password Reset</h2>
      <p>To recover your password, please enter your registered email.</p>
      <Form>
        <FloatingLabel
          controlId="floatingInput"
          label="Email Address"
          className="mt-2 text-secondary"
        >
          <Form.Control type="email" />
        </FloatingLabel>

        <Button size="lg" className="mt-4 w-100" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default PasswordReset;
