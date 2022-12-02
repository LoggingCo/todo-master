import { Axios } from './@core';

const AuthApi = {
  login: function ({ email, password }) {
    return Axios.post(`/login`, { email, password });
  },

  signup: function ({ email, password }) {
    return Axios.post(`/signup`, { email, password });
  },
};

export default AuthApi;
