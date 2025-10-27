import React, { useEffect, useState } from 'react'
import { displayResume } from '../services/AllApi'


const History = () => {

  const [data, setdata] = useState([])


  const getResume=async()=>{
    let apiResponse=await displayResume()
    setdata(apiResponse)
  }

  useEffect(()=>
    getResume()
  ,[])

  return (
    <div></div>
  )
}

export default History