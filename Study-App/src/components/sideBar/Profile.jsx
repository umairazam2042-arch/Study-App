import { UserRoundPen } from 'lucide-react'
import React from 'react'

const Profile = ({ darkMode }) => {
  return (
    <div
      className={`text-xl font-medium px-4 mt-40 ${
        darkMode ? 'text-gray-200' : 'text-[#CBD5E1]'
      }`}
    >

      <div className='flex items-center'>

         <UserRoundPen
        size={22}
        className='mr-2'
      />

        <h1 className='hover:text-[#38BDF8] cursor-pointer'>
          My Profile
        </h1>

      </div>

    </div>
  )
}

export default Profile