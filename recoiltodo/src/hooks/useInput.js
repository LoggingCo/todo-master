import { useState } from 'react';

const useInput = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return [value, onChange, setValue];
};
export default useInput;
