import React, { useState, useEffect } from 'react'

const GoalPage = ({ darkMode }) => {

  const [goal, setGoal] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')

  // Feature #9: LocalStorage se initial goals load karna
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem('my_goals_data')
    return savedGoals ? JSON.parse(savedGoals) : []
  })

  // Feature #9: LocalStorage mein save karna
  useEffect(() => {
    localStorage.setItem('my_goals_data', JSON.stringify(goals))
  }, [goals])

  const submitHandler = (e) => {
    e.preventDefault()

    if (
      goal.trim() === '' ||
      description.trim() === ''
    ) {
      return
    }

    setGoals([
      ...goals,
      {
        id: Date.now(),
        title: goal,
        description: description,
        progress: 0,
        deadline: deadline,
      }
    ])

    setGoal('')
    setDescription('')
    setDeadline('')
  }

  // Feature #8: Delete Goal
  const deleteGoalHandler = (id) => {
    setGoals(goals.filter((item) => item.id !== id))
  }

  return (
    <div
      className={`w-full min-h-[calc(100vh-5rem)] p-4 sm:p-8 transition-colors duration-300 ${
        darkMode
          ? 'bg-slate-900 text-white'
          : 'bg-[#F8FAFC] text-[#0F172A]'
      }`}
    >
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='flex items-center justify-between mb-8'>
          <h1 className='text-2xl sm:text-3xl font-extrabold flex items-center gap-2 tracking-tight'>
            🎯 <span>My Goals</span>
          </h1>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
            darkMode ? 'bg-slate-800 text-sky-400' : 'bg-sky-100 text-sky-700'
          }`}>
            Total Goals: {goals.length}
          </span>
        </div>

        {/* Responsive Form Layout */}
        <form
          onSubmit={submitHandler}
          className={`p-4 sm:p-5 rounded-2xl border transition-all shadow-sm mb-10 ${
            darkMode 
              ? 'bg-slate-800/80 border-slate-700' 
              : 'bg-white border-slate-200'
          }`}
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center'>
            {/* Goal Input */}
            <div className='lg:col-span-4'>
              <input
                type='text'
                placeholder='Goal Title...'
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className={`w-full border rounded-xl px-3.5 py-2.5 outline-none text-sm transition focus:ring-2 focus:ring-sky-400 ${
                  darkMode
                    ? 'bg-slate-900 border-slate-700 text-white placeholder:text-gray-400'
                    : 'bg-slate-50 border-gray-300 text-black placeholder:text-gray-400'
                }`}
              />
            </div>

            {/* Description Input */}
            <div className='lg:col-span-4'>
              <input
                type='text'
                placeholder='Short Description...'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`w-full border rounded-xl px-3.5 py-2.5 outline-none text-sm transition focus:ring-2 focus:ring-sky-400 ${
                  darkMode
                    ? 'bg-slate-900 border-slate-700 text-white placeholder:text-gray-400'
                    : 'bg-slate-50 border-gray-300 text-black placeholder:text-gray-400'
                }`}
              />
            </div>

            {/* Deadline Input */}
            <div className='lg:col-span-2'>
              <input
                type='date'
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className={`w-full border rounded-xl px-3 py-2.5 outline-none text-sm transition focus:ring-2 focus:ring-sky-400 ${
                  darkMode
                    ? 'bg-slate-900 border-slate-700 text-white'
                    : 'bg-slate-50 border-gray-300 text-black'
                }`}
              />
            </div>

            {/* Submit Button */}
            <div className='lg:col-span-2 sm:col-span-2'>
              <button
                type='submit'
                className='w-full bg-sky-500 hover:bg-sky-600 active:scale-[0.98] text-white py-2.5 rounded-xl font-semibold text-sm transition shadow-sm cursor-pointer'
              >
                + Add Goal
              </button>
            </div>
          </div>
        </form>

        {/* Empty State UI */}
        {goals.length === 0 && (
          <div className={`text-center py-16 px-4 rounded-2xl border-2 border-dashed ${
            darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-400'
          }`}>
            <div className='text-4xl mb-3'>📌</div>
            <p className='text-lg font-medium'>No goals added yet!</p>
            <p className='text-sm mt-1 opacity-75'>Add your first goal above to start tracking progress.</p>
          </div>
        )}

        {/* Responsive Grid for Goal Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {goals.map((item) => (
            <div
              key={item.id}
              className={`p-5 rounded-2xl border flex flex-col justify-between shadow-sm hover:shadow-md transition duration-200 ${
                darkMode
                  ? 'bg-slate-800/90 border-slate-700 text-white'
                  : 'bg-white border-slate-200 text-[#0F172A]'
              }`}
            >
              <div>
                {/* Title & Deadline Header */}
                <div className='flex justify-between items-start gap-2 mb-2'>
                  <h2 className='text-lg font-bold break-words leading-tight flex-1'>
                    {item.title}
                  </h2>
                  {item.deadline && (
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md shrink-0 ${
                      darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'
                    }`}>
                      📅 {item.deadline}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className={`text-sm break-words line-clamp-3 mb-4 ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>

                {/* Progress Bar Section */}
                <div className='mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/50'>
                  <div className='flex justify-between text-xs font-semibold mb-1.5'>
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Progress</span>
                    <span className='text-sky-500'>{item.progress}%</span>
                  </div>

                  <input
                    type='range'
                    min='0'
                    max='100'
                    step='5'
                    value={item.progress}
                    onChange={(e) => {
                      const newProgress = Number(e.target.value)
                      setGoals(
                        goals.map((goalItem) => {
                          if (goalItem.id === item.id) {
                            return {
                              ...goalItem,
                              progress: newProgress
                            }
                          }
                          return goalItem
                        })
                      )
                    }}
                    className='w-full accent-sky-500 cursor-pointer h-1.5 bg-slate-200 rounded-lg appearance-none dark:bg-slate-700'
                  />

                  <div className='w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mt-2'>
                    <div
                      className='h-full bg-sky-400 rounded-full transition-all duration-300'
                      style={{
                        width: `${item.progress}%`
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Status & Actions */}
              <div className='mt-5 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center'>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    item.progress === 100
                      ? 'bg-emerald-500/10 text-emerald-500'
                      : 'bg-amber-500/10 text-amber-500'
                  }`}
                >
                  {item.progress === 100 ? '✓ Completed' : '⏳ Pending'}
                </span>

                <button
                  onClick={() => deleteGoalHandler(item.id)}
                  className='bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white text-xs px-3 py-1.5 rounded-lg font-semibold transition duration-200 cursor-pointer'
                >
                  Delete
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GoalPage