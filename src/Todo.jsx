import React, { useState } from 'react';
import './Todo.css';
import {
	List,
	ListItem,
	ListItemText,
	Button,
	Modal,
	InputLabel,
	Input,
	FormControl,
	Box,
	Container,
	Paper,
} from '@material-ui/core';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UpdateIcon from '@material-ui/icons/Update';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 470,
		backgroundColor: 'lavender',
		border: '1px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(5),
		marginTop: theme.spacing(5),
	},
}));

const Todo = (props) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState('');

	const handleOpen = () => {
		setOpen(true);
	};

	const updateTodo = (e) => {
		e.preventDefault();
		db.collection('todos').doc(props.todo.id).set(
			{
				todo: input,
			},
			{ merge: true }
		);
		setInput('');
		setOpen(false);
	};

	return (
		<>
			<Container maxWidth='sm'>
				<Modal open={open} onClose={(e) => setOpen(false)}>
					<Container maxWidth='sm'>
						<Paper component={Box} className={classes.paper}>
							<h1> UPDATE TODO </h1>
							<form action=''>
								<FormControl>
									<InputLabel> Update your Todo</InputLabel>
									<Input
										type='text'
										value={input}
										placeholder={props.todo.todo}
										onChange={(e) => setInput(e.target.value)}
									/>
								</FormControl>

								<Button
									onClick={(e) => setOpen(false)}
									disabled={!input}
									type='submit'
									variant='contained'
									color='primary'
									onClick={updateTodo}
									size='small'
									startIcon={<UpdateIcon />}
								>
									Update Todo
								</Button>
							</form>
						</Paper>
					</Container>
				</Modal>

				<List>
					<Box>
						<ListItem>
							<ListItemText
								primary={props.todo.todo}
								secondary='Dummy Deadline ⏰'
							/>
						</ListItem>
					</Box>
					<Box className='button__block'>
						<Button
							variant='contained'
							color='primary'
							size='small'
							startIcon={<MoreVertIcon />}
							onClick={(e) => setOpen(true)}
						>
							Edit
						</Button>
					</Box>
					<Box className='button__block' ml={3}>
						<Button
							variant='contained'
							btn-danger
							color='secondary'
							startIcon={<DeleteIcon />}
							size='small'
							onClick={(e) => {
								db.collection('todos').doc(props.todo.id).delete();
							}}
						>
							Delete
						</Button>
					</Box>
				</List>
			</Container>
		</>
	);
};

export default Todo;
