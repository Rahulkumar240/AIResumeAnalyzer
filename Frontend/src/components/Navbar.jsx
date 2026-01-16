import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-purple-600 px-16 py-6 flex justify-between text-white items-center'>
        <div>
            <h1 className='text-white text-2xl font-extralight'>Resume<span className='text-yellow-500'>GPT</span></h1>
        </div>
        <div className='font-light text-lg space-x-6'>
            <Link to="/">Home</Link>
            <Link to="/services" className='bg-blue-800 px-4 py-2 rounded-full hover:bg-yellow-600 transition'>Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="Signup">Sign Up</Link>
        </div>
    </div>
  )
}

export default Navbar