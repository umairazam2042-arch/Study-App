import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const Calendar = ({ darkMode, onClose }) => {

  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const dayNames = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ]

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDay = new Date(year, month, 1).getDay()
  const totalDays = new Date(year, month + 1, 0).getDate()

  const previousMonth = () => {
    setCurrentDate(
      new Date(year, month - 1, 1)
    )
  }

  const nextMonth = () => {
    setCurrentDate(
      new Date(year, month + 1, 1)
    )
  }

  const today = new Date()

  const isToday = (day) => {
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    )
  }

  const isSelected = (day) => {
    return (
      day === selectedDate.getDate() &&
      month === selectedDate.getMonth() &&
      year === selectedDate.getFullYear()
    )
  }

  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center p-4 ${
        darkMode
          ? 'bg-black/40'
          : 'bg-black/20'
      }`}
      onClick={onClose}
    >

      <div
        className={`w-full max-w-md rounded-2xl p-5 shadow-xl ${
          darkMode
            ? 'bg-slate-800 text-white'
            : 'bg-white text-[#0F172A]'
        }`}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >

        {/* Header */}

        <div className='flex items-center justify-between mb-5'>

          <button
            onClick={previousMonth}
            className='p-2 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700'
          >
            <ChevronLeft size={22} />
          </button>

          <h1 className='text-xl font-bold'>
            {monthNames[month]} {year}
          </h1>

          <div className='flex items-center gap-1'>

            <button
              onClick={nextMonth}
              className='p-2 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700'
            >
              <ChevronRight size={22} />
            </button>

            <button
              onClick={onClose}
              className='p-2 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700'
            >
              <X size={20} />
            </button>

          </div>

        </div>


        {/* Days */}

        <div className='grid grid-cols-7 gap-2 mb-2'>

          {dayNames.map((day) => (

            <div
              key={day}
              className='text-center text-sm font-bold'
            >
              {day}
            </div>

          ))}

        </div>


        {/* Dates */}

        <div className='grid grid-cols-7 gap-2'>

          {Array.from({ length: firstDay }).map((_, index) => (

            <div key={`empty-${index}`}></div>

          ))}


          {Array.from(
            { length: totalDays },
            (_, index) => index + 1
          ).map((day) => (

            <button
              key={day}
              onClick={() => {
                setSelectedDate(
                  new Date(year, month, day)
                )
              }}
              className={`h-10 w-10 mx-auto rounded-full flex items-center justify-center cursor-pointer transition ${
                isToday(day)
                  ? 'bg-[#38BDF8] text-white font-bold'
                  : isSelected(day)
                    ? 'border-2 border-[#38BDF8]'
                    : darkMode
                      ? 'hover:bg-slate-700'
                      : 'hover:bg-gray-200'
              }`}
            >
              {day}
            </button>

          ))}

        </div>


        {/* Selected Date */}

        <div className='mt-5 text-center'>

          <p className='text-sm text-gray-500'>
            Selected Date
          </p>

          <h2 className='text-lg font-semibold'>
            {selectedDate.toLocaleDateString()}
          </h2>

        </div>

      </div>

    </div>
  )
}

export default Calendar