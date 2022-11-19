import { combineReducers } from 'redux';
import { todoSlice } from './todo';

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
});
export default rootReducer;
