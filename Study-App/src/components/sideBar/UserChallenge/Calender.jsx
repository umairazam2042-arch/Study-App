import React from 'react'
import { Link } from 'react-router-dom'

const Calender = () => {
  return (
     <div className='flex items-center mt-5'>
          <img
            src="https://i.pinimg.com/1200x/f7/26/3e/f7263e65ae7ee8c40108f03630faf522.jpg"
            alt=""
            className='h-10 w-10 object-cover  p-2'
          />

          <Link to="/calender"
          className='hover:text-[#38BDF8] cursor-pointer'>
          Calender</Link>
        </div>
  )
}

export default Calender