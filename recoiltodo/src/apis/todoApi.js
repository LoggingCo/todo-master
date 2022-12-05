import { Axios } from './@core';

const PATH = '/todo';

const TodoApi = {
  addTodo: ({ title, content }) => {
    return Axios.post(PATH, { title, content });
  },

  getTodo: ({ params }) => {
    return Axios.get(PATH, { params });
  },

  deleteTodo: (id) => {
    return Axios.delete(PATH + `/${id}`);
  },

  updateTodo: (id, { title, content, state }) => {
    console.log(id, title, content, state);
    return Axios.put(PATH + `/${id}`, { title, content, state });
  },
};

export default TodoApi;
