import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = ({ darkMode }) => {
  return (
    <div
      className={`text-xl w-full font-bold flex items-center ${
        darkMode ? 'text-gray-200' : 'text-[#CBD5E1]'
      }`}
    >
      <img
        src="https://png.pngtree.com/png-clipart/20230328/original/pngtree-dashboard-silhouette-icon-transparent-background-png-image_9007538.png"
        alt=""
        className='h-15 w-15 p-2 object-cover'
      />

     <Link to="/"
     className=' hover:text-[#38BDF8] cursor-pointer'>
     Dashboard
     </Link>

    </div>
  )
}

export default Dashboard