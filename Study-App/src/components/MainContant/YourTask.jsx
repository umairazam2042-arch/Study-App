import React from 'react'

const YourTask = ({ tasks, darkMode }) => {

  const completeTask = tasks.filter(
    (task) => task.completion === true
  )

  const pendingTask = tasks.filter(
    (task) => task.completion === false
  )

  const cardStyle = darkMode
    ? 'bg-slate-800 border-slate-600 text-white'
    : 'bg-[#FFFFFF] border-sky-400 text-[#0F172A]'

  return (
    <div className='p-2'>

      <div className='min-h-50 w-full flex flex-wrap justify-center sm:justify-around gap-4 p-3 sm:p-5'>

        {/* Total Tasks */}

        <div
          className={`min-h-35 sm:min-h-full w-full sm:w-50 rounded-2xl text-2xl font-medium p-5 border-2 ${cardStyle}`}
        >
          <h1 className='text-xl text-center font-bold'>
            Total Tasks
          </h1>

          <h1 className='text-4xl text-center font-bold mt-5'>
            {tasks.length}
          </h1>
        </div>


        {/* Complete Tasks */}

        <div
          className={`min-h-35 sm:min-h-full w-full sm:w-50 rounded-2xl p-5 border-2 ${cardStyle}`}
        >
          <h1 className='text-xl text-center font-bold'>
            Complete Tasks
          </h1>

          <h1 className='text-4xl text-center font-bold mt-5'>
            {completeTask.length}
          </h1>
        </div>


        {/* Pending Tasks */}

        <div
          className={`min-h-35 sm:min-h-full w-full sm:w-50 rounded-2xl p-5 border-2 ${cardStyle}`}
        >
          <h1 className='text-xl text-center font-bold'>
            Pending Tasks
          </h1>

          <h1 className='text-4xl text-center font-bold mt-5'>
            {pendingTask.length}
          </h1>
        </div>

      </div>

    </div>
  )
}

export default YourTask