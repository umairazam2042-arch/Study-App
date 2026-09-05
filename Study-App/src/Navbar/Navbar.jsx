import React from 'react'
import { Menu, X } from 'lucide-react'
import DashNav from './DashNav'
import GoalsNav from './GoalNav'
import TaskNav from './TaskNav'
import NotesNav from './NotesNav'
import SettingNav from './SettingNav'

const Navbar = ({
  sidebarOpen,
  setSidebarOpen
}) => {

  return (
    <div className='sticky top-0 z-50 h-20 w-full bg-[#1E293B]/95 backdrop-blur-md border-b border-white/10 px-3 sm:px-5 flex items-center justify-between cursor-pointer p-1'>

      <div className='flex items-center'>

        <button
          type='button'
          className='md:hidden text-white mr-2 cursor-pointer'
          onClick={() => {
            setSidebarOpen(!sidebarOpen)
          }}
        >
          {sidebarOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

        <img
          src='https://png.pngtree.com/png-clipart/20240614/original/pngtree-bundle-of-books-png-image_15323859.png'
          className='h-12 w-12 object-cover p-2'
          alt=''
        />

        <h1 className='text-2xl sm:text-3xl font-semibold hover:text-[#F8FAFC] text-[#38BDF8]'>
          Study Flow
        </h1>

      </div>


      <div className='hidden md:flex text-lg font-medium text-[#F8FAFC] w-[60%] h-full items-center justify-around px-3'>

       <DashNav />
       <GoalsNav />
       <TaskNav />
       <NotesNav />
      <SettingNav />

      </div>

    </div>
  )
}

export default Navbar