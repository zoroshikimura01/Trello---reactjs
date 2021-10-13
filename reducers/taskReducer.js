import {
	DRAG_START,
	DRAG_OVER,
	DRAG_DROP,
	KEY_PRESS,
	SET_TASK
} from '../constants/actionTypes'

const initialState = {
	tasks: [
		{
			name:{},
			category:{}
		}
	]
};

const taskReducer = (state= initialState, action) => {
	switch(action.type) {
		case SET_TASK:
			return {
				...state,
				tasks: {
					...state.tasks,
					name: action.payload
				}
			}
		case DRAG_START:
			return {
				...state,
				tasks: action.payload
			};
		case DRAG_OVER:
			return {
				...state,
				tasks: action.payload
			};
		case DRAG_DROP:
			return {
				...state,
				tasks: action.payload
			};
		case KEY_PRESS:
			return {
				...state,
				tasks: action.payload
			};
		default:
			return state
	}
}

export default taskReducer
