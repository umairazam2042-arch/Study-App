import React, { useEffect, useState } from 'react'
import {
  CheckCircle2,
  Clock3,
  ListTodo,
  TrendingUp,
  Target
} from 'lucide-react'

const ProgressPage = ({ tasks = [], darkMode }) => {

  // LocalStorage se tasks ka backup
  const [savedTasks, setSavedTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks')

    return storedTasks ? JSON.parse(storedTasks) : []
  })

  // App ke tasks aur LocalStorage ko sync rakhna
  useEffect(() => {
    if (tasks.length > 0) {
      setSavedTasks(tasks)
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks])

  const allTasks = tasks.length > 0 ? tasks : savedTasks

  const completedTasks = allTasks.filter(
    (task) => task.completion === true
  )

  const pendingTasks = allTasks.filter(
    (task) => task.completion !== true
  )

  const totalTasks = allTasks.length

  const progress = totalTasks === 0
    ? 0
    : Math.round(
        (completedTasks.length / totalTasks) * 100
      )


  return (
    <div
      className={`w-full min-h-[calc(100vh-5rem)] p-4 sm:p-8 transition-colors duration-300 ${
        darkMode
          ? 'bg-slate-900 text-white'
          : 'bg-[#F8FAFC] text-[#0F172A]'
      }`}
    >

      <div className='max-w-6xl mx-auto'>

        {/* Header */}

        <div className='flex items-center justify-between mb-8'>

          <div>
            <h1 className='text-2xl sm:text-3xl font-extrabold flex items-center gap-2'>
              📊 Progress
            </h1>

            <p
              className={`text-sm mt-2 ${
                darkMode
                  ? 'text-slate-400'
                  : 'text-slate-500'
              }`}
            >
              Track your task completion and study progress.
            </p>
          </div>

          <div
            className={`px-4 py-2 rounded-xl text-sm font-bold ${
              darkMode
                ? 'bg-slate-800 text-sky-400'
                : 'bg-sky-100 text-sky-700'
            }`}
          >
            {progress}% Complete
          </div>

        </div>


        {/* Main Progress Card */}

        <div
          className={`w-full min-h-0 p-4 sm:p-8 transition-colors duration-300 ${
            darkMode
              ? 'bg-slate-800 border-slate-700'
              : 'bg-white border-slate-200'
          }`}
        >

          <div className='flex items-center justify-between mb-4'>

            <div className='flex items-center gap-3'>

              <div
                className={`p-3 rounded-xl ${
                  darkMode
                    ? 'bg-sky-500/10 text-sky-400'
                    : 'bg-sky-100 text-sky-600'
                }`}
              >
                <TrendingUp size={25} />
              </div>

              <div>
                <h2 className='text-xl font-bold'>
                  Overall Progress
                </h2>

                <p
                  className={`text-sm ${
                    darkMode
                      ? 'text-slate-400'
                      : 'text-slate-500'
                  }`}
                >
                  Keep completing your tasks!
                </p>
              </div>

            </div>

            <span className='text-3xl font-extrabold text-sky-500'>
              {progress}%
            </span>

          </div>


          {/* Progress Bar */}

          <div
            className={`w-full h-4 rounded-full overflow-hidden ${
              darkMode
                ? 'bg-slate-700'
                : 'bg-slate-200'
            }`}
          >

            <div
              className={`h-full rounded-full transition-all duration-700 ${
                progress === 100
                  ? 'bg-emerald-500'
                  : 'bg-sky-500'
              }`}
              style={{
                width: `${progress}%`
              }}
            ></div>

          </div>


          <div className='flex justify-between mt-3 text-sm'>

            <span
              className={
                darkMode
                  ? 'text-slate-400'
                  : 'text-slate-500'
              }
            >
              {completedTasks.length} completed
            </span>

            <span
              className={
                darkMode
                  ? 'text-slate-400'
                  : 'text-slate-500'
              }
            >
              {pendingTasks.length} pending
            </span>

          </div>

        </div>


        {/* Statistics Cards */}

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6'>

          {/* Total */}

          <div
            className={`p-5 rounded-2xl border shadow-sm ${
              darkMode
                ? 'bg-slate-800 border-slate-700'
                : 'bg-white border-slate-200'
            }`}
          >

            <div className='flex items-center justify-between'>

              <div>
                <p
                  className={`text-sm ${
                    darkMode
                      ? 'text-slate-400'
                      : 'text-slate-500'
                  }`}
                >
                  Total Tasks
                </p>

                <h2 className='text-3xl font-bold mt-1'>
                  {totalTasks}
                </h2>
              </div>

              <div className='p-3 rounded-xl bg-sky-500/10 text-sky-500'>
                <ListTodo size={25} />
              </div>

            </div>

          </div>


          {/* Completed */}

          <div
            className={`p-5 rounded-2xl border shadow-sm ${
              darkMode
                ? 'bg-slate-800 border-slate-700'
                : 'bg-white border-slate-200'
            }`}
          >

            <div className='flex items-center justify-between'>

              <div>
                <p
                  className={`text-sm ${
                    darkMode
                      ? 'text-slate-400'
                      : 'text-slate-500'
                  }`}
                >
                  Completed
                </p>

                <h2 className='text-3xl font-bold mt-1 text-emerald-500'>
                  {completedTasks.length}
                </h2>
              </div>

              <div className='p-3 rounded-xl bg-emerald-500/10 text-emerald-500'>
                <CheckCircle2 size={25} />
              </div>

            </div>

          </div>


          {/* Pending */}

          <div
            className={`p-5 rounded-2xl border shadow-sm ${
              darkMode
                ? 'bg-slate-800 border-slate-700'
                : 'bg-white border-slate-200'
            }`}
          >

            <div className='flex items-center justify-between'>

              <div>
                <p
                  className={`text-sm ${
                    darkMode
                      ? 'text-slate-400'
                      : 'text-slate-500'
                  }`}
                >
                  Pending
                </p>

                <h2 className='text-3xl font-bold mt-1 text-amber-500'>
                  {pendingTasks.length}
                </h2>
              </div>

              <div className='p-3 rounded-xl bg-amber-500/10 text-amber-500'>
                <Clock3 size={25} />
              </div>

            </div>

          </div>

        </div>


        {/* Task Progress List */}

        <div
          className={`rounded-2xl border p-5 sm:p-6 shadow-sm ${
            darkMode
              ? 'bg-slate-800 border-slate-700'
              : 'bg-white border-slate-200'
          }`}
        >

          <div className='flex items-center gap-2 mb-5'>

            <Target
              size={22}
              className='text-sky-500'
            />

            <h2 className='text-xl font-bold'>
              Task Progress
            </h2>

          </div>


          {allTasks.length === 0 ? (

            <div className='text-center py-10'>

              <div className='text-4xl mb-3'>
                📋
              </div>

              <p
                className={`font-medium ${
                  darkMode
                    ? 'text-slate-300'
                    : 'text-slate-600'
                }`}
              >
                No tasks available yet.
              </p>

              <p
                className={`text-sm mt-1 ${
                  darkMode
                    ? 'text-slate-500'
                    : 'text-slate-400'
                }`}
              >
                Add some tasks to start tracking your progress.
              </p>

            </div>

          ) : (

            <div className='space-y-4'>

              {allTasks.map((task) => (

                <div
                  key={task.id}
                  className={`p-4 rounded-xl border ${
                    darkMode
                      ? 'bg-slate-900 border-slate-700'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >

                  <div className='flex items-center justify-between gap-3'>

                    <div className='flex items-center gap-3 min-w-0'>

                      {task.completion ? (
                        <CheckCircle2
                          size={20}
                          className='text-emerald-500 shrink-0'
                        />
                      ) : (
                        <Clock3
                          size={20}
                          className='text-amber-500 shrink-0'
                        />
                      )}

                      <span
                        className={`font-medium truncate ${
                          task.completion
                            ? 'line-through opacity-60'
                            : ''
                        }`}
                      >
                        {task.title}
                      </span>

                    </div>

                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${
                        task.completion
                          ? 'bg-emerald-500/10 text-emerald-500'
                          : 'bg-amber-500/10 text-amber-500'
                      }`}
                    >
                      {task.completion
                        ? 'Completed'
                        : 'Pending'}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  )
}

export default ProgressPage