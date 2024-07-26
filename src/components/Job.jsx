import React, { useEffect, useState } from 'react'
import Jobcard from './Jobcard'
import axios from 'axios'


const Job = () => {
  const [jobs,setjobs]=useState([])
  const getjobs=async()=>{
    try{
      const res=await axios.get('http://localhost:4000/jobs')
      setjobs(res.data)

     
    }
    catch(err){
      console.log("error")
    }
  }
  useEffect(() => {
    getjobs()
    }, [])

  
  return (
    <div className='grid gap-4 grid-cols-1 sm:grid cols-2 md:grid-cols-3'>
    {jobs.map((job)=>(
      <Jobcard key={job.id} job={job} />
      ))}

    </div>
  )
}

export default Job
