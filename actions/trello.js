import {
  DRAG_START,
  DRAG_OVER,
  DRAG_DROP,
  KEY_PRESS,
  SET_TASK,
  SET_CATEGORY_TODO,
  SET_CATEGORY_WORKING,
  SET_CATEGORY_COMPLETE,
  SET_CATEGORY_TRASH,
  TASK_MOVE
} from '../constants/actionTypes';

const dragStart = (value) => ({
  type: DRAG_START,
  payload: value
});

const dragOver = (value) => ({
  type: DRAG_OVER,
  payload: value
});

const dragDrop = (value) => ({
  type: DRAG_DROP,
  payload: value
});

const keyPress = (value) => ({
  type: KEY_PRESS,
  payload: value
});

const setTask = (value) => ({
  type: SET_TASK,
  payload: value, 
})

const setCategoryTodo = (value) => ({
  type: SET_CATEGORY_TODO,
  payload: value
})

const setCategoryWorking = (value) => ({
  type: SET_CATEGORY_WORKING,
  payload: value
})

const setCategoryComplete = (value) => ({
  type: SET_CATEGORY_COMPLETE,
  payload: value
})

const setCategoryTrash = (value) => ({
  type: SET_CATEGORY_TRASH,
  payload: value
})

const taskMove = (value) => ({
  type: TASK_MOVE,
  payload: value
})

export {
  dragStart,
  dragOver,
  dragDrop,
  keyPress,
  setTask,
  setCategoryTodo,
  setCategoryWorking,
  setCategoryComplete,
  setCategoryTrash,
  taskMove
}