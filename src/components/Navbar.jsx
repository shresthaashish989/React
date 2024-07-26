import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = false;
  return (
    <div className='border shadow-md p-4 bg-green-400 '>
      <div className='flex justify-between max-w-5xl mx-auto'>
        {/* Left */}
        <div className='text-2xl'>Online Job</div>

        <div className='bg-white w-72 h-22 rounded-full'>
          <input type="text" className='text-center ' placeholder='Search Jobs' />
  
        </div>

     

        {/* Right */}
        <div className='flex gap-4 font-semibold text-lg'>
          {
            user ? (
              <button>Logout</button>
            ) : (

              

              <>
              <ul className='flex gap-6 font-semibold text-lg'>
          <Link to='/'>
          <li className='hover:text-yellow-100'>Home</li></Link>
          
          <Link to='/jobs'>
          <li className='hover:text-yellow-100'>Jobs</li></Link>
          

          <Link to='/Addjob'>
          <li className='hover:text-yellow-100'>Add Jobs</li>
          </Link>
          
        </ul>
              <Link to='/login'>
              <button className='hover:text-yellow-100'>Login</button>
              </Link>
              <Link to='/register'>
              <button className='hover:text-yellow-100'>Register</button>
              </Link>

              
                
                
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
