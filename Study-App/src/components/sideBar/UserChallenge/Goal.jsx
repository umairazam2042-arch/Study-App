import React from 'react'
import { Link } from 'react-router-dom'
import { Flag } from 'lucide-react'


const Goal = () => {
  return (
    <div className='flex items-center mt-5'>

          <Flag
        size={22}
        className='mr-2'
      />

          <Link to="/goals"
          className='hover:text-[#38BDF8] cursor-pointer'>
          Goals
          </Link>
        </div>
  )
}

export default Goal
