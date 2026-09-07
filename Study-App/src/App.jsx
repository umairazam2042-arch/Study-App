import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar.jsx'
import Sidebar from './components/sideBar/Sidebar'
import Contant from './components/MainContant/Contant'
import { Routes , Route  } from 'react-router-dom'
import TodayTask from './components/MainContant/TodayTask'
import RecentTask from './components/MainContant/RecentTask'
import Goal from './components/sideBar/UserChallenge/Goal'
import SettingPAge from './components/MainContant/SettingPage'
import GoalPage from './components/MainContant/GoalPage'
import CalenderPage from './components/MainContant/CalenderPage'
import ProgressPage from './components/MainContant/ProgressPage'


const App = () => {

  const [tasks, setTasks] = useState(() => {
    const saveTask = localStorage.getItem('tasks')

    return saveTask ? JSON.parse(saveTask) : []
  })

  const [notes, setNotes] = useState(() => {
    const saveNote = localStorage.getItem('notes')

    return saveNote ? JSON.parse(saveNote) : []
  })

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')

    return savedMode === 'true'
  })

  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <div
      className={`min-h-screen overflow-x-hidden ${
        darkMode ? 'bg-slate-900' : 'bg-[#F8FAFC]'
      }`}
    >

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/* //this line changes for navbar screen size and sidebar open or close */}

      <div className='flex h-[calc(100vh-5rem)] w-full overflow-hidden shrink-0'>

        <Sidebar
          tasks={tasks}
          setTasks={setTasks}
          notes={notes}
          setNotes={setNotes}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

       <div className='flex-1 min-w-0 overflow-y-auto scrollbar-none'>
         <Routes>
          <Route 
          path='/'
          element={
            <Contant
              tasks={tasks}
              setTasks={setTasks}
              notes={notes}
              setNotes={setNotes}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
          />

          <Route
  path='/tasks'
  element={
    <TodayTask
      tasks={tasks}
      setTasks={setTasks}
      darkMode={darkMode}
      isFullPage={true}
    />
  }
/>

<Route
  path='/notes'
  element={
    <RecentTask
      notes={notes}
      setNotes={setNotes}
      darkMode={darkMode}
      isFullPage={true}
    />
  }
/>

<Route
  path='/goals'
  element={
    <GoalPage
      darkMode={darkMode}
    />
  }
/>

<Route
  path='/calender'
  element={
    <CalenderPage
      darkMode={darkMode}
    />
  }
/>

<Route
  path='/progress'
  element={
    <ProgressPage
      tasks={tasks}
      darkMode={darkMode}
    />
  }
/>

<Route
  path='/setting'
  element={
    <SettingPAge
      tasks={tasks}
      setTasks={setTasks}
      notes={notes}
      setNotes={setNotes}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  }
/>





                 
        </Routes>
       </div>

         

      </div>

    </div>
  )
}

export default App