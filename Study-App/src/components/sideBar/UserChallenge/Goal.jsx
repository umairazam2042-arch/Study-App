import React from 'react'
import { Link } from 'react-router-dom'

const Goal = () => {
  return (
    <div className='flex items-center mt-5'>
          <img
            src="https://i.pinimg.com/736x/db/7a/b8/db7ab8dbc8e6e6b9ef62eabffb11c4fd.jpg"
            alt=""
            className='h-10 w-10 object-cover rounded-full p-2'
          />

          <Link to="/goals"
          className='hover:text-[#38BDF8] cursor-pointer'>
          Goals
          </Link>
        </div>
  )
}

export default Goal
