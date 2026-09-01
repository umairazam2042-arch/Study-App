import React, { useState } from 'react'
import { Trash2, Pencil, Check } from 'lucide-react'

const TodayTask = ({ tasks, setTasks, darkMode }) => {

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
    <div className='p-3 sm:p-5 ml-0 sm:ml-5 min-h-50'>

      {/* Add Task */}
      <div className='mb-4 p-1 sm:p-2'>

        <form
          onSubmit={(e) => {
            submitHandiler(e)
          }}
          className='flex flex-col sm:flex-row items-stretch sm:items-center gap-2'
        >

          <input
            type="text"
            placeholder='Enter a new task...'
            className={`w-full sm:w-auto flex-1 sm:flex-none border-2 border-gray-300 rounded-lg px-3 py-2 outline-none ${
              darkMode
                ? 'bg-slate-800 text-white placeholder:text-gray-400'
                : 'bg-white text-black'
            }`}
            value={NewTask}
            onChange={(ele) => {
              setNewTask(ele.target.value)
            }}
          />

          <button
            className='w-full sm:w-auto border-none cursor-pointer text-[#F8FAFC] py-2 text-base sm:text-lg font-semibold bg-[#1E293B] rounded px-3 outline-none'
          >
            Add Task
          </button>

        </form>


        {/* Search + Filter */}
        <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-3'>

          <input
            type="text"
            placeholder="Search task..."
            value={searchTask}
            onChange={(e) => {
              setSearchTask(e.target.value)
            }}
            className={`w-full sm:flex-1 border-2 border-gray-300 rounded-lg px-3 py-2 outline-none ${
              darkMode
                ? 'bg-slate-800 text-white placeholder:text-gray-400'
                : 'bg-white text-black'
            }`}
          />

          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value)
            }}
            className={`w-full sm:w-auto py-2 px-2 border-2 border-gray-300 rounded-lg text-sm font-medium outline-none ${
              darkMode
                ? 'bg-slate-800 text-white'
                : 'bg-white text-black'
            }`}
          >
            <option value="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>

        </div>

      </div>


      {/* Heading */}
      <h1
        className={`text-xl sm:text-2xl font-semibold ${
          darkMode
            ? 'text-white'
            : 'text-[#0F172A]'
        }`}
      >
        Today's Tasks
      </h1>


      {/* Task List */}
      <div
        className={`px-3 sm:px-5 py-3 flex flex-col gap-2 min-h-20 max-h-72 mt-2 overflow-y-auto scrollbar-none rounded-lg ${
          darkMode
            ? 'bg-slate-800'
            : 'bg-amber-100'
        }`}
      >

        {filteredTasks.length === 0 ? (

          <div className='w-full flex flex-col items-center justify-center py-4 text-center'>

            <h2
              className={`text-base sm:text-lg font-semibold ${
                darkMode
                  ? 'text-gray-300'
                  : 'text-gray-500'
              }`}
            >
              No tasks found
            </h2>

            <p
              className={`text-sm ${
                darkMode
                  ? 'text-gray-400'
                  : 'text-gray-400'
              }`}
            >
              Add a new task to get started
            </p>

          </div>

        ) : (

          filteredTasks.map((elem) => {

            return (

              <div
                className='w-full flex flex-wrap gap-2 items-center py-1'
                key={elem.id}
              >

                <input
                  type='checkbox'
                  className='outline-none cursor-pointer shrink-0'
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
                    className='max-w-full'
                  >

                    <div className='relative flex items-center border-2 border-gray-400 rounded max-w-full'>

                      <input
                        type="text"
                        value={editTitle}
                        className={`w-40 sm:w-60 rounded px-2 py-1 text-base sm:text-lg font-semibold outline-none ${
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
                        className='cursor-pointer shrink-0'
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
                          size={16}
                          strokeWidth={4.75}
                          className='mr-2 active:scale-95'
                        />
                      </button>

                    </div>

                  </form>

                ) : (

                  <h1
                    className={`max-w-[65%] sm:max-w-[75%] break-words text-base sm:text-lg font-medium ${
                      elem.completion
                        ? 'underline text-gray-400'
                        : darkMode
                          ? 'text-white'
                          : 'text-[#0F172A]'
                    }`}
                  >
                    {elem.title}
                  </h1>

                )}


                {/* Edit */}
                <button
                  className='text-amber-500 cursor-pointer shrink-0 ml-auto'
                  onClick={() => {

                    setEditingId(elem.id)
                    setEditTitle(elem.title)

                  }}
                >
                  <Pencil size={19} />
                </button>


                {/* Delete */}
                <button
                  className='text-red-500 cursor-pointer shrink-0'
                  onClick={() => {

                    setTasks(
                      tasks.filter(
                        (task) => task.id !== elem.id
                      )
                    )

                  }}
                >
                  <Trash2 size={19} />
                </button>

              </div>
            )
          })

        )}

      </div>

    </div>
  )
}

export default TodayTask