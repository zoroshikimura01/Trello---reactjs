import {
	SET_CATEGORY_TODO,
	SET_CATEGORY_WORKING,
	SET_CATEGORY_COMPLETE,
	SET_CATEGORY_TRASH
} from '../constants/actionTypes';

const initialState = {
	categories: {
		todo: [],
		working: [],
		complete: [],
		trash: []
	}
}

const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CATEGORY_TODO:
			return {
				...state,
				categories: {
					...state,
					todo: action.payload
				}
			}
		case SET_CATEGORY_WORKING:
			return {
				...state,
				categories: {
					...state,
					working: action.payload
				}
			}
		case SET_CATEGORY_COMPLETE:
			return {
				...state,
				categories: {
					...state,
					complete: action.payload
				}
			}
		case SET_CATEGORY_TRASH:
			return {
				...state,
				categories: {
					...state,
					trash: action.payload
				}
			}
		default:
			return state;
	}
}

export default categoryReducer