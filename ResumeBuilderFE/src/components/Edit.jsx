import React from 'react'
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaEdit } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TextField from "@mui/material/TextField";

const Edit = ({resumeData}) => {

    const [editData,seteditData]=useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
onED

  return (
    <div>
      <FaEdit variant="primary" onClick={handleShow}></FaEdit>

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <TextField
                onChange={(e) =>
                  seteditData({ ...editData, fullname: e.target.value })
                }
                id="fullname"
                label="Full Name"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                onChange={(e) =>
                  seteditData({ ...editData, title: e.target.value })
                }
                id="title"
                label="Title"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                onChange={(e) =>
                  seteditData({ ...editData, location: e.target.value })
                }
                id="location"
                label="Location"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                onChange={(e) =>
                  seteditData({ ...editData, email: e.target.value })
                }
                id="email"
                label="Email"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                onChange={(e) =>
                  seteditData({ ...editData, phno: e.target.value })
                }
                id="phno"
                label="Phone Number"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                onChange={(e) =>
                  seteditData({ ...editData, gitlink: e.target.value })
                }
                id="gitlink"
                label="Github Profile Link"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                onChange={(e) =>
                  seteditData({ ...editData, linkedinlink: e.target.value })
                }
                id="linkedinlink"
                label="LinkedIn Profile Link"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                onChange={(e) =>
                  seteditData({ ...editData, portfoliolink: e.target.value })
                }
                id="portfoliolink"
                label="Portfolio Link"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                onChange={(e) =>
                  seteditData({ ...editData, coursename: e.target.value })
                }
                id="coursename"
                label="Course Name"
                variant="standard"
                sx={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                onChange={(e) =>
                  seteditData({ ...editData, college: e.target.value })
                }
                id="collegename"
                label="College Name"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                onChange={(e) =>
                  seteditData({ ...editData, university: e.target.value })
                }
                id="university"
                label="University"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                onChange={(e) =>
                  seteditData({ ...editData, year: e.target.value })
                }
                id="yearofpass"
                label="Year of Passout"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                onChange={(e) =>
                  seteditData({ ...editData, job: e.target.value })
                }
                id="jobinternship"
                label="Job or Internship"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                onChange={(e) =>
                  seteditData({ ...editData, company: e.target.value })
                }
                id="companyname"
                label="Company Name"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                onChange={(e) =>
                  seteditData({ ...editData, location: e.target.value })
                }
                id="location1"
                label="Location"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                onChange={(e) =>
                  seteditData({ ...editData, duration: e.target.value })
                }
                id="duration"
                label="Duration"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
              onChange={(e)=>seteditData({...editData,summary:e.target.value})}
                id="summary"
                label="Summary"
                variant="standard"
                sx={{ width: "100%", marginBottom: "10px" }}
              />
              <TextField />
              &nbsp;&nbsp;
              <button className="btn btn-primary mt-2" onClick={()=>editaddSkill}>Add Skill</button>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Edit