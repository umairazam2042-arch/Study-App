import React from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays } from 'lucide-react'

const Calender = () => {
  return (
     <div className='flex items-center mt-5'>
      
         <CalendarDays
        size={22}
        className='mr-2'
      />

          <Link to="/calender"
          className='hover:text-[#38BDF8] cursor-pointer'>
          Calender</Link>
        </div>
  )
}

export default Calender