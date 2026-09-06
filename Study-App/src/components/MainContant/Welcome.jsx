import React from 'react'

const Welcome = ({ darkMode }) => {

  const currentHour = new Date().getHours()

  let greeting = ''
  let emoji = ''

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good Morning'
    emoji = '🌅'
  } 
  else if (currentHour >= 12 && currentHour < 17) {
    greeting = 'Good Afternoon'
    emoji = '☀️'
  } 
  else if (currentHour >= 17 && currentHour < 21) {
    greeting = 'Good Evening'
    emoji = '🌆'
  } 
  else {
    greeting = 'Good Night'
    emoji = '🌙'
  }

  return (
    <div className='w-full transition-all duration-300'>

      <div className={`p-5 sm:p-6 rounded-2xl border shadow-sm transition-all ${
        darkMode 
          ? 'bg-slate-800/60 border-slate-700/80' 
          : 'bg-white border-slate-200'
      }`}>
        <h1
          className={`text-2xl sm:text-3xl font-extrabold flex items-center gap-2 ${
            darkMode
              ? 'text-white'
              : 'text-[#0F172A]'
          }`}
        >
          <span>{greeting}</span> <span>{emoji}</span>
        </h1>

        <p
          className={`text-base sm:text-lg font-medium mt-1.5 ${
            darkMode
              ? 'text-slate-300'
              : 'text-[#64748B]'
          }`}
        >
          Ready to make today productive?
        </p>
      </div>

    </div>
  )
}

export default Welcome