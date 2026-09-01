import { Trash2 } from 'lucide-react'
import { useState } from 'react'


const Help = ({ 
  tasks,
  setTasks,
  notes,
  setNotes,
  darkMode,
  setDarkMode}) => {

    const [showConfirm, setShowConfirm] = useState(false)
    
    const completeTask = tasks.filter(
      (task) => task.completion === true
    )
    
    const progress = tasks.length === 0
    ? 0 
    :Math.round( (completeTask.length / tasks.length) * 100)
    
  return (
    <div className=' font-medium w-full  flex flex-col justify-between  px-9 mt-15 ml-3'>
<div className='flex flex-col gap-2 mt-5'>

  <div className='flex items-center gap-2'>
    <img
      src="https://cdn-icons-png.flaticon.com/512/4992/4992624.png"
      alt=""
      className='h-10 w-10 p-2 object-cover'
    />

    <h1 className='hover:text-[#38BDF8]'>
      Progress {progress}%
    </h1>
  </div>

  <div className='w-full h-2 bg-gray-300 rounded-full overflow-hidden'>
    <div
      className='h-full bg-[#38BDF8] rounded-full'
      style={{ width: `${progress}%` }}
    ></div>
  </div>

</div>


      <div className='flex flex-col  items-start gap-3  mt-5  relative'>
       
        <div className='flex items-center'>
          <img src="https://i.pinimg.com/736x/a6/91/31/a691316f114b58e298f9e382235b890e.jpg" alt="" 
        className='h-10 w-10 object-cover rounded-full p-2'/>
      <h1 className='hover:text-[#38BDF8]'>Setting</h1>
        </div>
      <div className=''>
        <button
  onClick={() => {
    setDarkMode(!darkMode)
  }}
  className=" ml-15 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-300 text-sm cursor-pointer hover:bg-gray-100 transition"
>
  {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
</button>
      <button
 onClick={() => {
  setShowConfirm(true)
}}

  className="ml-13.5 mt-2 text-nowrap flex items-center gap-1 text-sm cursor-pointer px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-100 transition" 
>
  <Trash2 size={16} />
  Clear All Data
</button>
      </div>
      </div>

      
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
        This will delete all your tasks and notes. This action cannot be undone.
      </p>

      <div className='flex justify-end gap-2'>

        <button
          className='px-4 py-2 rounded-lg border border-gray-400 cursor-pointer'
          onClick={() => {
            setShowConfirm(false)
          }}
        >
          Cancel
        </button>

        <button
          className='px-4 py-2 rounded-lg bg-red-500 text-white cursor-pointer'
          onClick={() => {
            setTasks([])
            setNotes([])

            localStorage.removeItem('tasks')
            localStorage.removeItem('notes')

            setShowConfirm(false)
          }}
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

export default Help