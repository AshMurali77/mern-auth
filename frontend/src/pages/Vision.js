import { useState } from "react";
import {
  Button,
  Container,
  Ratio,
  Card,
  Row,
  Col,
  Carousel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import InterestForm from "../components/InterestForm";

//image imports
import time from "../assets/time.svg";
import labor from "../assets/labor.svg";
import cost from "../assets/cost.svg";
const Vision = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <section id="intro" className="bg-blue mt-4">
        <Container className="text-center">
          <h2 className="display-3 fw-bold">
            Breaking Down Educational Barriers
          </h2>
          <p className="lead">
            Filled with manual processes, inefficiencies, and high
            organizational costs, the administrative headache around educational
            record management leaves students and institutions worse off. ALO
            seeks to solve that issue, creating an digital and distributed
            system that saves times and lowers costs -- for everyone.
          </p>
          <Link to="/">
            <Button size="lg">Our Solution</Button>
          </Link>
        </Container>
      </section>

      <section id="solutions">
        <Container className="text-center">
          <h2 className="display-3">Modern Problems, Modern Solutions</h2>
          <p className="lead">
            Today's educational record management is marked by slow document
            transfer, inefficient labor requirements, and high fees; ALO seeks
            to decentralize this process and usher in a better system.
          </p>
          <Row gap={3}>
            <Col md={4} className="d-flex  align-items-stretch">
              <Card className="shadow ">
                <Ratio aspectRatio="4x3">
                  <Card.Img variant="top" src={time} />
                </Ratio>
                <Card.Body className="text-center  justify-content-around">
                  <Card.Title>Transfer Speed</Card.Title>
                  <Card.Text>
                    With records being sent through snail mail or slow digital
                    platforms, current educational document transfers can take
                    weeks to process. ALO's decentralized approach aims to
                    create an instantaneous transfer process, saving time for
                    both students and institutions alike.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="d-flex align-items-stretch">
              <Card className="shadow ">
                <Ratio aspectRatio="4x3">
                  <Card.Img variant="top" src={labor} />
                </Ratio>
                <Card.Body className="text-center  justify-content-around">
                  <Card.Title>Labor Usage</Card.Title>
                  <Card.Text>
                    Thousands of man hours are spent yearly on the manual task
                    of educational record handling, driving productivity down
                    and costs up. ALO seeks to create an automated record
                    processing system, removing the burden of validation and
                    record handling from institutions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="d-flex  align-items-stretch">
              <Card className="shadow ">
                <Ratio aspectRatio="4x3">
                  <Card.Img variant="top" src={cost} />
                </Ratio>
                <Card.Body className="text-center  justify-content-around">
                  <Card.Title>Cost Barriers</Card.Title>
                  <Card.Text>
                    Because of the inefficiencies marring the entire educational
                    record transfer process, costs to students can reach up to
                    *metric* for record transfer. ALO seeks to build efficiency
                    in all other areas so that students may realize zero cost
                    and document transfer is free.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="unifying" className="bg-blue ">
        <Container className="text-center ">
          <h2 className="display-2  ">The Ultimate Goal?</h2>
          <p className="lead ">One Unified System</p>
          <Carousel
            variant="dark"
            controls={false}
            className="border-secondary border border-2"
          >
            <Carousel.Item>
              <div
                style={{ width: 500, height: 500 }}
                className=" bg-blue"
                alt="First slide"
              />
              <Carousel.Caption className=" d-flex flex-column h-100 align-items-center justify-content-center">
                <h3>Students</h3>
                <p className="">
                  Students' ALO profiles become their digital twins, securely
                  documenting their academic and professional achievements.
                  Whether they are applying to higher educational institutions
                  or career-defining roles, students can efficiently send their
                  records to the organizations that need them. The end goal?
                  Save students time and money, resulting in better academic
                  outcomes and professional contributions.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{ width: 500, height: 500 }}
                className=" bg-blue"
                alt="First slide"
              />
              <Carousel.Caption className=" d-flex flex-column h-100 align-items-center justify-content-center">
                <h3>Institutions</h3>
                <p className="">
                  The manual, hassle-ridden process of educational record
                  processing can be transformed with the help of ALO's
                  decentralized approach. Robust analytics capabilities allow
                  institutions to garner a wealth of insight from their record
                  data, meaning better evaluation of academic outcomes and
                  professional opportunities. ALO's automatic
                  transfer-equivalency process broadens student application
                  opportunities and allows an informed approach to course
                  content curation.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{ width: 500, height: 500 }}
                className=" bg-blue"
                alt="First slide"
              />
              <Carousel.Caption className=" d-flex flex-column h-100 align-items-center justify-content-center">
                <h3>Employers</h3>
                <p className="">
                  Employers can use the ALO platform to connect with top
                  candidates and target their recruitment to those with the
                  education and skills perfect for the job. Special
                  certifications and job-readiness metrics can be parsed through
                  on the ALO platform, meaning more time saved for building
                  relationships with top candidates and institutions around the
                  globe.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{ width: 500, height: 500 }}
                className=" bg-blue"
                alt="First slide"
              />
              <Carousel.Caption className=" d-flex flex-column h-100 align-items-center justify-content-center">
                <h3>Learning Platforms</h3>
                <p className="">
                  Online learning platforms can continue towards their goals of
                  providing low cost, relevant education to students across the
                  globe. Through ALO's course equivalency platform, learning
                  platforms can curate course content that is transferrable to
                  traditional institutions, greatly increasing the efficacy of
                  digital courses for everyone.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      <section id="main-cta">
        <Container className="text-center">
          <h2 className="display-2">ALO</h2>
          <p className="lead">
            Removing the barriers to education access, one record at a time.
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
