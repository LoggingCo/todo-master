import axios, { AxiosError } from 'axios';
import TokenRepository from '../repository/TokenRepository';
import ApiCustomError from './@error';

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
  withCredentials: true,
});

Axios.interceptors.request.use(
  (config) => {
    const token = TokenRepository.getToken();
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export const ErrorHandle = (error: AxiosError) => {
  console.log(error);
  const err = new ApiCustomError(error.message, error.status);
  if (!error) {
    throw new Error(error);
  }
  return err.message;
};
