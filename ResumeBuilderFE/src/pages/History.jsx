import React, { useEffect, useState } from "react";
import { deleteResume, displayResume, editsaveData } from "../services/AllApi";
import {Container,Row,Col,Modal,} from "react-bootstrap";
import { Paper,Typography,Box,Divider,Stack,Button,TextField,} from "@mui/material";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const History = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState({});
  const [show, setShow] = useState(false);


  const getResume = async () => {
    const apiResponse = await displayResume();
    if (apiResponse.status === 200) {
      setData(apiResponse.data);
    } else {
      console.error("Failed to fetch resume history");
    }
  };

  useEffect(() => {
    getResume();
  }, []);

  const onDeleteClick = async (id) => {
    await deleteResume(id);
    getResume();
  };

  const onEditClick = (data) => {
    setShow(true);
    setEditData(data);
  };


  const handleSave = async () => {
    const res = await editsaveData(editData.id,editData);
    if (res.status === 200) {
      alert("Updated successfully!");
      getResume();
      setShow(false);
    } else {
      alert("Update failed!");
    }
  };

  return (
    <div>
      <h1 className="text-center mt-3">History</h1>

      <Container>
        <Row className="justify-content-center">
          {data.length > 0 ? (
            data.map((eachdata, index) => (
              <Col key={index} md={6} className="mb-4">
                <Paper sx={{ p: 3 }} elevation={10}>
                  <div className="d-flex justify-content-between">
                    <RiDeleteBin5Fill
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() => onDeleteClick(eachdata.id)}
                    />
                    <FaEdit
                      style={{ cursor: "pointer", color: "blue" }}
                      onClick={() => onEditClick(eachdata)}
                    />
                  </div>

                  <Typography variant="h6" align="center">
                    {eachdata.fullName || "Name"}
                  </Typography>
                  <Typography variant="subtitle1" align="center">
                    {eachdata.title || "Title"}
                  </Typography>

                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography>{eachdata.phno || "Phone"} | </Typography>
                    <Typography>{eachdata.email || "Email"} | </Typography>
                    <Typography>{eachdata.location || "Location"}</Typography>
                  </Box>

                  <Box sx={{ textAlign: "center", mt: 2 }}>
                    GitHub:{" "}
                    <a href={eachdata.github} target="_blank" rel="noreferrer">
                      {eachdata.github || "GitHub Link"}
                    </a>
                    {" | "}
                    LinkedIn:{" "}
                    <a
                      href={eachdata.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {eachdata.linkedin || "LinkedIn Link"}
                    </a>
                  </Box>

                  <Box sx={{ textAlign: "center", mt: 1 }}>
                    Portfolio:{" "}
                    <a
                      href={eachdata.portfolio}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {eachdata.portfolio || "Portfolio Link"}
                    </a>
                  </Box>

                  <Divider sx={{ mt: 3 }}>Summary</Divider>
                  <Typography align="center" sx={{ mt: 1 }}>
                    {eachdata.summary || "No summary provided"}
                  </Typography>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

                  <Divider sx={{ mt: 3 }}>Education</Divider>
                  <Typography align="center" sx={{ mt: 1 }}>
                    {eachdata.coursename || "Course Name"}
                  </Typography>
                  <Typography align="center">
                    {eachdata.college || "College"} |{" "}
                    {eachdata.university || "University"} |{" "}
                    {eachdata.year || "Year"}
                  </Typography>

                  <Divider sx={{ mt: 3 }}>Professional Experience</Divider>
                  <Typography align="center" sx={{ mt: 1 }}>
                    {eachdata.jobtitle || "Job Title"}
                  </Typography>
                  <Typography align="center">
                    {eachdata.company || "Company"} |{" "}
                    {eachdata.joblocation || "Location"} |{" "}
                    {eachdata.duration || "Duration"}
                  </Typography>

                  <Divider sx={{ mt: 3 }}>Skills</Divider>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ flexWrap: "wrap", mt: 1 }}
                  >
                    {eachdata.skills && eachdata.skills.length > 0 ? (
                      eachdata.skills.map((skill, i) => (
                        <Button key={i} variant="outlined" size="small">
                          {skill}
                        </Button>
                      ))
                    ) : (
                      <Typography>No Skills Listed</Typography>
                    )}
                  </Stack>
                </Paper>
              </Col>
            ))
          ) : (
            <h3>No History Found</h3>
          )}
        </Row>
      </Container>

      <Modal size="xl" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <TextField
                label="Full Name"
                variant="standard"
                sx={{ width: "100%" }}
                value={editData.fullName || ""}
                onChange={(e) =>
                  setEditData({ ...editData, fullName: e.target.value })
                }
              />
              <TextField
                label="Title"
                variant="standard"
                sx={{ width: "100%" }}
                value={editData.title || ""}
                onChange={(e) =>
                  setEditData({ ...editData, title: e.target.value })
                }
              />
              <TextField
                label="Email"
                variant="standard"
                sx={{ width: "100%" }}
                value={editData.email || ""}
                onChange={(e) =>
                  setEditData({ ...editData, email: e.target.value })
                }
              />
              <TextField
                label="Phone Number"
                variant="standard"
                sx={{ width: "100%" }}
                value={editData.phno || ""}
                onChange={(e) =>
                  setEditData({ ...editData, phno: e.target.value })
                }
              />
              <TextField
                label="Location"
                variant="standard"
                sx={{ width: "100%" }}
                value={editData.location || ""}
                onChange={(e) =>
                  setEditData({ ...editData, location: e.target.value })
                }
              />
              <TextField
                label="GitHub Profile Link"
                variant="standard"
                sx={{ width: "100%" }}
                value={editData.github || ""}
                onChange={(e) =>
                  setEditData({ ...editData, github: e.target.value })
                }
              />
              <TextField
                label="LinkedIn Profile Link"
                variant="standard"
                sx={{ width: "100%" }}
                value={editData.linkedin || ""}
                onChange={(e) =>
                  setEditData({ ...editData, linkedin: e.target.value })
                }
              />
              <TextField
                label="Portfolio Link"
                variant="standard"
                sx={{ width: "100%" }}
                value={editData.portfolio || ""}
                onChange={(e) =>
                  setEditData({ ...editData, portfolio: e.target.value })
                }
              />
            </Col>

            <Col>
              <TextField
                label="Course Name"
                variant="standard"
                sx={{ width: "100%" }}
                value={editData.coursename || ""}
                onChange={(e) =>
                  setEditData({ ...editData, coursename: e.target.value })
                }
              />
              <TextField
                label="College Name"
                variant="standard"
                sx={{ width: "100%" }}
                value={editData.college || ""}
                onChange={(e) =>
                  setEditData({ ...editData, college: e.target.value })
                }
              />
              <TextField
                label="University"
                variant="standard"
                sx={{ width: "100%" }}
                value={editData.university || ""}
                onChange={(e) =>
                  setEditData({ ...editData, university: e.target.value })
                }
              />
              <TextField
                label="Year of Passout"
                variant="standard"
                sx={{ width: "100%" }}
                value={editData.year || ""}
                onChange={(e) =>
                  setEditData({ ...editData, year: e.target.value })
                }
              />
              <TextField
                label="Job Title"
                variant="standard"
                sx={{ width: "100%" }}
                value={editData.jobtitle || ""}
                onChange={(e) =>
                  setEditData({ ...editData, jobtitle: e.target.value })
                }
              />
              <TextField
                label="Company Name"
                variant="standard"
                sx={{ width: "100%" }}
                value={editData.company || ""}
                onChange={(e) =>
                  setEditData({ ...editData, company: e.target.value })
                }
              />
              <TextField
                label="Job Location"
                variant="standard"
                sx={{ width: "100%" }}
                value={editData.joblocation || ""}
                onChange={(e) =>
                  setEditData({ ...editData, joblocation: e.target.value })
                }
              />
              <TextField
                label="Duration"
                variant="standard"
                sx={{ width: "100%" }}
                value={editData.duration || ""}
                onChange={(e) =>
                  setEditData({ ...editData, duration: e.target.value })
                }
              />
              <TextField
                label="Summary"
                variant="standard"
                multiline
                rows={3}
                sx={{ width: "100%" }}
                value={editData.summary || ""}
                onChange={(e) =>
                  setEditData({ ...editData, summary: e.target.value })
                }
              />
              <br />
              <br />
              <TextField
              value={editData.skills}
                onChange={(e) =>
                  setEditData({ ...editData, skills: e.target.value })
                }
              />
              &nbsp;&nbsp;
              <button  className="btn btn-primary mt-2">Add Skill</button>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default History;
