import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const SingleJobPage = () => {
    const [job,setjob]=useState('')
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState('')
    const {id}=useParams()

    const getjob=async()=>{
        try{
            setIsLoading(true)
            const res=await axios.get(`http://localhost:4000/jobs/${id}`)
            setjob(res.data)
            setIsLoading(false)
        }
        catch(err){
            console.log(error)
            setIsLoading(false)
        }
    }


    useEffect(()=>{
        getjob()
    },[])
    const navigate=useNavigate()

    const handledDelete=async (id)=>{
      try{
        await axios.delete(`http://localhost:4000/jobs/${id}`)
        toast.success("job is successfully deleted")
        navigate('/jobs')

    }
    catch(err){
      console.log(err)
      }
  }

    if(isLoading) return<span>Loadin....</span>


  return (
    <div className='max-w-6xl mx-auto px-4 my-10'>
          <div className='flex gap-10'>
            <div className=' basis-3/5'>
                <div className='p-6 rounded-lg shadow-md'>
                  <h1 className='text-gray-500 mb-4'>{job?.type}</h1>
                  <h3 className='text-3xl font-bold mb-4'>{job?.title}</h3>
                  <p className='text-orange-700'>{job.location}</p>
                </div>
                <div className='p-6 rounded-lg shadow-md mt-6'>
                  <p className='mb-4'>
                   {job.description}
                </p>
                <p className='text-indigo-800 text-lg font-bold mb-2'>{job?.salary}</p>
                </div>
            </div>

            <div className=' basis-2/5'>
            <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-6">Company Info</h3>
                        <h2 className="text-2xl">{job.company?.name}</h2>
                        <p
                        className="my-2">{job?.company?.description}</p>
                        <hr className="my-4" />
                        <h3 className="text-xl">Contact Email:</h3>
                        <p className="my-2 bg-indigo-100 p-2 font-bold">{job?.company?.contactEmail}</p>
                        <h3 className="text-xl">Contact Phone:</h3>
                        <p className="my-2 bg-indigo-100 p-2 font-bold">{ job?.company?.contactPhone}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                        <h3 className="text-xl font-bold mb-6">Manage Job</h3>

                       <Link to='/editjob' state={{job}}>
                       <button className="p-2 rounded-md text-white bg-indigo-500 mb-4 mr-4">
                            Edit Job
                        </button></Link>
                        
                       
                        <button onClick={()=>handledDelete(job?.id)} className="p-2 rounded-md text-white bg-red-500">
                            Delete Job
                        </button>
                    </div>
            </div>
          </div>
    </div>
  )
}

export default SingleJobPage
