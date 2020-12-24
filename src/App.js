import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import {
	Button,
	FormControl,
	Input,
	InputLabel,
	Container,
} from '@material-ui/core';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import db from './firebase';
import firebase from 'firebase';

const App = () => {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		db.collection('todos')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => {
				setTodos(
					snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
				);
			});
	}, []);

	const addTodos = (e) => {
		e.preventDefault();

		db.collection('todos').add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput('');
	};

	return (
		<Container className='App'>
			<h1>React Todo App</h1>
			<form action=''>
				<FormControl>
					<InputLabel>Add Todo 🖊 </InputLabel>
					<Input
						type='text'
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				</FormControl>
				<Button
					variant='contained'
					color='primary'
					type='submit'
					onClick={addTodos}
					disabled={!input}
				>
					<PlaylistAddCheckIcon />
					Add Todo
				</Button>
				<ul>
					{todos.map((todo) => (
						<Todo todo={todo} />
					))}
				</ul>
			</form>
		</Container>
	);
};

export default App;
