import { Dispatch, SetStateAction, useCallback, useState } from 'react';

type useInputHook<T> = [T, (e: any) => void, Dispatch<SetStateAction<T>>];

const useInput = <T>(initValue: T): useInputHook<T> => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e: any) => {
    setter(e.currentTarget.value);
  }, []);
  return [value, handler, setter];
};

export default useInput;
