import React from 'react'
import Welcome from './Welcome'
import YourTask from './YourTask'
import TodayTask from './TodayTask'
import RecentTask from './RecentTask'
import GoalPage from './GoalPage'

const Contant = ({
  tasks,
  setTasks,
  notes,
  setNotes,
  darkMode,
  setDarkMode
}) => {

  return (
    <div
      className={`w-full flex-1 min-h-[calc(100vh-5rem)] px-4 sm:px-6 lg:px-10 py-6 transition-all duration-300 relative ${
        darkMode
          ? 'bg-slate-900 text-white'
          : 'bg-[#F8FAFC] text-[#64748B]'
      }`}
    >
      <div className='max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8'>

        <Welcome darkMode={darkMode} />

        <YourTask
          tasks={tasks}
          darkMode={darkMode}
        />

        <TodayTask
          tasks={tasks}
          setTasks={setTasks}
          darkMode={darkMode}
        />

        <RecentTask
          notes={notes}
          setNotes={setNotes}
          darkMode={darkMode}
        />

        <GoalPage
          darkMode={darkMode}
        />

      </div>
    </div>
  )
}

export default Contant