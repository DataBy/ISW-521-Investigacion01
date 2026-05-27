import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import SearchBar from '../components/SearchBar'
import FilterButtons from '../components/FilterButtons'
import useTasks from '../hooks/useTasks'
import { useState } from 'react'

const Home = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  // Filtra las tareas según búsqueda y filtro activo
  const filteredTasks = tasks
    .filter(task => {
      if (filter === 'active') return !task.completed
      if (filter === 'completed') return task.completed
      return true
    })
    .filter(task =>
      task.text.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="home">
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <SearchBar search={search} onSearch={setSearch} />
      <FilterButtons filter={filter} onFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  )
}

export default Home