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
    <div className='mt-3 relative'>

      <form
        className='flex flex-col sm:flex-row flex-wrap gap-2 mb-5'
        onSubmit={(e) => {
          submitHandiler(e)
        }}
      >

        <input
          type='text'
          placeholder='Enter note title...'
          className={`w-full sm:w-auto border-2 border-gray-300 rounded-lg px-3 py-2 outline-none ${
            darkMode
              ? 'bg-slate-800 text-white placeholder:text-gray-400'
              : 'bg-white text-black'
          }`}
          value={notetitle}
          onChange={(ele) => {
            setNotetitle(ele.target.value)
          }}
        />

        <input
          type='text'
          placeholder='Enter note description...'
          className={`w-full sm:w-auto border-2 border-gray-300 rounded-lg px-3 py-2 outline-none ${
            darkMode
              ? 'bg-slate-800 text-white placeholder:text-gray-400'
              : 'bg-white text-black'
          }`}
          value={notedescrption}
          onChange={(ele) => {
            setNotedescrption(ele.target.value)
          }}
        />

        <button
          type='submit'
          className='w-full sm:w-auto bg-[#1E293B] text-white px-4 py-2 rounded-lg font-semibold cursor-pointer'
        >
          Add Note
        </button>

      </form>


      <h1
        className={`text-2xl font-semibold ${
          darkMode
            ? 'text-white'
            : 'text-[#0F172A]'
        }`}
      >
        Recent Notes
      </h1>


      <div className='mt-2 max-h-100 overflow-y-auto scrollbar-none'>

        <Card
          notes={notes}
          setNotes={setNotes}
          darkMode={darkMode}
        />

      </div>

    </div>
  )
}

export default RecentTask