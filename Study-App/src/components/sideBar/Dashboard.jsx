import { LayoutDashboard } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = ({ darkMode }) => {
  return (
    <div
      className={`text-xl w-full font-bold flex items-center ${
        darkMode ? 'text-gray-200' : 'text-[#CBD5E1]'
      }`}
    >
      <LayoutDashboard
        size={25}
        className='mr-2'
      />

     <Link to="/"
     className=' hover:text-[#38BDF8] cursor-pointer'>
     Dashboard
     </Link>

    </div>
  )
}

export default Dashboard