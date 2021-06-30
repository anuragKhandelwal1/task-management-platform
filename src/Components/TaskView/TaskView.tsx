import { Category } from '../../Models/Category.model';
import { Task } from '../../Models/Task.model';
import TaskList from './TaskList';
import './Task.css';

function TaskView(props: { tasks: Task[]; handleDrop: Function }) {
	const todos = props.tasks.filter((task: Task) => task.status === 'todo');
	const inProgress = props.tasks.filter(
		(task: Task) => task.status === 'inProgress'
	);
	const done = props.tasks.filter((task: Task) => task.status === 'done');

	const categories: Category[] = [
		{ id: 'todo', title: 'Todo', tasks: todos },
		{ id: 'inProgress', title: 'In Progress', tasks: inProgress },
		{ id: 'done', title: 'Done', tasks: done },
	];

	const handleDragOver = (e: any) => {
		e.preventDefault();
	};

	const handleOnDrop = (e: any, id: string) => {
		let title = e.dataTransfer.getData('id');
		props.handleDrop(title, id);
	};

	const handleDragEnd = (e: any) => {
		e.target.style.opacity = '1';
	};

	return (
		<div className='task-view-container'>
			{categories.map((category: Category, index: number) => {
				return (
					<div
						key={index}
						className='task-view'
						onDragOver={handleDragOver}
						onDrop={(e) => handleOnDrop(e, category.id)}
						onDragEnd={handleDragEnd}
					>
						<div className='task-title'>{category.title}</div>
						<TaskList tasks={category.tasks} />
					</div>
				);
			})}
		</div>
	);
}
export default TaskView;
