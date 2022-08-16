import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Ratio,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import InterestForm from "../components/InterestForm";
//Image imports
import hero from "../assets/certification-two.svg";
import teacher from "../assets/Teacher.svg";
import graduate from "../assets/graduate.svg";
import teacherTwo from "../assets/Teacher-two.svg";
import student from "../assets/student.svg";
import graduation from "../assets/graduation.svg";

const Home = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <section className="bg-blue mt-4">
        <Container lg>
          <Row className="justify-content-around align-items-center">
            <Col md={6} className="text-center">
              <h1 className="display-2">Revolutionize Education Access</h1>
              <p>
                <span class="lead fw-bold text-primary">
                  Step away from administrative hassle
                </span>{" "}
                and explore a new platform for educational record management.
                With ALO, educational records are placed on a blockchain-based
                platform, easing students' stress and institutions' cost.{" "}
              </p>
              <Link to="/vision">
                <Button variant="primary" size="lg" role="button">
                  Our Vision
                </Button>
              </Link>
            </Col>
            <Col md={5} className="d-none d-md-block ">
              <Image fluid src={hero} alt="certification image" />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="before-alo">
        <Container lg>
          <Row className="justify-content-around align-items-center">
            <Col md={5} className="d-none d-md-block">
              <Image fluid src={teacher} alt="Teacher image" />
            </Col>
            <Col md={5} className="text-center tx-md-start">
              <h1>
                <div class="display-3">Today's Hassle</div>
              </h1>
              <p>
                <span class="lead fw-bold text-primary">
                  Thousands of hours and millions of dollars
                </span>
                <br />
                are spent every year circulating transcripts, uploading data,
                and starting the journey towards higher education. This
                administrative headache leaves students full of stress and
                institutions swamped with costs, all due to inefficiencies
                deterring educational access.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="after-alo">
        <Container lg>
          <Row className="justify-content-around align-items-center">
            <Col md={5} className="text-center tx-md-start">
              <h1>
                <div class="display-3">Enter ALO</div>
              </h1>
              <p>
                <span class="lead fw-bold text-primary">
                  The blockchain-based educational solution
                </span>{" "}
                focused on decreasing the hassle associated with record
                transfer. We place verified digital records on an easy-to-use
                platform so that educational record processing can become a more
                equitable and efficient process.
              </p>
            </Col>
            <Col md={5} className="d-none d-md-block">
              <Image fluid src={graduate} alt="Graduate image" />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="value_card" className="bg-blue">
        <Container>
          <h1>
            <div class="display-4 text-center text-dark">
              <span class="fw-bold">Breaking down barriers</span> around record
              upload, transfer, and access
            </div>
          </h1>
          <p class="text-center lead">
            Learn more about ALO's impact on you, whether you're a student or an
            educational institution
          </p>
          <Row gap={3}>
            <Col md={6}>
              <Card className="shadow ">
                <Ratio aspectRatio="4x3">
                  <Card.Img variant="top" src={student} />
                </Ratio>
                <Card.Body className="text-center">
                  <Card.Title>Students</Card.Title>
                  <Card.Text>
                    Improving the access to higher-educational opportunities
                  </Card.Text>
                  <Link to="/students">
                    <Button variant="outline-primary">Learn More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="shadow ">
                <Ratio aspectRatio="4x3">
                  <Card.Img variant="top" src={teacherTwo} />
                </Ratio>
                <Card.Body className="text-center">
                  <Card.Title>Institutions</Card.Title>
                  <Card.Text>
                    Reducing the administrative burden around record transfer
                  </Card.Text>
                  <Link to="/institutions">
                    <Button variant="outline-primary">Learn More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="main-cta">
        <Container className="text-center">
          <h2 className="display-2">Redefine The Future of Education</h2>
          <p>
            Join the ALO network and take the next step in creating a new system
            of educational record management
          </p>
          <Button
            variant="outline-primary"
            size="lg"
            onClick={() => setModalShow(true)}
          >
            Let's Go
          </Button>
          <InterestForm show={modalShow} onHide={() => setModalShow(false)} />
          <Container className=" d-none d-lg-block">
            <Image src={graduation} alt="graduation" />
          </Container>
        </Container>
      </section>
    </>
  );
};

export default Home;
