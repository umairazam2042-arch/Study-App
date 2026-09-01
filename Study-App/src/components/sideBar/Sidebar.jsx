import React from 'react'
import Dashboard from './Dashboard'
import UserChall from './UserChall'
import Help from './Help'
import Profile from './Profile'

const Sidebar = ({
  tasks,
  setTasks,
  notes,
  setNotes,
  darkMode,
  setDarkMode,
  sidebarOpen,
  setSidebarOpen
}) => {

  return (
    <>
      {/* Mobile Background Overlay */}

      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black/40 z-40 md:hidden'
          onClick={() => {
            setSidebarOpen(false)
          }}
        ></div>
      )}


      {/* Sidebar */}

      <div
        className={`

          fixed md:sticky
          top-20 md:top-20
          left-0
          z-50 md:z-40

          w-64 md:w-[15%]

          min-h-[calc(100vh-5rem)]

          bg-[#0F172A]

          border-r-2 border-[#CBD5E1]

          text-[#CBD5E1]

          cursor-pointer

          p-3

          transition-transform duration-300 ease-in-out

          ${
            sidebarOpen
              ? 'translate-x-0'
              : '-translate-x-full md:translate-x-0'
          }

          ${
            darkMode
              ? 'border-r-2 border-[#CBD5E1]'
              : 'border-none'
          }

        `}
      >

        <Dashboard darkMode={darkMode} />

        <UserChall darkMode={darkMode} />

        <Help
          tasks={tasks}
          setTasks={setTasks}
          notes={notes}
          setNotes={setNotes}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Profile darkMode={darkMode} />

      </div>
    </>
  )
}

export default Sidebar