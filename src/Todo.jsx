import {
	ListItemText,
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ImageIcon,
} from '@material-ui/core';
import React from 'react';
import './Todo.css';

const Todo = ({ todo }) => {
	return (
		<List className='todo__list'>
			<ListItem>
				<ListItemAvatar></ListItemAvatar>
				<ListItemText primary={todo} secondary='Dummy Deadline ⏰' />
			</ListItem>
		</List>
	);
};

export default Todo;
