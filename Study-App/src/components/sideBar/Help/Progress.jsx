import React from 'react'
import { Link } from 'react-router-dom'
import { ChartNoAxesColumnIncreasing } from 'lucide-react'

const Progress = () => {
  return (
    <div className='flex flex-col gap-2 mt-5'>

      <div className='flex items-center gap-2'>

        <ChartNoAxesColumnIncreasing
          size={22}
          className='text-sky-500'
        />

        <Link
          to='/progress'
          className='hover:text-[#38BDF8] cursor-pointer'
        >
          Progress
        </Link>

      </div>

    </div>
  )
}

export default Progress