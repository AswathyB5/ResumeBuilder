import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { duration } from "@mui/material/styles";
import { addResume } from "../services/AllApi";
import Swal from "sweetalert2";

const StepperPage = ({ resumeData, setResumeData }) => {
  //Array to show all the steps in the stepper,this is to show the steps in top of the component

  const [skills, setSkills] = useState([
    "React",
    "Node",
    "Express",
    "Angular",
    "MongoDB",
  ]);
  const [skillinput, setSkillinput] = useState("");
  const [skillArray, setskillArray] = useState([]);

  const createResume = async () => {
    try {
      if (
        resumeData.fullName == "" ||
        resumeData.location == "" ||
        resumeData.email == "" ||
        resumeData.phno == "" ||
        resumeData.github == "" ||
        resumeData.linkedin == "" ||
        resumeData.portfolio == "" ||
        resumeData.summary == "" ||
        resumeData.title == "" ||
        resumeData.coursename == "" ||
        resumeData.college == "" ||
        resumeData.university == "" ||
        resumeData.year == "" ||
        resumeData.company == "" ||
        resumeData.location == "" ||
        resumeData.duration == "" ||
        resumeData.jobtitle == "" ||
        resumeData.skills == []
      ) {
         Swal.fire({
           title: "Resume Empty",
           text: "Please Fill all the details",
           icon: "question",
         });
      } else {
        let apiResponse = await addResume(resumeData);
        console.log(apiResponse);
     
        Swal.fire({
          title: "Resume Created Successfully!",
          text: "Your resume has been saved.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      alert("Error occured");
      console.log(error);
    }
  };

  const pushSkill = (skill) => {
    if (resumeData.skills.includes(skill)) {
      alert("skill already added");
    } else {
      //setskillArray([...skillArray, skill]);
      setResumeData({ ...resumeData, skills: [...resumeData.skills, skill] });
      console.log(skillArray);
    }
  };

  const steps = [
    "Basic Information",
    "Contact Details",
    "Education Details",
    "Work Expierence",
    "Skills & Certifications",
    "Review & Submit",
  ];

  //state to handle active steps

  const [activeStep, setActiveStep] = React.useState(0); //React. used beacuse useState is not imported

  //Next Button function

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  //Back Button function

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //Reset Button function

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
              />

              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, title: e.target.value })
                }
                id="title"
                label="title"
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
        break;
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
                label="Portflio Link"
                variant="standard"
                sx={{ width: "100%" }}
                value={resumeData.portfolio}
              />
            </Box>
          </div>
        );
        break;
      case 2:
        return (
          <div>
            <Typography sx={{ mt: 3 }}>Educational Details </Typography>
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
        break;
      case 3:
        return (
          <div>
            <Typography sx={{ mt: 3 }}>Work Expirence Details</Typography>
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
        break;
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
                label="Add SKill"
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
              {skills.map((eachskills) => (
                <Button
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
        break;
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
              />
            </Box>
          </div>
        );
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {/* div with full width */}
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              <h1> All steps completed - you&apos;re finished</h1>
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
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
