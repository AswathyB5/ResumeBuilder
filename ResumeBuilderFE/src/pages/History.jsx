import React, { useEffect, useState } from "react";
import { deleteResume, displayResume } from "../services/AllApi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { RiDeleteBin5Fill } from "react-icons/ri";

const History = () => {
  const [data, setData] = useState([]);

  const getResume = async () => {
      let apiResponse = await displayResume();
      if (apiResponse.status === 200) {
        console.log(apiResponse.data);
        setData(apiResponse.data);
      } else {
        console.error("Failed to fetch resume history");
      }
    } 
  useEffect(() => {
    getResume();
  }, []);

  const onDeleteClick=async(id)=>{
    let apiResponse=await deleteResume(id)
    console.log(apiResponse)
  }

  return (
    <div>
      <h1 className="text-center mt-3">History</h1>
      <Container>
        <div className="d-flex justify-content-center">
          {data.length > 0 ? (
            <Row>
              {data.map((eachdata, index) => (
                <Col key={index}>
                  < RiDeleteBin5Fill onClick={()=>onDeleteClick(eachdata.id)}/>
                  <Paper sx={{width:560}} elevation={10}>
                    <Typography variant="h6" align="center">
                      {eachdata.fullName || "Name"}
                    </Typography>
                    <Typography variant="h6" align="center">
                      {eachdata.title || "Title"}
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Typography>{eachdata.phno || "Ph no"} | </Typography>
                      <Typography>{eachdata.email || "Email"} | </Typography>
                      <Typography>{eachdata.location || "Location"}</Typography>
                    </Box>

                    <Box
                      sx={{ display: "flex", justifyContent: "center", mt: 3 }}
                    >
                      GitHub:{" "}
                      <a
                        href={eachdata.github || "Github Link"}
                        target="_blank"
                      >
                        {eachdata.github || "GitHub Link"}
                      </a>
                      &nbsp;&nbsp;|&nbsp; LinkedIn:{" "}
                      <a
                        href={eachdata.linkedin || "#"}
                        target="_blank"
                      >
                        {eachdata.linkedin || "LinkedIn Link"}
                      </a>
                    </Box>

                    <Box sx={{ textAlign: "center", marginTop: "8px" }}>
                      Portfolio:{" "}
                      <a
                        href={eachdata.portfolio || "portfolio link"}
                        target="_blank"
                      >
                        {eachdata.portfolio || "Portfolio Link"}
                      </a>
                    </Box>

                    <Divider sx={{ mt: 4 }}>Summary</Divider>
                    <Typography align="center">{eachdata.summary}</Typography>

                    <Divider sx={{ mt: 4 }}>Education</Divider>
                    <Typography align="center" sx={{ mt: 2 }}>
                      {eachdata.coursename || "Course Name"}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Typography>
                        {eachdata.college || "College Name"}
                      </Typography>{" "}
                      |
                      <Typography>
                        {eachdata.university || "University"}
                      </Typography>{" "}
                      |<Typography>{eachdata.year || "Year"}</Typography>
                    </Box>

                    <Divider sx={{ mt: 5 }}>Professional Experience</Divider>
                    <Typography align="center" sx={{ mt: 2 }}>
                      {eachdata.jobtitle || "Job Title"}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Typography>{eachdata.company || "Company"}</Typography> |
                      <Typography>
                        {eachdata.joblocation || "Location"}
                      </Typography>{" "}
                      |
                      <Typography>{eachdata.duration || "Duration"}</Typography>
                    </Box>

                    <Divider sx={{ mt: 5 }}>Skills</Divider>
                    <Stack
                      direction={"row"}
                      ml={2}
                      spacing={2}
                      sx={{ flexWrap: "wrap" }}
                    >
                      {
                        eachdata.skills.map((eachskill, index) => (
                          <Button key={index} variant="outlined" size="small">
                            {eachskill}
                          </Button>
                        ))}
                    </Stack>
                  </Paper>
                </Col>
              ))}
            </Row>
          ) : (
            <h3>No History Found</h3>
          )
          }
        </div>
      </Container>
    </div>
  );
};

export default History;
