import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Task } from '../../Models/Task.model';
import { getAllTasks } from '../../Utility/Storage';

const useStyles = makeStyles({
	header: { fontSize: '1.5em', fontWeight: 700, color: '#005BA1' },
	form: {
		display: 'flex',
		flexDirection: 'column',
		margin: '1em 3em',
		padding: '2em',
		borderRight: '2px solid #eee',
		height: '100%',
		width: '100%',
		maxWidth: '100%',
	},
	button: {
		width: '50%',
		marginLeft: 'auto',
		marginTop: '2em',
		backgroundColor: '#005BA1',
	},
});

export function AddTask(props: { onAdd: Function }) {
	const [taskData, setTaskData] = useState<Task>({
		title: '',
		description: '',
		status: 'todo',
	});
	const classes = useStyles();

	const tasks: Task[] = getAllTasks();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === 'title') {
			setTaskData({ ...taskData, title: e.target.value.trim() });
		} else if (e.target.name === 'description') {
			setTaskData({ ...taskData, description: e.target.value.trim() });
		}
	};

	const onAddTask = () => {
		const { title, description } = taskData;

		if (!title) {
			return alert(`Title cannot be empty`);
		}

		if (!description) {
			return alert(`Description cannot be empty`);
		}

		const duplicateTask: Task | undefined = tasks.find(
			(task: Task) => task.title.toLowerCase() === title.toLowerCase()
		);
		if (duplicateTask) {
			alert(`${duplicateTask.title} Already Exists`);
			return;
		}
		props.onAdd(taskData);
		// alert(`${title} Added`);
	};

	return (
		<form noValidate autoComplete='off' className={classes.form}>
			<div className={classes.header}>Add Task</div>

			<TextField
				label='Title'
				onChange={handleChange}
				value={taskData.title}
				name='title'
				required
				inputProps={{ maxLength: 10 }}
			/>

			<TextField
				label='Description'
				multiline
				rowsMax={4}
				value={taskData.description}
				name='description'
				onChange={handleChange}
				required
				inputProps={{ maxLength: 30 }}
			/>

			<Button
				className={classes.button}
				variant='contained'
				color='primary'
				onClick={onAddTask}
			>
				Add
			</Button>
		</form>
	);
}
