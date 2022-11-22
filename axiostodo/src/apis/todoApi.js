import { Axios, ErrorHandle } from './@core';

const PATH = '/todo';

const TodoApi = {
  addTodo: ({ title, content }) => {
    return Axios.post(PATH, { title, content });
  },

  getTodo: () => {
    return Axios.get(PATH);
  },

  deleteTodo: (id) => {
    return Axios.delete(PATH + `/${id}`);
  },

  updateTodo: (id, { title, content, state }) => {
    return Axios.put(PATH + `/${id}`, { title, content, state });
  },
};

export default TodoApi;
