import {
  AddTodoRequestType,
  DeleteTodoRequestType,
  UpdateTodoRequestType,
} from 'types/request/todo';
import { Axios } from './@core';

const PATH = '/todo';

const TodoApi = {
  addTodo: ({ title, content }: AddTodoRequestType) => {
    return Axios.post(PATH, { title, content });
  },

  getTodo: ({ params }: any) => {
    return Axios.get(PATH, { params });
  },

  deleteTodo: (id: DeleteTodoRequestType) => {
    return Axios.delete(PATH + `/${id}`);
  },

  updateTodo: ({ id, title, content, state }: UpdateTodoRequestType) => {
    return Axios.put(PATH + `/${id}`, { title, content, state });
  },
};

export default TodoApi;
