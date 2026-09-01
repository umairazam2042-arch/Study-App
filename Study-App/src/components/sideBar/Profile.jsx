import React from 'react'

const Profile = ({ darkMode }) => {
  return (
    <div
      className={`text-xl font-medium px-4 mt-40 ${
        darkMode ? 'text-gray-200' : 'text-[#CBD5E1]'
      }`}
    >

      <div className='flex items-center'>

        <img
          src="https://i.pinimg.com/736x/e7/08/d5/e708d550a4b9421c577ea3f01c9df5fa.jpg"
          alt=""
          className='h-10 rounded-full w-10 p-2 object-cover'
        />

        <h1 className='hover:text-[#38BDF8] cursor-pointer'>
          My Profile
        </h1>

      </div>

    </div>
  )
}

export default Profile