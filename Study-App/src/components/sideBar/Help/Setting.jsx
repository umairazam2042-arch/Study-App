import React from 'react'
import { Link } from 'react-router-dom'
import { Settings } from 'lucide-react'

const Setting = () => {
  return (
    <div className='flex items-center mt-5'>

      <Settings
        size={22}
        className='mr-2'
      />

      <Link
        to="/setting"
        className='hover:text-[#38BDF8] cursor-pointer'
      >
        Setting
      </Link>

    </div>
  )
}

export default Setting