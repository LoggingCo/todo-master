import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { TodoApi } from '../apis/TodoApi';

// export const addTodos = createAsyncThunk('todo/addtodos', async (todo) => {
//   const response = await TodoApi.createTodo(todo);
//   return response.data;
// });

const initialState = {
  todos: [
    {
      id: 1,
      title: 'expamle',
      content: 'expalme content',
      state: false,
      edit: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.todos.unshift(action.payload);
    },
    editState: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.edit = !todo.edit;
    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
    updatetodo: (state, action) => {
      const todo = state.todos.find((item) => item.id === action.payload.id);
      todo.state = action.payload.state;
      todo.content = action.payload.todo;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(addTodos.pending, (state, action) => {
  //     //loading: true;
  //     //done: false;
  //     //err: null
  //     console.log(action);
  //   });

  //   builder.addCase(addTodos.fulfilled, (state, action) => {
  //     //loading: false;
  //     //done: true;
  //     //err: null
  //     state.todos.unshift(action.payload);
  //   });

  //   builder.addCase(addTodos.rejected, (state, action) => {
  //     //loading: false;
  //     //done: true;
  //     //err: action.payload.err
  //   });
  // },
});

export const { addtodo, removetodo, editState, updatetodo } = todoSlice.actions;
