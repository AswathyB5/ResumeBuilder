import Mycard from "../components/Mycard";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div>
      <div id="mainhead" className="text-center mt-4 mb-5">
        Create a job-winning Resume in minutes
      </div>
      <Row xs={1} md={2} className="g-4 container text-center ms-5 mt-5">
        <Col>
          <Mycard
            title="Add your Information"
            description="Add pre-written examples to each section"
            step="step1"
          />
        </Col>
        <Col>
          <Mycard
            title="Download your Resume"
            description="Download and start applying"
            step="step2"
          />
        </Col>
      </Row>
      <div className="text-center mt-5">
        <Link to="/form">
          <button
            style={{
              backgroundColor: "#350463",
              color: "white",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            Lets Start
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage