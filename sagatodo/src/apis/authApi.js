import { Axios } from './@core';

const PATH = '/api/user';

const AuthApi = {
  login: function ({ email, password }) {
    return Axios.post(PATH + `/login`, { email, password });
  },

  signup: function ({ email, password }) {
    return Axios.post(PATH + `/sign`, { email, password });
  },
};

export default AuthApi;
