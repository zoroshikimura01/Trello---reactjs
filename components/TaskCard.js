import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dragStart } from '../actions/trello';

const TaskCard = () => {
  const dispatch = useDispatch();
	const tasks = useSelector(state => state.tasks.tasks)
	
	const onDragStart = (value) => {
		dispatch(dragStart(value))
	}

	return (
		<div className="item-container"
			key={tasks.name}
			draggable
			onDrag={(e) => onDragStart(tasks.name)}
		>
			{tasks.name}
		</div>
	)
}

export default TaskCard;
