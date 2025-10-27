import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { addResume } from "../services/AllApi";
import Swal from "sweetalert2";

const StepperPage = ({ resumeData, setResumeData }) => {
  const [skills, setSkills] = useState([
    "React",
    "Node",
    "Express",
    "Angular",
    "MongoDB",
  ]);
  const [skillinput, setSkillinput] = useState("");

  const createResume = async () => {
    try {
      if (
        resumeData.fullName === "" ||
        resumeData.location === "" ||
        resumeData.email === "" ||
        resumeData.phno === "" ||
        resumeData.github === "" ||
        resumeData.linkedin === "" ||
        resumeData.portfolio === "" ||
        resumeData.summary === "" ||
        resumeData.title === "" ||
        resumeData.coursename === "" ||
        resumeData.college === "" ||
        resumeData.university === "" ||
        resumeData.year === "" ||
        resumeData.company === "" ||
        resumeData.duration === "" ||
        resumeData.jobtitle === "" ||
        !resumeData.skills ||
        resumeData.skills.length === 0
      ) {
        Swal.fire({
          title: "Resume Empty",
          text: "Please fill all the details",
          icon: "question",
        });
      } else {
     
        let apiResponse = await addResume(resumeData);
        console.log(apiResponse.data);

        Swal.fire({
          title: "Resume Created Successfully!",
          text: "Your resume has been saved.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      alert("Error occurred");
      console.log(error);
    }
  };

  const pushSkill = (skill) => {
    if (resumeData.skills.includes(skill)) {
      alert("Skill already added");
    } else {
      setResumeData({ ...resumeData, skills: [...resumeData.skills, skill] });
    }
  };

  const steps = [
    "Basic Information",
    "Contact Details",
    "Education Details",
    "Work Experience",
    "Skills & Certifications",
    "Review & Submit",
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderDetails = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <div>
            <Typography variant="h4" sx={{ mt: 3 }}>
              Personal Details
            </Typography>
            <Box>
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, fullName: e.target.value })
                }
                id="fullname"
                label="Full Name"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.fullName}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, title: e.target.value })
                }
                id="title"
                label="Title"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.title}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, location: e.target.value })
                }
                id="location"
                label="Location"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.location}
              />
            </Box>
          </div>
        );

      case 1:
        return (
          <div>
            <Typography variant="h4" sx={{ mt: 3 }}>
              Contact Details
            </Typography>
            <Box>
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, email: e.target.value })
                }
                id="email"
                label="Email"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.email}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, phno: e.target.value })
                }
                id="phno"
                label="Phone Number"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.phno}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, github: e.target.value })
                }
                id="gitlink"
                label="Github Profile Link"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.github}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, linkedin: e.target.value })
                }
                id="linkedinlink"
                label="LinkedIn Profile Link"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.linkedin}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, portfolio: e.target.value })
                }
                id="portfoliolink"
                label="Portfolio Link"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.portfolio}
              />
            </Box>
          </div>
        );

      case 2:
        return (
          <div>
            <Typography sx={{ mt: 3 }}>Educational Details</Typography>
            <Box>
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, coursename: e.target.value })
                }
                id="coursename"
                label="Course Name"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.coursename}
              />
              <TextField
                id="collegename"
                onChange={(e) =>
                  setResumeData({ ...resumeData, college: e.target.value })
                }
                label="College Name"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.college}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, university: e.target.value })
                }
                id="university"
                label="University"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.university}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, year: e.target.value })
                }
                id="yearofpass"
                label="Year of Passout"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.year}
              />
            </Box>
          </div>
        );

      case 3:
        return (
          <div>
            <Typography sx={{ mt: 3 }}>Work Experience Details</Typography>
            <Box>
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, jobtitle: e.target.value })
                }
                id="jobinternship"
                label="Job or Internship"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.jobtitle}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, company: e.target.value })
                }
                id="companyname"
                label="Company Name"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.company}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, joblocation: e.target.value })
                }
                id="location1"
                label="Location"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.joblocation}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, duration: e.target.value })
                }
                id="duration"
                label="Duration"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.duration}
              />
            </Box>
          </div>
        );

      case 4:
        return (
          <div>
            <Typography sx={{ mt: 3 }}>
              Skills and Certification Details
            </Typography>
            <Box>
              <TextField
                onChange={(e) => setSkillinput(e.target.value)}
                id="skills"
                label="Add Skill"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <Button
                onClick={() => pushSkill(skillinput)}
                variant="contained"
                sx={{ mt: 3 }}
              >
                Add
              </Button>
            </Box>
            <Typography>Suggestions</Typography>
            <Box>
              {skills.map((eachskills, index) => (
                <Button
                  key={index}
                  onClick={() => pushSkill(eachskills)}
                  variant="outlined"
                  sx={{ ml: 2 }}
                >
                  {eachskills}
                </Button>
              ))}
            </Box>
          </div>
        );

      case 5:
        return (
          <div>
            <Typography>Preview Details</Typography>
            <Box>
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, summary: e.target.value })
                }
                id="summary"
                label="Summary"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.summary}
              />
            </Box>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              <h1>All steps completed - you're finished</h1>
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {renderDetails(activeStep)}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2, mt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {activeStep === steps.length - 1 ? (
                <Button onClick={createResume}>Finish</Button>
              ) : (
                <Button onClick={handleNext}>Next</Button>
              )}
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
};

export default StepperPage;
