import React from 'react'
import { Trash2 } from 'lucide-react'

const Card = ({ notes, setNotes, darkMode }) => {

  return (
    <div>

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-6 gap-4'>

        {notes.length === 0 ? (

          <div
            className={`col-span-full text-center py-6 ${
              darkMode
                ? 'text-gray-300'
                : 'text-gray-500'
            }`}
          >

            <h2 className='text-lg font-semibold'>
              No notes found
            </h2>

            <p className='text-sm'>
              Create your first note
            </p>

          </div>

        ) : (

          notes.map((elem) => {

            return (

              <div
                key={elem.id}
                className={`min-h-40 max-h-40 w-full rounded-2xl relative px-4 py-2 text-wrap overflow-auto flex flex-col scrollbar-none wrap-break-words leading-6 border-2 ${
                  darkMode
                    ? 'bg-slate-800 border-slate-600 text-white'
                    : 'bg-[#FFFFFF] border-sky-400 text-[#0F172A]'
                }`}
              >

                <div className='flex items-center justify-between mb-2'>

                  <h2 className='text-xl text-wrap font-bold wrap-break-words'>
                    {elem.title}
                  </h2>

                  <Trash2
                    size={20}
                    color='#df0707'
                    className='cursor-pointer ml-4 shrink-0'
                    onClick={() => {

                      setNotes(
                        notes.filter(
                          (note) => note.id !== elem.id
                        )
                      )

                    }}
                  />

                </div>


                <h3 className='mt-5 text-wrap font-medium wrap-break-words'>
                  {elem.description}
                </h3>

              </div>

            )
          })

        )}

      </div>

    </div>
  )
}

export default Card