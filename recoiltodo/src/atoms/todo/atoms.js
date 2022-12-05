import { atom } from 'recoil';

export const todoListAtom = atom({
  key: 'todoList',
  default: [],
});
