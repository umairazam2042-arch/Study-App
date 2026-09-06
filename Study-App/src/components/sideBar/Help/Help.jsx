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
    <div className='font-medium w-full flex flex-col px-9 ml-3'>

      <Progress
        tasks={tasks}
        darkMode={darkMode}
      />

      <Setting />

    </div>
  )
}

export default Help