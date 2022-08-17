import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const InterestForm = (props) => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const signup = async (email, type) => {
    const response = await fetch("/api/contacts/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        type,
      }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setIsLoading(false);
      setError(false);
      setSuccess(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    signup(email, type);
  };

  return (
    <>
      {success ? (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title" className="text-success">
              Signup Success!
            </Modal.Title>
          </Modal.Header>
        </Modal>
      ) : (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Sign Up for Early Access to ALO
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <fieldset>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="TextInput">Email Address</Form.Label>
                  <Form.Control
                    id="TextInput"
                    placeholder="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="Select">Account Type</Form.Label>
                  <Form.Select
                    id="Select"
                    type="type"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="student">Student</option>
                    <option value="institution">Institution</option>
                  </Form.Select>
                </Form.Group>
                <Modal.Footer>
                  {error && (
                    <div className="text-center text-danger ">{error}</div>
                  )}

                  <Button disabled={isLoading} type="submit">
                    Submit
                  </Button>
                </Modal.Footer>
              </fieldset>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default InterestForm;
