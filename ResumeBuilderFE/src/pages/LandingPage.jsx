import Mycard from "../components/Mycard";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons"; 
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const LandingPage = () => {
  return (
    <div>
      <div id="mainhead" className="text-center mt-4 mb-5">
        Create a job-winning Resume in minutes
      </div>
      <Row xs={1} md={2} className="g-4 container text-center ms-5 mt-5">
        <Col>
          <Mycard
            icon={
              <FontAwesomeIcon
                icon={faFileLines}
                style={{ color: "#003694" }}
              />
            }
            title="Add your Information"
            description="Add pre-written examples to each section"
            step="step1"
          />
        </Col>
        <Col>
          <Mycard
            icon={
              <FontAwesomeIcon
                icon={faFileArrowDown}
                style={{ color: "#ad0000" }}
              />
            }
            title="Download your Resume"
            description="Download and start applying"
            step="step2"
          />
        </Col>
      </Row>
      <div className="text-center mt-5">
        <button  style={{ backgroundColor: "#350463",color:"white",borderRadius:"5px",padding:"5px" }}>
          Lets Start
        </button>
      </div>
    </div>
  );
}

export default LandingPage