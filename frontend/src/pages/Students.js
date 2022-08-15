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

//Image imports
import relaxation from "../assets/relaxation.svg";
import transfer from "../assets/transfer.svg";
import summerTransfer from "../assets/summer-transfer.svg";
import prospectiveStudent from "../assets/prospective-student.svg";
import signIn from "../assets/sign-in.svg";
import dataUpload from "../assets/data-upload.svg";
import fileTransfer from "../assets/file-transfer.svg";
import relaxationTwo from "../assets/relaxation-two.svg";
import studentCTA from "../assets/student-cta.svg";
const Students = () => {
  return (
    <>
      <section id="intro" className="bg-blue mt-4">
        <Container>
          <Row className="justify-content-around align-items-center">
            <Col md={5} className="text-center ">
              <h2 className="display-4 ">
                Removing the obstacles surrounding educational data
              </h2>
              <p>
                <span className="lead" />
                Spend less time stressing over files and more time enjoying your
                college experience
              </p>
              <Link to="/signup">
                <Button variant="outline-primary" size="lg" role="button">
                  Sign Up Free
                </Button>
              </Link>
            </Col>
            <Col md={5} className="d-none d-md-block">
              <Image fluid src={relaxation} alt="relaxation image" />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="value_card" className="bg-light">
        <Container>
          <div className="text-center">
            <h1 className="display-4 text-dark fw-bold">
              No Matter Who You Are
            </h1>
            <p className="lead">
              ALO can save you time and money in the document management process
            </p>
          </div>
          <Row gap={3}>
            <Col md={4} className="d-flex  align-items-stretch">
              <Card className="shadow ">
                <Ratio aspectRatio="4x3">
                  <Card.Img variant="top" src={transfer} />
                </Ratio>
                <Card.Body className="text-center d-flex flex-column justify-content-around">
                  <Card.Title>Incoming Students</Card.Title>
                  <Card.Text>
                    Instead of paying out of pocket for each record from your
                    high school, ALO puts the records in your hands, letting you
                    send them to your dream schools at almost no cost.{" "}
                  </Card.Text>
                  <Link to="/signup">
                    <Button variant="outline-primary">Get Started Now</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="d-flex align-items-stretch">
              <Card className="shadow ">
                <Ratio aspectRatio="4x3">
                  <Card.Img variant="top" src={summerTransfer} />
                </Ratio>
                <Card.Body className="text-center d-flex flex-column justify-content-around">
                  <Card.Title>Transfer Students</Card.Title>
                  <Card.Text>
                    Rather than administrative barriers blocking your transfer
                    process, you can easily search for transfer institutions and
                    send your records with a few simple taps.
                  </Card.Text>
                  <Link to="/signup">
                    <Button variant="outline-primary">Save Time</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="d-flex  align-items-stretch">
              <Card className="shadow ">
                <Ratio aspectRatio="4x3">
                  <Card.Img variant="top" src={prospectiveStudent} />
                </Ratio>
                <Card.Body className="text-center d-flex flex-column justify-content-around">
                  <Card.Title>Part-Time Students</Card.Title>
                  <Card.Text>
                    Whether you're taking summer classes to fill credit
                    requirements or attending college at night, ALO can help you
                    manage your records, even across institutions.{" "}
                  </Card.Text>
                  <Link to="/signup">
                    <Button variant="outline-primary">Sign Up Free</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="student-process-flow" className="bg-blue">
        <Container className="w-75">
          <Container lg className="border-bottom border-secondary border-1">
            <Row className="justify-content-around align-items-center">
              <Col md={5} className="text-center tx-md-start">
                <h1 className="display-4 fst-italic fw-bold">Step 1</h1>
                <p className="lead  fw-bold text-primary">
                  Sign Up for ALO and Set up your account
                </p>
              </Col>
              <Col md={5} className="text-start d-none d-md-block">
                <Image fluid src={signIn} alt="sign-in image" />
              </Col>
            </Row>
          </Container>
          <Container
            lg
            className="border-bottom border-secondary border-1 my-5"
          >
            <Row className="justify-content-around align-items-center">
              <Col md={4} className="text-start d-none d-md-block">
                <Image fluid src={dataUpload} alt="data upload image" />
              </Col>
              <Col md={5} className="text-center tx-md-start">
                <h1 className="display-4 fst-italic fw-bold">Step 2</h1>
                <p className="lead  fw-bold text-primary">
                  Upload your relevant educational documents
                </p>
              </Col>
            </Row>
          </Container>
          <Container
            lg
            className="border-bottom border-secondary border-1 my-5 "
          >
            <Row className="justify-content-around align-items-center">
              <Col md={5} className="text-center tx-md-start">
                <h1 className="display-4 fst-italic fw-bold">Step 3</h1>
                <p className="lead  fw-bold text-primary">
                  Transfer your documents to your educational institutions
                </p>
              </Col>
              <Col md={5} className="text-start d-none d-md-block">
                <Image fluid src={fileTransfer} alt="file transfer image" />
              </Col>
            </Row>
          </Container>

          <Container
            lg
            className="border-bottom border-secondary border-1 my-5"
          >
            <Row className="justify-content-around align-items-center">
              <Col md={5} className="text-start d-none d-md-block">
                <Image fluid src={relaxationTwo} alt="relaxation image" />
              </Col>
              <Col md={5} className="text-center tx-md-start">
                <h1 className="display-4 fst-italic fw-bold">Step 4</h1>
                <p className="lead  fw-bold text-primary">
                  Kick Back and Relax!
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
      <section id="main-cta">
        <Container className="text-center">
          <h2 className="display-2">What Are You Waiting For?</h2>
          <p>
            Sign up free today and take the next step towards your educational
            future.{" "}
          </p>
          <Button variant="outline-primary" size="lg">
            Let's Do This
          </Button>
          <Container className=" d-none d-lg-block py-3">
            <Image src={studentCTA} alt="time" />
          </Container>
        </Container>
      </section>
    </>
  );
};

export default Students;
