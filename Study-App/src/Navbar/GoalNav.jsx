import React from 'react'
import { Link } from 'react-router-dom'

const GoalsNav = () => {
  return (
   <div>
    <Link to="/goals"
    className='hover:text-[#38BDF8] cursor-pointer'>
    Goals
    </Link>
   </div>
  )
}

export default GoalsNav

