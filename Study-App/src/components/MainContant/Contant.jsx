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
      className={`w-[80%] md:w-[85%] min-h-[calc(100vh-5rem)] px-3 sm:px-5 md:px-10 py-5 relative transition-all duration-300  ${
        darkMode
          ? 'bg-slate-900 text-white'
          : 'bg-[#F8FAFC] text-[#64748B]'
      }`}
    >

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
  )
}

export default Contant