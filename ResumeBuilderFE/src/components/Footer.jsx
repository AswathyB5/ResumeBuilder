import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer
        className="text-center mt-5"
        style={{ backgroundColor: "#350463", color: "white" }}
      >
        <div className="fw-normal fs-4 p-4">Contact Us</div>
        <div>
         <FaEnvelope/>
          &nbsp; rbuilder@gmail.com{" "}
        </div>

        &nbsp; 9898989898
        <br />
        <br />
        <div>Connect with Us</div>
        <div className="p-3">


        </div>
        <div>Connect with Us Designed & built with ❤️ using React</div>
      </footer>
    </div>
  );
};

export default Footer;
