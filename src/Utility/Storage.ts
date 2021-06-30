import { Task } from "../Models/Task.model";

const addTask = (task: Task) => {
  const tasks = getAllTasks();
  tasks.push(task);
  saveTasks(tasks);
}


const getAllTasks = () => {
  const tasks = localStorage.getItem('tasks');
  if (tasks) {
    return JSON.parse(tasks)
  }
  return [];
}

const saveTasks = (tasks: Task[]) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export { addTask, getAllTasks, saveTasks }