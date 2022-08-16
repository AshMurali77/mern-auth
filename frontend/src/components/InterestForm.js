import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const InterestForm = (props) => {
  return (
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
        <Form>
          <fieldset>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="TextInput">Email Address</Form.Label>
              <Form.Control id="TextInput" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="Select">Account Type</Form.Label>
              <Form.Select id="Select">
                <option>Student</option>
                <option>Institution</option>
              </Form.Select>
            </Form.Group>
            <Modal.Footer>
              <Button type="submit" onClick={props.onHide}>
                Submit
              </Button>
            </Modal.Footer>
          </fieldset>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default InterestForm;
