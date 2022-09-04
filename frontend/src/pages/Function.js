import { useState } from "react";
import { Button, Container, Ratio, Row, Col, Image } from "react-bootstrap";
import InterestForm from "../components/InterestForm";
import logo from "../assets/sol-logo.png";
import { Link } from "react-router-dom";
const Vision = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <section id="intro" className="bg-blue mt-4">
        <Container className="text-center">
          <h2 className="display-3 fw-bold">Blockchain in Education</h2>
          <p className="lead">
            Placing educational records on a decentralized platform promotes a
            more efficient and transparent data transfer process.
          </p>
          <Link to="/coming-soon">
            <Button size="lg">Our Whitepaper</Button>
          </Link>
        </Container>
      </section>

      <section id="blockchain">
        <Container className="text-center">
          <h2 className="display-2">But What Is Blockchain?</h2>
          <p className="lead">
            Watch the video below to demystify the underlying technology
            powering ALO
          </p>
          <Ratio
            aspectRatio="16x9"
            style={{ maxWidth: 800, maxHeight: 400 }}
            className="mx-auto"
          >
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/SSo_EIwHSd4"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </Ratio>
        </Container>
      </section>

      <section id="blockchain" className="bg-blue">
        <Container className="text-center">
          <Row className="align-items-center">
            <Col md={7}>
              <h2 className="display-4">Efficient, Reliable, Secure</h2>
              <p className="lead">
                With a high throughput and low transaction cost, the Solana
                blockchain is our blockchain of choice to ensure reliable and
                efficient record transfer.
              </p>

              <a href="https://solana.com/">
                <Button variant="outline-primary" size="lg">
                  Learn More
                </Button>
              </a>
            </Col>
            <Col>
              <Ratio
                aspectRatio="4x3"
                style={{ maxWidth: 400, maxHeight: 400 }}
                className="mx-auto"
              >
                <Image fluid src={logo} alt="solana logo" />
              </Ratio>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="main-cta">
        <Container className="text-center">
          <h2 className="display-2">Eager to learn more?</h2>
          <p className="lead">
            Our Whitepaper will be published soon, detailing technical
            specifications and the link between our mission and blockchain
            technology.
          </p>
          <Button
            variant="outline-primary"
            size="lg"
            onClick={() => setModalShow(true)}
          >
            Join Us Today
          </Button>
          <InterestForm show={modalShow} onHide={() => setModalShow(false)} />
        </Container>
      </section>
    </>
  );
};

export default Vision;
