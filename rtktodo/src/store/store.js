import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducer';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development', // true , false
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV === 'development') {
      return [...getDefaultMiddleware(), logger];
    }
  },
});
