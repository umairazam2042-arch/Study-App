import React from 'react'
import { Link } from 'react-router-dom'

const NotesNav = () => {
  return (
    <div>
     <Link to="/notes"
     className='hover:text-[#38BDF8] cursor-pointer'>
     Notes
     </Link>
    </div>
  )
}

export default NotesNav