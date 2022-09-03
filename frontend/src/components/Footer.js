import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="text-center text-lg-start bg-blue text-muted">
      <Container className="text-center mt-5 text-md-start">
        <Row className="mt-3">
          <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              ALO Blockchain Solutions
            </h6>
          </Col>
          <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Company</h6>
            <Link to="/vision" className="text-reset text-decoration-none">
              <p>Vision</p>
            </Link>
            <Link to="/students" className="text-reset text-decoration-none">
              <p>Students</p>
            </Link>
            <Link
              to="/institutions"
              className="text-reset text-decoration-none"
            >
              <p>Institutions</p>
            </Link>
          </Col>

          <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Resources</h6>
            <Link to="/function" className="text-reset">
              <p>Our Whitepaper</p>
            </Link>
            <Link to="/function" className="text-reset">
              <p>Blockchain Introduction</p>
            </Link>
            <Link to="/function" className="text-reset">
              <p>Why Blockchain</p>
            </Link>
          </Col>

          <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">About</h6>
            <p className="text-reset">Terms & Conditions</p>
            <p className="text-reset text-decoration-none">Privacy Policy</p>
          </Col>
        </Row>

        <div className="text-center p-4">
          © 2022 Copyright:
          <Link to="/" className="text-reset fw-bold">
            aloblockchain.com
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
