import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Calender = ({ darkMode }) => {

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

  const goToToday = () => {
  const today = new Date()

  setCurrentDate(today)
  setSelectedDate(today)
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
      className={`w-full min-h-[calc(100vh-5rem)] p-4 sm:p-8 ${
        darkMode
          ? 'bg-slate-900 text-white'
          : 'bg-[#F8FAFC] text-[#0F172A]'
      }`}
    >

      <div className='max-w-4xl mx-auto'>

        {/* Header */}

        <div className='flex items-center justify-between mb-6'>

          <div className='flex items-center justify-between mb-6'>

  <button
    onClick={previousMonth}
    className='p-2 rounded-lg cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700'
  >
    <ChevronLeft size={22} />
  </button>


  <div className='flex flex-col items-center gap-2'>

    <h1 className='text-2xl sm:text-3xl font-bold'>
      {monthNames[month]} {year}
    </h1>

    <button
      onClick={goToToday}
      className='px-3 py-1 text-sm font-semibold rounded-lg bg-[#38BDF8] text-white cursor-pointer hover:bg-sky-500 transition'
    >
      Today
    </button>

  </div>


  <button
    onClick={nextMonth}
    className='p-2 rounded-lg cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700'
  >
    <ChevronRight size={22} />
  </button>

</div>

        </div>


        {/* Calendar */}

        <div
          className={`rounded-2xl p-4 sm:p-6 shadow-sm border ${
            darkMode
              ? 'bg-slate-800 border-slate-700'
              : 'bg-white border-slate-200'
          }`}
        >

          {/* Day Names */}

          <div className='grid grid-cols-7 gap-2 mb-3'>

            {dayNames.map((day) => (

              <div
                key={day}
                className='text-center text-sm font-bold text-slate-500'
              >
                {day}
              </div>

            ))}

          </div>


          {/* Dates */}

          <div className='grid grid-cols-7 gap-2'>

            {/* Empty spaces */}

            {Array.from({ length: firstDay }).map((_, index) => (

              <div
                key={`empty-${index}`}
                className='h-10 sm:h-12'
              ></div>

            ))}


            {/* Dates */}

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
                className={`h-10 sm:h-12 rounded-xl flex items-center justify-center cursor-pointer transition ${
                  isToday(day)
                    ? 'bg-[#38BDF8] text-white font-bold'
                    : isSelected(day)
                      ? 'border-2 border-[#38BDF8]'
                      : darkMode
                        ? 'hover:bg-slate-700'
                        : 'hover:bg-slate-100'
                }`}
              >
                {day}
              </button>

            ))}

          </div>

        </div>


        {/* Selected Date */}

        <div
          className={`mt-5 p-4 rounded-xl text-center ${
            darkMode
              ? 'bg-slate-800'
              : 'bg-white'
          }`}
        >

          <p className='text-sm text-slate-500'>
            Selected Date
          </p>

          <h2 className='text-lg font-semibold mt-1'>
            {selectedDate.toLocaleDateString()}
          </h2>

        </div>

      </div>

    </div>
  )
}

export default Calender