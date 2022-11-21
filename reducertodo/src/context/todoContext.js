import { createContext, useContext, useReducer } from 'react';

// value
const initialState = [{ id: 1, title: 'title1', content: 'content1', state: false }];

// crreate context
const todoStateContenxt = createContext(initialState);
const todoDispatchContenxt = createContext(null);

// type
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'TOGGLE_TODO';

// reducer
const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case UPDATE_TODO:
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

// provider
const TodoProvider = ({ children }) => {
  const [todoList, dispatch] = useReducer(todoReducer, initialState);

  return (
    <todoStateContenxt.Provider value={todoList}>
      <todoDispatchContenxt.Provider value={dispatch}>{children}</todoDispatchContenxt.Provider>
    </todoStateContenxt.Provider>
  );
};
export default TodoProvider;

// useContext
export const useTodoState = () => {
  const context = useContext(todoStateContenxt);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
};

export const useTodoDispatch = () => {
  const context = useContext(todoDispatchContenxt);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
};
