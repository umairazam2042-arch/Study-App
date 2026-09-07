import { useState } from 'react'
import Card from './Card'

const RecentTask = ({ notes, setNotes, darkMode }) => {

  const [notetitle, setNotetitle] = useState('')
  const [notedescrption, setNotedescrption] = useState('')

  const submitHandiler = (e) => {
    e.preventDefault()

    if (
      notetitle.trim() === '' ||
      notedescrption.trim() === ''
    ) {
      return
    }

    const newNotes = {
      id: Date.now(),
      title: notetitle,
      description: notedescrption
    }

    setNotes([...notes, newNotes])

    setNotetitle('')
    setNotedescrption('')
  }

  return (
   <div
  className={`w-full min-h-0 p-4 sm:p-8 transition-colors duration-300 ${
    darkMode
      ? 'bg-slate-900 text-white'
      : 'bg-[#F8FAFC] text-[#0F172A]'
  }`}
>
  <div className='max-w-7xl mx-auto'>

      {/* Heading */}
      <h1
        className={`text-2xl font-bold mb-4 flex items-center gap-2 ${
          darkMode
            ? 'text-white'
            : 'text-[#0F172A]'
        }`}
      >
        📝 Recent Notes
      </h1>

      {/* Responsive Form Layout */}
      <form
        className={`p-4 sm:p-5 rounded-2xl border mb-6 transition-all shadow-sm ${
          darkMode
            ? 'bg-slate-800/80 border-slate-700'
            : 'bg-white border-slate-200'
        }`}
        onSubmit={(e) => {
          submitHandiler(e)
        }}
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center'>

          {/* Title Input */}
          <div className='lg:col-span-4'>
            <input
              type='text'
              placeholder='Enter note title...'
              className={`w-full border rounded-xl px-3.5 py-2.5 outline-none text-sm transition focus:ring-2 focus:ring-sky-400 ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 text-white placeholder:text-gray-400'
                  : 'bg-slate-50 border-gray-300 text-black placeholder:text-gray-400'
              }`}
              value={notetitle}
              onChange={(ele) => {
                setNotetitle(ele.target.value)
              }}
            />
          </div>

          {/* Description Input */}
          <div className='lg:col-span-6'>
            <input
              type='text'
              placeholder='Enter note description...'
              className={`w-full border rounded-xl px-3.5 py-2.5 outline-none text-sm transition focus:ring-2 focus:ring-sky-400 ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 text-white placeholder:text-gray-400'
                  : 'bg-slate-50 border-gray-300 text-black placeholder:text-gray-400'
              }`}
              value={notedescrption}
              onChange={(ele) => {
                setNotedescrption(ele.target.value)
              }}
            />
          </div>

          {/* Submit Button */}
          <div className='lg:col-span-2 sm:col-span-2'>
            <button
              type='submit'
              className='w-full bg-[#1E293B] hover:bg-sky-600 active:scale-[0.98] text-white py-2.5 rounded-xl font-semibold text-sm transition shadow-sm cursor-pointer'
            >
              Add Note
            </button>
          </div>

        </div>
      </form>

      {/* Notes Display Section */}
      <div className='max-h-96 overflow-y-auto scrollbar-none rounded-xl'>
        <Card
          notes={notes}
          setNotes={setNotes}
          darkMode={darkMode}
        />
      </div>
      </div>
    </div>
  )
}

export default RecentTask