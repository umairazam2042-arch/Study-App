import React from 'react'
import { Link } from 'react-router-dom'
import {  NotebookPen } from 'lucide-react'


const Notes = () => {
  return (
     <div className='flex items-center mt-5'>
          <NotebookPen
        size={22}
        className='mr-2'
      />

          <Link to="/notes"
          className='hover:text-[#38BDF8] cursor-pointer'>
          Notes</Link>
        </div>
  )
}

export default Notes