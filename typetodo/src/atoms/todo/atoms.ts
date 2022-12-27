import { atom } from 'recoil';

export const addModalAtom = atom<boolean>({
  key: 'addModalAtom',
  default: false,
});
