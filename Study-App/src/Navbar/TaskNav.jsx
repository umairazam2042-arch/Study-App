import React from 'react'
import { Link } from 'react-router-dom'

const TaskNav = () => {
  return (
   <div>
     <Link to="/tasks"
     className='hover:text-[#38BDF8] cursor-pointer'>
     Tasks
     </Link>
   
   </div>
  )
}

export default TaskNav