import React from 'react'

const Progress = ({ tasks, darkMode }) => {

  const completeTask = tasks.filter(
    (task) => task.completion === true
  )

  const progress = tasks.length === 0
    ? 0
    : Math.round(
        (completeTask.length / tasks.length) * 100
      )

  return (
    <div className='flex flex-col gap-2 mt-5'>

      <div className='flex items-center gap-2'>

        <img
          src="https://cdn-icons-png.flaticon.com/512/4992/4992624.png"
          alt=""
          className='h-10 w-10 p-2 object-cover'
        />

        <h1
          className={`hover:text-[#38BDF8] ${
            darkMode
              ? 'text-gray-200'
              : 'text-gray-200'
          }`}
        >
          Progress {progress}%
        </h1>

      </div>


      <div className='w-full h-2 bg-gray-300 rounded-full overflow-hidden'>

        <div
          className='h-full bg-[#38BDF8] rounded-full'
          style={{ width: `${progress}%` }}
        ></div>

      </div>

    </div>
  )
}

export default Progress