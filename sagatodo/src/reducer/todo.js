import { createAtcion } from 'utils/createAction';
import produce from 'immer';
import { reducerUtils } from 'utils/reducerUtils';

// value
const initialState = {
  todos: [],
  addTodoState: {
    loading: false,
    done: false,
    err: null,
  },
  readTodoState: {
    loading: false,
    done: false,
    err: null,
  },
  updateTodoState: {
    loading: false,
    done: false,
    err: null,
  },
  deleteTodoState: {
    loading: false,
    done: false,
    err: null,
  },
};

// type
export const readTodoRequest = createAtcion('todo/READ_TODO_REQUEST');
export const readTodoSuccess = createAtcion('todo/READ_TODO_SUCCESS');
export const readTodoFailure = createAtcion('todo/READ_TODO_FAILURE');

export const addTodoRequest = createAtcion('todo/ADD_TODO_REQUEST');
export const addTodoSuccess = createAtcion('todo/ADD_TODO_SUCCESS');
export const addTodoFailure = createAtcion('todo/ADD_TODO_FAILURE');

export const deleteTodoRequest = createAtcion('todo/DELETE_TODO_REQUEST');
export const deleteTodoSuccess = createAtcion('todo/DELETE_TODO_SUCCESS');
export const deleteTodooFailure = createAtcion('todo/DELETE_TODO_FAILURE');

export const updateTodoRequest = createAtcion('todo/UPDATE_TODO_REQUEST');
export const updtaeTodoSuccess = createAtcion('todo/UPDATE_TODO_SUCCESS');
export const updateTodooFailure = createAtcion('todo/UPDATE_TODO_FAILURE');

// reducer
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      //read
      case 'todo/READ_TODO_REQUEST':
        reducerUtils.loading(draft.readTodoState);
        break;
      case 'todo/READ_TODO_SUCCESS':
        reducerUtils.success(draft.readTodoState);
        draft.todos = action.payload;
        break;
      case 'todo/READ_TODO_FAILURE':
        reducerUtils.error(draft.readTodoState, action.payload);
        break;
      //add
      case 'todo/ADD_TODO_REQUEST':
        reducerUtils.loading(draft.addTodoState);
        break;
      case 'todo/ADD_TODO_SUCCESS':
        reducerUtils.success(draft.addTodoState);
        draft.todos.unshift(action.payload);
        break;
      case 'todo/ADD_TODO_FAILURE':
        reducerUtils.error(draft.addTodoState, action.payload);
        break;
      //delete
      case 'todo/DELETE_TODO_REQUEST':
        reducerUtils.loading(draft.deleteTodoState);
        break;
      case 'todo/DELETE_TODO_SUCCESS':
        reducerUtils.success(draft.deleteTodoState);
        const deleteTodoId = parseInt(action.payload.id);
        draft.todos = draft.todos.filter((todo) => todo.id !== deleteTodoId);
        console.log(draft.todos.filter((todo) => todo.id !== deleteTodoId));
        break;
      case 'todo/DELETE_TODO_FAILURE':
        reducerUtils.error(draft.deleteTodoState, action.payload);
        break;
      //update
      case 'todo/UPDATE_TODO_REQUEST':
        reducerUtils.loading(draft.updateTodoState);
        break;
      case 'todo/UPDATE_TODO_SUCCESS':
        reducerUtils.success(draft.updateTodoState);
        const updateTodoId = parseInt(action.payload.id);
        const index = draft.todos.findIndex((todo) => todo.id === updateTodoId);
        draft.todos[index].content = action.payload.content;
        draft.todos[index].state = action.payload.state;
        break;
      case 'todo/UPDATE_TODO_FAILURE':
        reducerUtils.error(draft.updateTodoState, action.payload);
        break;
      //default
      default:
        break;
    }
  });
export default reducer;
