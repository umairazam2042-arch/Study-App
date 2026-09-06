import React from 'react'
import { Link } from 'react-router-dom'

const Setting = () => {
  return (
    <div className='flex items-center mt-5'>
          <img
            src="https://i.pinimg.com/736x/a6/91/31/a691316f114b58e298f9e382235b890e.jpg"
            alt=""
            className='h-10 w-10 object-cover rounded-full p-2'
          />

          <Link to="/setting"
          className='hover:text-[#38BDF8] cursor-pointer'>
          Setting
          </Link></div>
  )
}

export default Setting

// 