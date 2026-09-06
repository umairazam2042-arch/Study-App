import React, { useState } from 'react'
import { Trash2, Pencil, Check } from 'lucide-react'

const TodayTask = ({ tasks, setTasks, darkMode, isFullPage = false }) => {

  const [NewTask, setNewTask] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState('')
  const [searchTask, setSearchTask] = useState('')
  const [filter, setFilter] = useState('all')

  const submitHandiler = (e) => {
    e.preventDefault()

    if (NewTask.trim() === '') {
      return
    }

    const newTask = {
      id: Date.now(),
      title: NewTask,
      completion: false
    }

    setTasks([...tasks, newTask])
    setNewTask('')
  }

  const filteredTasks = tasks.filter((task) => {

    const matchSearch = task.title
      .toLowerCase()
      .includes(searchTask.toLowerCase())

    const matchFilter =
      filter === 'all' ||
      (filter === 'completed' && task.completion === true) ||
      (filter === 'pending' && task.completion === false)

    return matchSearch && matchFilter
  })

  return (
    <div className='w-full transition-all duration-300'>

      {/* Title */}
      <h1
        className={`text-2xl font-bold mb-4 flex items-center gap-2 ${
          darkMode
            ? 'text-white'
            : 'text-[#0F172A]'
        }`}
      >
        📋 Today's Tasks
      </h1>

      {/* Top Form & Controls Box */}
      <div className={`p-4 sm:p-5 rounded-2xl border mb-6 transition-all shadow-sm ${
        darkMode
          ? 'bg-slate-800/80 border-slate-700'
          : 'bg-white border-slate-200'
      }`}>

        {/* Add Task Form */}
        <form
          onSubmit={(e) => {
            submitHandiler(e)
          }}
          className='flex flex-col sm:flex-row gap-2'
        >

          <input
            type="text"
            placeholder='Enter a new task...'
            className={`w-full flex-1 border rounded-xl px-3.5 py-2.5 outline-none text-sm transition focus:ring-2 focus:ring-sky-400 ${
              darkMode
                ? 'bg-slate-900 border-slate-700 text-white placeholder:text-gray-400'
                : 'bg-slate-50 border-gray-300 text-black placeholder:text-gray-400'
            }`}
            value={NewTask}
            onChange={(ele) => {
              setNewTask(ele.target.value)
            }}
          />

          <button
            className='w-full sm:w-auto bg-[#1E293B] hover:bg-sky-600 active:scale-[0.98] text-white px-5 py-2.5 text-sm font-semibold rounded-xl transition shadow-sm cursor-pointer'
          >
            Add Task
          </button>

        </form>


        {/* Search + Filter */}
        <div className='flex flex-col sm:flex-row gap-2 mt-3'>

          <input
            type="text"
            placeholder="Search task..."
            value={searchTask}
            onChange={(e) => {
              setSearchTask(e.target.value)
            }}
            className={`w-full sm:flex-1 border rounded-xl px-3.5 py-2 outline-none text-sm transition focus:ring-2 focus:ring-sky-400 ${
              darkMode
                ? 'bg-slate-900 border-slate-700 text-white placeholder:text-gray-400'
                : 'bg-slate-50 border-gray-300 text-black placeholder:text-gray-400'
            }`}
          />

          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value)
            }}
            className={`w-full sm:w-auto py-2 px-3 border rounded-xl text-sm font-medium outline-none transition focus:ring-2 focus:ring-sky-400 ${
              darkMode
                ? 'bg-slate-900 border-slate-700 text-white'
                : 'bg-slate-50 border-gray-300 text-black'
            }`}
          >
            <option value="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>

        </div>

      </div>


      {/* Task List Box: Conditional Height & Overflow */}
      <div
        className={`p-3 sm:p-4 flex flex-col gap-2 rounded-2xl border transition-all ${
          isFullPage 
            ? 'min-h-[140px] h-auto overflow-visible' 
            : 'min-h-[140px] max-h-80 overflow-y-auto scrollbar-none'
        } ${
          darkMode
            ? 'bg-slate-800/40 border-slate-700/60'
            : 'bg-amber-50/60 border-amber-200/60'
        }`}
      >

        {filteredTasks.length === 0 ? (

          <div className='w-full flex flex-col items-center justify-center my-auto py-6 text-center'>

            <h2
              className={`text-base font-semibold ${
                darkMode
                  ? 'text-gray-300'
                  : 'text-gray-600'
              }`}
            >
              No tasks found
            </h2>

            <p
              className={`text-xs mt-1 ${
                darkMode
                  ? 'text-gray-500'
                  : 'text-gray-400'
              }`}
            >
              Add a new task above to get started
            </p>

          </div>

        ) : (

          filteredTasks.map((elem) => {

            return (

              <div
                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700/80' 
                    : 'bg-white border-slate-200/80 shadow-2xs'
                }`}
                key={elem.id}
              >

                <input
                  type='checkbox'
                  className='w-4 h-4 rounded accent-sky-500 cursor-pointer shrink-0'
                  checked={elem.completion}
                  onChange={() => {

                    setTasks(
                      tasks.map((task) => {

                        if (task.id === elem.id) {
                          return {
                            ...task,
                            completion: !task.completion
                          }
                        }

                        return task
                      })
                    )

                  }}
                />


                {editingId === elem.id ? (

                  <form
                    onSubmit={(f) => {
                      f.preventDefault()
                    }}
                    className='flex-1 max-w-full'
                  >

                    <div className='relative flex items-center gap-1 border border-sky-400 rounded-lg p-1 bg-slate-900/10'>

                      <input
                        type="text"
                        value={editTitle}
                        className={`w-full rounded px-2 py-1 text-sm font-medium outline-none ${
                          darkMode
                            ? 'bg-slate-700 text-white'
                            : 'bg-white text-black'
                        }`}
                        onChange={(e) => {
                          setEditTitle(e.target.value)
                        }}
                      />

                      <button
                        type="button"
                        className='cursor-pointer shrink-0 p-1 text-emerald-500 hover:text-emerald-600 transition'
                        onClick={() => {

                          if (editTitle.trim() === '') {
                            return
                          }

                          setTasks(
                            tasks.map((task) => {

                              if (task.id === editingId) {
                                return {
                                  ...task,
                                  title: editTitle
                                }
                              }

                              return task
                            })
                          )

                          setEditingId(null)
                          setEditTitle('')

                        }}
                      >
                        <Check
                          size={18}
                          strokeWidth={3}
                          className='active:scale-95'
                        />
                      </button>

                    </div>

                  </form>

                ) : (

                  <h1
                    className={`flex-1 break-words text-sm sm:text-base font-medium transition-all ${
                      elem.completion
                        ? 'line-through text-gray-400 opacity-60'
                        : darkMode
                          ? 'text-slate-100'
                          : 'text-[#0F172A]'
                    }`}
                  >
                    {elem.title}
                  </h1>

                )}


                {/* Action Buttons */}
                <div className='flex items-center gap-1 shrink-0 ml-auto'>
                  <button
                    className='p-1.5 text-amber-500 hover:bg-amber-500/10 rounded-lg cursor-pointer transition'
                    onClick={() => {

                      setEditingId(elem.id)
                      setEditTitle(elem.title)

                    }}
                  >
                    <Pencil size={17} />
                  </button>

                  <button
                    className='p-1.5 text-rose-500 hover:bg-rose-500/10 rounded-lg cursor-pointer transition'
                    onClick={() => {

                      setTasks(
                        tasks.filter(
                          (task) => task.id !== elem.id
                        )
                      )

                    }}
                  >
                    <Trash2 size={17} />
                  </button>
                </div>

              </div>
            )
          })

        )}

      </div>

    </div>
  )
}

export default TodayTask