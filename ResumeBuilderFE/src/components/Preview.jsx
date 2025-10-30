import React from 'react'
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaDownload } from 'react-icons/fa';
import jsPDF  from 'jspdf'
import html2canvas from 'html2canvas' //take ss of the papper


const Preview = ({resumeData}) => {

const onDownloadClick = async () => {
  const paperElement = document.getElementById("result");


  const pappercanvas = await html2canvas(paperElement, { scale: 2});
  const papperimgData = pappercanvas.toDataURL("image/png");
console.log(papperimgData)

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (pappercanvas.height * pdfWidth)/pappercanvas.width;
  pdf.addImage(papperimgData,"png",0,0,pdfWidth,pdfHeight)
  pdf.save("resume.pdf")
}
  return (
    <div className="container ms-5">
      <Button className="fs-3" onClick={onDownloadClick}>
        <FaDownload />
      </Button>
      <Paper id="result" sx={{ height: 650 }} elevation={10}>
        <Typography variant="h6" align="center">
          {resumeData.fullName || "Name"}
        </Typography>
        <Typography variant="h6" align="center">
          {resumeData.title || "Title"}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography align="center">{resumeData.phno || "Ph no"} |</Typography>
          <Typography align="center">
            {resumeData.email || "Email"} |
          </Typography>
          <Typography align="center">
            {resumeData.location || "Location"}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          GitHub: <a href="">{resumeData.github || "GitHub Link"}</a>
          &nbsp;&nbsp;|&nbsp; LinkedIn:{" "}
          <a href="">{resumeData.linkedin || "LinkedIn Link"}</a>
        </Box>
        <Box sx={{ textAlign: "center", marginTop: "8px" }}>
          Portfolio: <a href="">{resumeData.portfolio || "Portfolio Link"}</a>
        </Box>
        <Divider sx={{ mt: 4 }}>Summary</Divider>
        <Typography align="center">{resumeData.summary}</Typography>
        <Divider sx={{ mt: 4 }}>Education</Divider>
        <Typography align="center" sx={{ mt: 2 }}>
          {resumeData.coursename || "Course Name"}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography align="center">
            {resumeData.college || "College Name"}
          </Typography>
          |
          <Typography align="center">
            {resumeData.university || "University"}
          </Typography>
          |<Typography align="center">{resumeData.year || "Year"}</Typography>
        </Box>
        <Divider sx={{ mt: 5 }}>Proffesional Experience</Divider>
        <Typography align="center" sx={{ mt: 2 }}>
          {resumeData.jobtitle || "Job Title"}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography align="center">
            {resumeData.company || "Company"}
          </Typography>
          |
          <Typography align="center">
            {resumeData.joblocation || "Location"}
          </Typography>
          |
          <Typography align="center">
            {resumeData.duration || "Duration"}
          </Typography>
        </Box>
        <Divider sx={{ mt: 5 }}>Skill</Divider>

        <Stack direction={"row"} ml={2} spacing={2}>
          {resumeData.skills.map((eachskill, index) => (
            <Button key={index} variant="outlined">
              {eachskill}
            </Button>
          ))}
        </Stack>
      </Paper>
    </div>
  );
}

export default Preview