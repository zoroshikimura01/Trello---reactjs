import React from 'react';
import { setTask } from '../actions/trello';
import { useDispatch } from 'react-redux';

const TaskMaker = () => {
	const dispatch = useDispatch();
	const handleKeyPress = (e) => {
		if((e.key === 'Enter') && (e.target.value !== '')) {
			dispatch(setTask(e.target.value));
			e.target.value = '';
		}
	}
	return (
		<div>
			<input 
				type='text'
				placeholder='Task name'
				onKeyPress={(e) => handleKeyPress(e)}
			/>
		</div>
	)
}

export default TaskMaker
