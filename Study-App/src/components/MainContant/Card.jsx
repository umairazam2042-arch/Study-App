import React from 'react'
import { Trash2 } from 'lucide-react'

const Card = ({ notes, setNotes, darkMode, isFullPage = false }) => {

  return (
    <div className='w-full transition-all duration-300'>

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>

        {notes.length === 0 ? (

          <div
            className={`col-span-full text-center py-12 px-4 rounded-2xl border-2 border-dashed ${
              darkMode
                ? 'border-slate-800 text-slate-500'
                : 'border-slate-200 text-slate-400'
            }`}
          >

            <h2 className='text-base font-semibold'>
              No notes found
            </h2>

            <p className='text-xs mt-1 opacity-75'>
              Create your first note to see it here
            </p>

          </div>

        ) : (

          notes.map((elem) => {

            return (

              <div
                key={elem.id}
                className={`w-full rounded-2xl p-4 sm:p-5 flex flex-col justify-between border shadow-sm hover:shadow-md transition duration-200 ${
                  isFullPage 
                    ? 'min-h-44 h-auto overflow-visible' 
                    : 'min-h-44 max-h-44 overflow-y-auto scrollbar-none'
                } ${
                  darkMode
                    ? 'bg-slate-800/90 border-slate-700 text-white'
                    : 'bg-white border-slate-200 text-[#0F172A]'
                }`}
              >

                <div>
                  <div className='flex items-start justify-between gap-3 mb-2'>

                    <h2 className='text-base font-bold break-words leading-snug flex-1'>
                      {elem.title}
                    </h2>

                    <button
                      className='p-1 text-rose-500 hover:bg-rose-500/10 rounded-lg cursor-pointer shrink-0 transition'
                      onClick={() => {

                        setNotes(
                          notes.filter(
                            (note) => note.id !== elem.id
                          )
                        )

                      }}
                    >
                      <Trash2
                        size={18}
                      />
                    </button>

                  </div>

                  <p className={`text-sm break-words leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {elem.description}
                  </p>
                </div>

              </div>

            )
          })

        )}

      </div>

    </div>
  )
}

export default Card