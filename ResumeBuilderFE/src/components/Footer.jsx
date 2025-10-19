import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer
        className="text-center mt-5"
        style={{ backgroundColor: "#350463", color: "white" }}
      >
        <div className="fw-normal fs-4 p-4">Contact Us</div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          &nbsp; rbuilder@gmail.com{" "}
        </div>
        <FontAwesomeIcon icon={faPhone} />
        &nbsp; 9898989898
        <br />
        <br />
        <div>Connect with Us</div>
        <div className="p-3">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="me-2"
            style={{ height: "20px" }}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="me-2"
            style={{ height: "20px" }}
          />
          <FontAwesomeIcon icon={faLinkedin} style={{ height: "20px" }} />
        </div>
        <div>Connect with Us Designed & built with ❤️ using React</div>
      </footer>
    </div>
  );
}

export default Footer