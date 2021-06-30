import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import { Task } from '../../Models/Task.model';

const useStyles = makeStyles({
	root: {
		minWidth: 100,
		backgroundColor: '#F4F5F7',
		cursor: 'pointer',
		margin: '4px 2px',
	},
	title: {
		fontSize: '1.5em',
	},
	description: {
		fontSize: '1em',
		color: '#333',
		overflowWrap: 'break-word',
	},
});

function TaskItem(props: { task: Task }) {
	const { title, description } = props.task;
	const classes = useStyles();

	const handleDragStart = (e: any, title: string) => {
		e.dataTransfer.setData('id', title);
		e.target.style.opacity = '0.4';
	};

	return (
		<Card
			className={classes.root}
			draggable={true}
			onDragStart={(e) => handleDragStart(e, title)}
		>
			<CardContent>
				<Typography className={classes.title} color='textPrimary' gutterBottom>
					{title}
				</Typography>
				<Typography
					color='textSecondary'
					gutterBottom
					variant='subtitle2'
					className={classes.description}
				>
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default TaskItem;
