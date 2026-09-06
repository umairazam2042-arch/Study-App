import { Link } from 'react-router-dom'
import React from 'react'

const SettingNav = () => {
  return (
    <div>
     <Link to="/setting" 
     className='hover:text-[#38BDF8] cursor-pointer'>
     Setting
     </Link>
    </div>
  )
}

export default SettingNav