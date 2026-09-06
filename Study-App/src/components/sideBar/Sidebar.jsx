import React from 'react'
import Dashboard from './Dashboard'
import UserChall from './UserChallenge/UserChall'
import Help from './Help/Help'
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

          h-[calc(100vh-5rem)]

          bg-[#0F172A]

          border-r-2 border-[#CBD5E1]

          text-[#CBD5E1]

          p-3

          overflow-y-auto

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

          flex flex-col
        `}
      >

        {/* Dashboard */}

        <div className='mb-6'>
          <Dashboard darkMode={darkMode} />
        </div>


        {/* Main Navigation */}

        <div className='mb-6'>
          <UserChall darkMode={darkMode} />
        </div>


        {/* Progress + Setting */}

        <div className='mb-6'>
          <Help
            tasks={tasks}
            setTasks={setTasks}
            notes={notes}
            setNotes={setNotes}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>


        {/* Profile */}

        <div className='mt-2'>
          <Profile darkMode={darkMode} />
        </div>

      </div>
    </>
  )
}

export default Sidebar