import React, { useState } from 'react'
import { Trash2 } from 'lucide-react'

const SettingPage = ({
  tasks,
  setTasks,
  notes,
  setNotes,
  darkMode,
  setDarkMode
}) => {

  const [showConfirm, setShowConfirm] = useState(false)

  const clearAllData = () => {
    setTasks([])
    setNotes([])

    localStorage.removeItem('tasks')
    localStorage.removeItem('notes')

    setShowConfirm(false)
  }

  return (
    <div
      className={`w-full min-h-[calc(100vh-5rem)] p-4 sm:p-8 ${
        darkMode
          ? 'bg-slate-900 text-white'
          : 'bg-[#F8FAFC] text-[#0F172A]'
      }`}
    >

      <div className='max-w-3xl mx-auto'>

        <h1 className='text-3xl font-bold mb-8'>
          ⚙️ Settings
        </h1>

        {/* Dark Mode */}

        <div
          className={`p-5 rounded-2xl border mb-5 ${
            darkMode
              ? 'bg-slate-800 border-slate-700'
              : 'bg-white border-slate-200'
          }`}
        >

          <div className='flex items-center justify-between gap-4'>

            <div>
              <h2 className='text-lg font-semibold'>
                Appearance
              </h2>

              <p className='text-sm text-gray-500 mt-1'>
                Change between dark and light mode.
              </p>
            </div>

            <button
              onClick={() => {
                setDarkMode(!darkMode)
              }}
              className='px-4 py-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-100 transition'
            >
              {darkMode
                ? '☀️ Light Mode'
                : '🌙 Dark Mode'}
            </button>

          </div>

        </div>


        {/* Clear Data */}

        <div
          className={`p-5 rounded-2xl border ${
            darkMode
              ? 'bg-slate-800 border-slate-700'
              : 'bg-white border-slate-200'
          }`}
        >

          <div className='flex items-center justify-between gap-4'>

            <div>
              <h2 className='text-lg font-semibold'>
                Clear All Data
              </h2>

              <p className='text-sm text-gray-500 mt-1'>
                Delete all your tasks and notes.
              </p>
            </div>

            <button
              onClick={() => {
                setShowConfirm(true)
              }}
              className='flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white cursor-pointer hover:bg-red-600 transition'
            >
              <Trash2 size={17} />
              Clear
            </button>

          </div>

        </div>

      </div>


      {/* Confirmation Modal */}

      {showConfirm && (

        <div className='fixed inset-0 flex items-center justify-center bg-black/40 z-50'>

          <div
            className={`w-80 rounded-2xl p-5 ${
              darkMode
                ? 'bg-slate-800 text-white'
                : 'bg-white text-[#0F172A]'
            }`}
          >

            <h2 className='text-xl font-bold mb-2'>
              Clear All Data?
            </h2>

            <p className='text-sm mb-5'>
              This will delete all your tasks and notes.
            </p>

            <div className='flex justify-end gap-2'>

              <button
                onClick={() => {
                  setShowConfirm(false)
                }}
                className='px-4 py-2 rounded-lg border border-gray-400 cursor-pointer'
              >
                Cancel
              </button>

              <button
                onClick={clearAllData}
                className='px-4 py-2 rounded-lg bg-red-500 text-white cursor-pointer'
              >
                Clear
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  )
}

export default SettingPage