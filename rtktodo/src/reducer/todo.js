import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TodoApi from 'apis/todoApi';
import { reducerUtils } from 'utils/reducerUtils';

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

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  extraReducers: (builder) => {
    //add todos
    builder.addCase(addTodos.pending, (state) => {
      reducerUtils.loading(state.addTodoState);
    });

    builder.addCase(addTodos.fulfilled, (state, action) => {
      reducerUtils.success(state.addTodoState);
      state.todos.unshift(action.payload);
    });

    builder.addCase(addTodos.rejected, (state, action) => {
      reducerUtils.error(state.addTodoState, action.payload);
    });

    // read todos
    builder.addCase(getTodos.pending, (state) => {
      reducerUtils.loading(state.readTodoState);
    });

    builder.addCase(getTodos.fulfilled, (state, action) => {
      reducerUtils.success(state.readTodoState);
      state.todos = action.payload;
    });

    builder.addCase(getTodos.rejected, (state, action) => {
      reducerUtils.error(state.readTodoState, action.payload);
    });

    // update todos
    builder.addCase(updateTodos.pending, (state) => {
      reducerUtils.loading(state.updateTodoState);
    });

    builder.addCase(updateTodos.fulfilled, (state, action) => {
      reducerUtils.success(state.updateTodoState);
      const todo = state.todos.find((item) => item.id === action.payload.id);
      todo.state = action.payload.state;
      todo.content = action.payload.content;
    });

    builder.addCase(updateTodos.rejected, (state, action) => {
      reducerUtils.error(state.updateTodoState, action.payload);
    });

    // delete todos
    builder.addCase(deleteTodos.pending, (state) => {
      reducerUtils.loading(state.deleteTodoState);
    });

    builder.addCase(deleteTodos.fulfilled, (state, action) => {
      reducerUtils.success(state.deleteTodoState);
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    });

    builder.addCase(deleteTodos.rejected, (state, action) => {
      reducerUtils.error(state.deleteTodoState, action.payload);
    });
  },
});

export const addTodos = createAsyncThunk('todo/addtodos', async (todo) => {
  const response = await TodoApi.addTodo(todo);
  return response.data;
});

export const getTodos = createAsyncThunk('todo/gettodos', async () => {
  const response = await TodoApi.getTodo({ params: { _sort: 'id', _order: 'desc' } });
  return response.data;
});

export const updateTodos = createAsyncThunk('todo/updatetodos', async (todo) => {
  console.log(todo);
  const response = await TodoApi.updateTodo(todo.id, todo);
  return response.data;
});

export const deleteTodos = createAsyncThunk('todo/deletetodos', async (id) => {
  await TodoApi.deleteTodo(id);
  return { id };
});
