import { useState, useEffect } from 'react'

import './index.css'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([])

  const deleteEvent = () => {
    console.log(' deleteEvent')
  }

  return (
    <div className='container'>
      <Header></Header>
      <Tasks tasks={tasks} onDelete={deleteEvent}></Tasks>
    </div>
  )
}

export default App
