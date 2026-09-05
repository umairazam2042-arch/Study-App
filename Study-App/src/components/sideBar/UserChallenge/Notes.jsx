import React from 'react'
import { Link } from 'react-router-dom'

const Notes = () => {
  return (
     <div className='flex items-center mt-5'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5TXf-o9FkK30TlSSCwMYUsYB8O2lgRluPGmWWdNRbLNmpPRWF9GRMj0nL&s=10"
            alt=""
            className='h-10 w-10 object-cover p-2'
          />

          <Link to="/notes"
          className='hover:text-[#38BDF8] cursor-pointer'>
          Notes</Link>
        </div>
  )
}

export default Notes