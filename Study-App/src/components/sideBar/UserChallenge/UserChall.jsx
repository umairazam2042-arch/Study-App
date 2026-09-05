import React, { useState } from 'react'
import Calender from './Calender'
import MyTask from './MyTask'
import Notes from './Notes'
import Goal from './Goal'

const UserChall = ({ darkMode }) => {

 

  return (
  
      <div
        className={`mt-10 text-lg flex flex-col items-start px-8 w-full justify-between font-medium ${
          darkMode
            ? 'text-gray-200'
            : 'text-[#CBD5E1]'
        }`}
      >

        <MyTask />
        <Notes />
       <Goal />
       <Calender />

      </div>


     
  )
}

export default UserChall