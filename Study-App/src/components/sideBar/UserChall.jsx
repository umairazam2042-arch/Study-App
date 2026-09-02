import React, { useState } from 'react'
import Calender from './Calender'

const UserChall = ({ darkMode }) => {

  const [showCalendar, setShowCalendar] = useState(false)

  return (
    <>
      <div
        className={`mt-10 text-lg flex flex-col items-start px-8 w-full justify-between font-medium ${
          darkMode
            ? 'text-gray-200'
            : 'text-[#CBD5E1]'
        }`}
      >

        <div className='flex items-center mt-5'>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/050/980/911/small/3d-to-do-list-icon-checklist-clipboard-suitable-for-organization-planning-and-task-tracking-ideal-for-business-education-and-administrative-concepts-png.png"
            alt=""
            className='h-10 w-10 p-2 object-cover'
          />

          <h1 className='hover:text-[#38BDF8]'>
            My Task
          </h1>
        </div>


        <div className='flex items-center mt-5'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5TXf-o9FkK30TlSSCwMYUsYB8O2lgRluPGmWWdNRbLNmpPRWF9GRMj0nL&s=10"
            alt=""
            className='h-10 w-10 object-cover p-2'
          />

          <h1 className='hover:text-[#38BDF8]'>
            Notes
          </h1>
        </div>


        <div className='flex items-center mt-5'>
          <img
            src="https://i.pinimg.com/736x/db/7a/b8/db7ab8dbc8e6e6b9ef62eabffb11c4fd.jpg"
            alt=""
            className='h-10 w-10 object-cover rounded-full p-2'
          />

          <h1 className='hover:text-[#38BDF8]'>
            Goals
          </h1>
        </div>


        {/* Calendar */}
        <div
          className=' items-center mt-5'
          onClick={() => {
            setShowCalendar(true)
          }}
        >

          <img
            src="https://i.pinimg.com/1200x/f7/26/3e/f7263e65ae7ee8c40108f03630faf522.jpg"
            alt=""
            className='h-10 w-10 object-cover p-2'
          />

          <h1 className='hover:text-[#38BDF8]'>
            Calendar
          </h1>

        </div>

      </div>


      {/* Calendar Modal */}

      {showCalendar && (
        <Calender
          darkMode={darkMode}
          onClose={() => {
            setShowCalendar(false)
          }}
        />
      )}

    </>
  )
}

export default UserChall