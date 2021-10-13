import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dragDrop } from '../actions/trello';

const TaskBoard = () => {
	const dispatch = useDispatch();
	const categories = useSelector(state => state.categories.categories)
	const tasks = useSelector(state => state.tasks.tasks)
	console.log(categories)
	console.log(tasks, 'Tasks')
	const onDragOver = (e) => {
		e.preventDefault();
	} 
	const onDrop = (e) => {
		e.dataTransfer(dispatch(dragDrop(tasks)))
	}
	return (
	<div>
		<div
			onDragOver={(e) => onDragOver(e)}
			onDrop={(e) => onDrop(e, 'todo')}
		>
		<h1>Todo</h1>
		</div>
		<div
			onDragOver={(e) => onDragOver(e)}
			onDrop={(e) => onDrop(e, 'working')}
		>
		<h1>Working</h1>
		</div>
		<div
			onDragOver={(e) => onDragOver(e)}
			onDrop={(e) => onDrop(e, 'complete')}
		>
		<h1>Complete</h1>
		</div>
		<div
			onDragOver={(e) => onDragOver(e)}
			onDrop={(e) => onDrop(e, 'trash')}
		>
		<h1>Trash</h1>
		</div>
	</div>
	)
}

export default TaskBoard;
