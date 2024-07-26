import React from 'react'
import { Link } from 'react-router-dom'





const Jobcard = ({job}) => {
  return (
    <div>
      <div className='border shadow-md rounded -xl p-4'>
        <div>
            <h1 className='text-gray-600 my-2'>{job.type}</h1>
            <h3 className='text-xl font-bold'>{job.title}</h3>
            <p>{job.description}</p>
            <p className='text-indigo-600 mb-5'>{job.salary}</p>
        </div> 

        <div className='border border-gray-100 my-5'></div>

        <div className='flex justify-between items-center'>
            <p className='text-orange-600'>{job.location}</p>

            <Link to={`/job/${job.id}`}>

        <button className='text-white bg-teal-700 p-2 rounded-md'>Read More</button>
        </Link>
        </div>
      </div>
    </div>
  )
}


export default Jobcard
