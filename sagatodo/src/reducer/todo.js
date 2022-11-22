import { createAtcion } from 'utils/createAction';

// value
const initialState = [{ id: 1, title: 'title1', content: 'content1', state: false }];

// type
export const addTodo = createAtcion('ADD_TODO');
export const deleteTodo = createAtcion('DELETE_TODO');
export const updateTodo = createAtcion('UPDATE_TODO');

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    case 'UPDATE_TODO':
      console.log(action);
      const newTodo = [...state];
      const index = newTodo.findIndex((todo) => todo.id === action.payload.id);
      newTodo[index].content = action.payload.content;
      newTodo[index].state = action.payload.state;
      return newTodo;
    default:
      return state;
  }
};
export default reducer;
