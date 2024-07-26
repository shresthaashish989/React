import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='h-[90vh] flex justify-center items-center'>
        <div className='border shadow-md rounded-xl max-w-sm w-full p-5'>
            <h1 className='text-teal-700 font-semibold text-3xl text-center'>Register</h1>
            <form className='flex flex-col gap-4 mt-4'>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button className='bg-teal-700 text-white font-semibold rounded-md p-2'>Register</button>

                <p>Already has an account? <Link to='/login'>Login</Link></p>


            </form>

        </div>
      
    </div>
  )
}

export default Register
