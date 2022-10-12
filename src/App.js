//import React  from 'react';
import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Eat Pizza',
        day: '5th of February',
        reminder: true,
    },
    {
      id: 2,
      text: 'Code, Code, Code',
      day: '7th of July',
      reminder: true,
    },
    {
      id: 3,
      text: 'Sleep',
      day: '12th of September',
      reminder: true,
  },
])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  console.log(id)
  const newTask = {id, ...task};
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id===id
  ? {...task, reminder : !task.reminder}
  : task))
}

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        <Tasks tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
        />
      : 'No Tasks To Show'}
    </div>
  );
}

//class App extends React.Component {
//  render() {
//    return <Header />
//  }
// }

export default App;