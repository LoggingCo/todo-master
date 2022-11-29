import { Axios } from './@core';

const PATH = '/api/todo';

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

  updateTodo: (id, { content, state }) => {
    return Axios.put(PATH + `/${id}`, { content, state });
  },
};

export default TodoApi;
