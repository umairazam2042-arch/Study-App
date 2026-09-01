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
    <div className='text-lg font-medium'>

      <h1
        className={`text-2xl font-bold ml-10 ${
          darkMode
            ? 'text-white'
            : 'text-[#0F172A]'
        }`}
      >
        {greeting} {emoji}
      </h1>

      <h1
        className={`text-xl font-semibold mt-4 ml-20 ${
          darkMode
            ? 'text-gray-200'
            : 'text-[#64748B]'
        }`}
      >
        Ready to make today productive?
      </h1>

    </div>
  )
}

export default Welcome