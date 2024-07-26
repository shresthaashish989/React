import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-[90vh] flex justify-center items-center'>
        <div className='border shadow-md rounded-xl max-w-sm w-full p-5'>
            <h1 className='text-teal-700 font-semibold text-3xl text-center'>Login</h1>
            <form className='flex flex-col gap-4 mt-4'>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
               
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button className='bg-teal-700 text-white font-semibold rounded-md p-2'>Login</button>

                <p>Does have an account? <Link to='/register'>Register</Link></p>


            </form>

        </div>
      
    </div>
  )
}

export default Login
