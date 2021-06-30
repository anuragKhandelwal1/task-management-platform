import './App.css';
import { AddTask } from './Components/AddTasks/AddTask';
import TaskView from './Components/TaskView/TaskView';
import { getAllTasks, addTask, saveTasks } from './Utility/Storage';
import { useState } from 'react';
import { Task } from './Models/Task.model';

function App() {
	const [tasks, setTasks] = useState(getAllTasks());

	const onAddTask = (task: Task) => {
		addTask(task);
		setTasks([...tasks, task]);
	};

	const handleDrop = (title: string, status: string) => {
		const droppedTask = tasks.find((task: Task) => task.title === title);
		const droppedIndex = tasks.findIndex((task: Task) => task.title === title);
		droppedTask.status = status;
		tasks[droppedIndex] = droppedTask;
		setTasks([...tasks]);
		saveTasks(tasks);
	};

	return (
		<>
			<div className='view-container'>
				<AddTask onAdd={onAddTask} />
				<TaskView tasks={tasks} handleDrop={handleDrop} />
			</div>
		</>
	);
}

export default App;
