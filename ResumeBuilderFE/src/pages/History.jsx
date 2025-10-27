import React, { useEffect, useState } from 'react'
import { displayResume } from '../services/AllApi'

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";


const History = () => {

  const [data, setdata] = useState([])


  const getResume=async()=>{
    let apiResponse=await displayResume()
    console.log(apiResponse.data);
    setdata(apiResponse.data)
  }

  useEffect(()=>{
    getResume()
},[])

  return (
    <div>

    </div>
  );
}

export default History