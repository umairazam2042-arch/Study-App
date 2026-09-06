import { Logs } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


const MyTask = () => {
  return (
     
      <div className='flex items-center mt-5'>
          <Logs
        size={22}
        className='mr-2'
      />

         <Link to="/tasks"
         className='hover:text-[#38BDF8] cursor-pointer'>
         My Task</Link>
      
       
     </div>
  )
}

export default MyTask

