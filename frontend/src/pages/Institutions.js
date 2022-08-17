import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Image,
  Card,
  Ratio,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import InterestForm from "../components/InterestForm";
//Image imports
import building from "../assets/building.svg";
import recordAssessment from "../assets/record-assessment.svg";
import analytics from "../assets/analytics.svg";
import files from "../assets/files.svg";
import dataImpact from "../assets/data-impact.svg";

const Institutions = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <section id="intro" className="bg-blue mt-4">
        <Container>
          <Row className="justify-content-around align-items-center">
            <Col md={5} className="text-center ">
              <h2 className="display-4 ">Pioneer Record Handling</h2>
              <p className="lead">
                Educational record processing is a time and man-hour intensive
                burden on educational institutions. ALO shoulders the work
                around record processing by using distributed ledger technology
                to create an instantaneous record transfer process.
              </p>
              <Button
                size="lg"
                role="button"
                onClick={() => setModalShow(true)}
              >
                Speak With Our Team
              </Button>
            </Col>
            <Col md={5} className="d-none d-md-block">
              <Image fluid src={building} alt="school building image" />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="metrics">
        <Container>
          <Row className="mx-3">
            <Col
              md={3}
              className="text-center border-end border-secondary border-2"
            >
              <h3 className="display-5 fw-bold">100</h3>
              <p className="lead">Metric Description</p>
            </Col>
            <Col
              md={3}
              className="text-center border-end border-secondary border-2"
            >
              <h3 className="display-5 fw-bold">$5000</h3>
              <p className="lead">Metric Description</p>
            </Col>
            <Col
              md={3}
              className="text-center border-end border-secondary border-2"
            >
              <h3 className="display-5 fw-bold">12%</h3>
              <p className="lead">Metric Description</p>
            </Col>
            <Col md={3} className="text-center ">
              <h3 className="display-5 fw-bold">1200</h3>
              <p className="lead">Metric Description</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        id="uni_features_card"
        className="bg-light"
        style={{
          paddingTop: 10,
          paddingLeft: 0,
          paddingBottom: 60,
          paddingRight: 0,
        }}
      >
        <Container>
          <div className="text-center">
            <h1 className="display-4 text-dark fw-bold">
              Built For Your Needs
            </h1>
            <p className="lead">
              ALO's powerful platform allows you to garner the data-driven
              insights you need
            </p>
          </div>
          <Row gap={3}>
            <Col md={4} className="d-flex  align-items-stretch">
              <Card className="shadow ">
                <Ratio aspectRatio="4x3">
                  <Card.Img variant="top" src={recordAssessment} />
                </Ratio>
                <Card.Body className="text-center d-flex flex-column justify-content-around">
                  <Card.Title>Record processing</Card.Title>
                  <Card.Text>
                    ALO acts as a layered record processing
                    solution,automatically processing and downloading
                    educational records to your in house database rather than
                    upending your existing infrastructure.
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    onClick={() => setModalShow(true)}
                  >
                    Get Started Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="d-flex align-items-stretch">
              <Card className="shadow ">
                <Ratio aspectRatio="4x3">
                  <Card.Img variant="top" src={analytics} />
                </Ratio>
                <Card.Body className="text-center d-flex flex-column justify-content-around">
                  <Card.Title>Tracking and Analytics</Card.Title>
                  <Card.Text>
                    Gain critical data-driven insights regarding student and
                    course information through a robust analytics tool, allow
                    you to create custom charts and datasets that fit your
                    institution's needs.
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    onClick={() => setModalShow(true)}
                  >
                    Save Time
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="d-flex  align-items-stretch">
              <Card className="shadow ">
                <Ratio aspectRatio="4x3">
                  <Card.Img variant="top" src={files} />
                </Ratio>
                <Card.Body className="text-center d-flex flex-column justify-content-around">
                  <Card.Title>Transfer Efficiency</Card.Title>
                  <Card.Text>
                    Rather than engaging in a slow, manual process to assess
                    course transfer equivalency, ALO's algorithm automates the
                    transfer equivalency process, saving you time and
                    administrative headache.
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    onClick={() => setModalShow(true)}
                  >
                    The Whitepaper
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="data-impact" className="bg-blue ">
        <Container>
          <Row className="justify-content-around align-items-center">
            <Col md={5} className="d-none d-md-block">
              <Image fluid src={dataImpact} alt="data impact image" />
            </Col>
            <Col md={5} className="text-start ">
              <h2 className="display-6">Data-Driven Impact</h2>
              <p className="lead">
                ALO's use of blockchain technology ensures that you can see the
                impact of your education on students. Tracking and Analytics
                capabilities allow you to reap tangible benefits from ALO's
                student information. Learn more by clicking the link below or
                viewing the demo of ALO's platform.
              </p>
              <Link to="/function">
                <Button variant="outline-primary" size="lg" role="button">
                  How does it Work?
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="main-cta">
        <Container className="text-center">
          <h2 className="display-2">Want to Learn More?</h2>
          <p>
            Schedule a consultation with our team and learn more about what ALO
            can do for your institution
          </p>
          <Button
            variant="outline-primary"
            size="lg"
            onClick={() => setModalShow(true)}
          >
            Let's Connect
          </Button>
          <InterestForm show={modalShow} onHide={() => setModalShow(false)} />
        </Container>
      </section>
    </>
  );
};

export default Institutions;
