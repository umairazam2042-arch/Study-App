import React from 'react'

const YourTask = ({ tasks, darkMode }) => {

  const completeTask = tasks.filter(
    (task) => task.completion === true
  )

  const pendingTask = tasks.filter(
    (task) => task.completion === false
  )

  const cardStyle = darkMode
    ? 'bg-slate-800/80 border-slate-700 text-white shadow-sm'
    : 'bg-white border-slate-200 text-[#0F172A] shadow-sm'

  return (
    <div className='w-full transition-all duration-300'>

      {/* Grid container for stats cards */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-full'>

        {/* Total Tasks */}
        <div
          className={`rounded-2xl p-5 border flex flex-col items-center justify-center transition-all duration-200 hover:shadow-md ${cardStyle}`}
        >
          <h1 className='text-sm sm:text-base text-center font-semibold text-sky-500 uppercase tracking-wide'>
            Total Tasks
          </h1>

          <h1 className='text-3xl sm:text-4xl text-center font-extrabold mt-2'>
            {tasks.length}
          </h1>
        </div>


        {/* Complete Tasks */}
        <div
          className={`rounded-2xl p-5 border flex flex-col items-center justify-center transition-all duration-200 hover:shadow-md ${cardStyle}`}
        >
          <h1 className='text-sm sm:text-base text-center font-semibold text-emerald-500 uppercase tracking-wide'>
            Complete Tasks
          </h1>

          <h1 className='text-3xl sm:text-4xl text-center font-extrabold mt-2 text-emerald-500'>
            {completeTask.length}
          </h1>
        </div>


        {/* Pending Tasks */}
        <div
          className={`rounded-2xl p-5 border flex flex-col items-center justify-center transition-all duration-200 hover:shadow-md ${cardStyle}`}
        >
          <h1 className='text-sm sm:text-base text-center font-semibold text-amber-500 uppercase tracking-wide'>
            Pending Tasks
          </h1>

          <h1 className='text-3xl sm:text-4xl text-center font-extrabold mt-2 text-amber-500'>
            {pendingTask.length}
          </h1>
        </div>

      </div>

    </div>
  )
}

export default YourTask