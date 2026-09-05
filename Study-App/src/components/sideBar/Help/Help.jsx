import Progress from './Progress'
import Setting from './Setting'

const Help = ({
  tasks,
  setTasks,
  notes,
  setNotes,
  darkMode,
  setDarkMode
}) => {

  return (
    <div className='font-medium w-full flex flex-col justify-between px-9 mt-15 ml-3'>

      <Progress
        tasks={tasks}
        darkMode={darkMode}
      />

      <Setting
        tasks={tasks}
        setTasks={setTasks}
        notes={notes}
        setNotes={setNotes}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

    </div>
  )
}

export default Help