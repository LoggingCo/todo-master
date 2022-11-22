import { useState } from 'react';

const useInputs = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const getValue = (event) => {
    if (event.target.type === 'checkbox') {
      return event.target.checked;
    }
    return event.target.value;
  };

  const handleChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: getValue(event),
    }));
  };

  return [values, handleChange, setValues];
};
export default useInputs;
