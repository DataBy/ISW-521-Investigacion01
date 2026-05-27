import { useState, useEffect } from 'react'
import { getTasks, saveTasks } from '../services/localStorageService'

const useTasks = () => {
  // Estado principal: arreglo de tareas
  const [tasks, setTasks] = useState([])

  // Al cargar el hook, trae las tareas guardadas
  useEffect(() => {
    setTasks(getTasks())
  }, [])

  // Cada vez que tasks cambie, guarda en LocalStorage
  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  // Agregar una nueva tarea
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  // Marcar tarea como completada o no
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  // Eliminar una tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return { tasks, addTask, toggleTask, deleteTask }
}

export default useTasks