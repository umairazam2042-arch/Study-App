import React from 'react'
import { Link } from 'react-router-dom'

const MyTask = () => {
  return (
     
      <div className='flex items-center mt-5'>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/050/980/911/small/3d-to-do-list-icon-checklist-clipboard-suitable-for-organization-planning-and-task-tracking-ideal-for-business-education-and-administrative-concepts-png.png"
            alt=""
            className='h-10 w-10 p-2 object-cover'
          />

         <Link to="/tasks"
         className='hover:text-[#38BDF8] cursor-pointer'>
         My Task</Link>
      
       
     </div>
  )
}

export default MyTask

