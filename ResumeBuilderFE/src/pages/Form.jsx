import React, { useState } from 'react'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Preview from '../components/Preview';
import StepperPage from '../components/StepperPage';
import { duration } from '@mui/material/styles';

const Form = () => {
  const[resumeData,setResumeData]=useState({
    fullName:'',
    location:'',
    email:'',
    phno:'',
    github: '',
    linkedin:'',
    portfolio:'',
    summary:'',
    education:'',
    coursename:'',
    college:'',
    university:"",
    year:"",
    company:"",
    location:"",
    duration:"",
    jobtitle:"",
    skills:[]
  })
  return (
    <div className="container">
      <Row>
        <Col md={6} sm={12} style={{marginTop:"100px"}}>
          <StepperPage setResumeData={setResumeData} resumeData={resumeData} />
        </Col>
        <Col md={6} sm={12} className='mt-4'>
          <Preview resumeData={resumeData} />
        </Col>
      </Row>
    </div>
  );
}

export default Form