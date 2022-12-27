import { AuthLoginRequestType, AuthSigunRequestType } from 'types/request/auth';
import { Axios } from './@core';

const AuthApi = {
  login: function ({ email, password }: AuthLoginRequestType): Promise<any> {
    return Axios.post(`/login`, { email, password });
  },

  signup: function ({ email, password }: AuthSigunRequestType): Promise<any> {
    return Axios.post(`/signup`, { email, password });
  },
};

export default AuthApi;
