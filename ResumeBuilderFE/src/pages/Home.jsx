import "./Home.css";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import resume from '../assets/resume.png'
import p1 from '../assets/p1.png'
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

import { Link } from "react-router-dom";
import LandingPage from "./LandingPage";


const Home = () => {
  return (
    <div>
      <section
        id="Home"
        className="d-flex justify-content-center align-items-center"
      >
        <Card id="box" className="p-5">
          <Card.Body className="text-center">
            <Card.Title id="mainhead">Designed to get hired.</Card.Title>
            <Card.Subtitle className="mb-2" id="subhead">
              Your skills,your story,your next job --all <br />
              in one
            </Card.Subtitle>
            <Link to={"LandingPage"} id="link">
              {" "}
              <Button variant="secondary" id="btn1">
                MAKE YOUR RESUME
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </section>

      <section className="mt-4">
        <Container>
          <h2 id="sub-head" className="text-center">
            Tools
          </h2>
          <Row>
            <Col className="mt-5">
              <h2 id="subhead">Resume</h2>
              <p>
                Create unlimited new resumes and easily edit them afterwards.
              </p>
              <h2 id="subhead">Cover Letters</h2>
              <p>Easily write professional cover letters.</p>
              <h2 id="subhead">Jobs</h2>
              <p>Automatically receive new and relevant job postings.</p>
              <h2 id="subhead">Applications</h2>
              <p>
                Effortlessly manage and track your job applications in an
                organized manner..
              </p>
            </Col>
            <Col>
              <img src={resume} height={400} />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="third-page"></section>

      <section className="mt-4">
        <Container>
          <h2 id="sub-head" className="text-center">
            Testimony
          </h2>
          <Row>
            <Col className="mt-5">
              <h2 id="subhead" className="p-1">
                Trusted by professionals worldwide.
              </h2>
              <p className="mt-4">
                At LiveCareer, we don't just help you create résumés — we help
                you land the job. Whether you're a seasoned professional or just
                starting out, our tools are designed to get results. In fact,
                users who used LiveCareer reported getting hired an average of
                48 days faster. Join thousands of job-seekers who’ve
                fast-tracked their careers with a résumé that truly stands out.
              </p>
            </Col>
            <Col className="mt-3">
              <Row className="d-flex flex-nowrap">
                <Col className="d-flex flex-nowrap">
                  <img src={p1} className="mb-4 me-4" />
                  <img src={p2} className="mb-4 me-4" />
                  <img src={p3} className="mb-4 me-4" />
                  <img src={p4} className="mb-4 me-4" />
                </Col>
              </Row>
              <Row className="d-flex flex-nowrap">
                <Col className="d-flex flex-nowrap">
                  <img src={p1} className="mb-4 me-4" />
                  <img src={p2} className="mb-4 me-4" />
                  <img src={p3} className="mb-4 me-4" />
                  <img src={p4} className="mb-4 me-4" />
                </Col>
              </Row>
              <Row className="d-flex flex-nowrap">
                <Col className="d-flex flex-nowrap">
                  <img src={p1} className="mb-4 me-4" />
                  <img src={p2} className="mb-4 me-4" />
                  <img src={p3} className="mb-4 me-4" />
                  <img src={p4} className="mb-4 me-4" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
