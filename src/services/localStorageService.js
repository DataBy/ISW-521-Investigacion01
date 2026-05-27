// Clave con la que se guardan las tareas en el navegador
const STORAGE_KEY = 'tasks'

// Obtiene las tareas guardadas en LocalStorage
export const getTasks = () => {
  const tasks = localStorage.getItem(STORAGE_KEY)
  return tasks ? JSON.parse(tasks) : []
}

// Guarda el arreglo de tareas en LocalStorage
export const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}