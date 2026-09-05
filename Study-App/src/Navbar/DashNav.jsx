import React from 'react'
import { Link } from 'react-router-dom'

const DashNav = () => {
  return (
    <div>
     <Link to="/"
     className='hover:text-[#38BDF8] cursor-pointer'>
     Dashboard</Link>
    </div>
  )
}

export default DashNav