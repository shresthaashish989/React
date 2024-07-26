import React from 'react'
import Header from '../components/Header'
import HomeCard from '../components/HomeCard'
import Job from '../components/Job'
import Joobs from './Joobs'

const Home = () => {
  return (
    <div className='max-w-5xl mx-auto p-2 my-10 space-y-6 grid-cols-3 '>
      <Header />
     
     
     
     
      

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
       
        <div className='border rounded-xl p-4 shadow-md  bg-white space-y-6 mt-10'>
          <img src="../src/assets/front.jpg" className='w-full h-64 ms-1'  alt="" />
            <h1 className='font-bold text-lg ms-1'>Front Developer</h1>
            <p className='ms-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quasi.</p>
            <button className='bg-slate-800 text-white rounded-lg p-2 hover:bg-slate-100 hover:text-black '>Browse Jobs</button>
        </div>
        <div className='border rounded-xl p-4 shadow-md  bg-white space-y-6 mt-10'>
          <img src="../src/assets/construction.jpg" className='w-full h-64 ms-1'  alt="" />
            <h1 className='font-bold text-lg '>Construction</h1>
            <p className='ms-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quasi.</p>
            <button className='bg-slate-800 text-white rounded-lg p-2 hover:bg-slate-100 hover:text-black '>Browse Jobs</button>
        </div>

        <div className='border rounded-xl p-4 shadow-md  bg-white space-y-6 mt-10'>
          <img src="../src/assets/d.jpg" className='w-full h-64 ms-1'  alt="" />
            <h1 className='font-bold text-lg '>Front Developer</h1>
            <p className='ms-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quasi.</p>
            <button className='bg-slate-800 text-white rounded-lg p-2 hover:bg-slate-100 hover:text-black '>Browse Jobs</button>
        </div>

        <div className='border rounded-xl p-4 shadow-md  bg-white space-y-6 '>
          <img src="../src/assets/front.jpg" className='w-full h-64 ms-1'  alt="" />
            <h1 className='font-bold text-lg ms-1'>Front Developer</h1>
            <p className='ms-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quasi.</p>
            <button className='bg-slate-800 text-white rounded-lg p-2 hover:bg-slate-100 hover:text-black '>Browse Jobs</button>
        </div>
        <div className='border rounded-xl p-4 shadow-md  bg-white space-y-6 '>
          <img src="../src/assets/construction.jpg" className='w-full h-64 ms-1'  alt="" />
            <h1 className='font-bold text-lg '>Construction</h1>
            <p className='ms-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quasi.</p>
            <button className='bg-slate-800 text-white rounded-lg p-2 hover:bg-slate-100 hover:text-black '>Browse Jobs</button>
        </div>

        <div className='border rounded-xl p-4 shadow-md  bg-white space-y-6 '>
          <img src="../src/assets/d.jpg" className='w-full h-64 ms-1'  alt="" />
            <h1 className='font-bold text-lg '>Front Developer</h1>
            <p className='ms-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quasi.</p>
            <button className='bg-slate-800 text-white rounded-lg p-2 hover:bg-slate-100 hover:text-black '>Browse Jobs</button>
        </div>
      </div>
      <h1 className='text-2xl font-bold text-slate-900'>Latest Jobs</h1>
      <HomeCard/>
      <Job/>
    
     
    </div>
  )
}

export default Home
