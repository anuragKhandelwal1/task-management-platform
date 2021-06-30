import { Task } from '../../Models/Task.model';
import TaskItem from './TaskItem';

function TaskList(props: { tasks: Task[] }) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
			{props.tasks.map((task, index) => {
				return <TaskItem task={task} key={index} />;
			})}
		</div>
	);
}

export default TaskList;
