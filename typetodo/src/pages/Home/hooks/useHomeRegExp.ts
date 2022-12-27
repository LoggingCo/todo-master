import { useState, useEffect, useRef } from 'react';

const useHomeRegExp = (email: string, password: string): boolean => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (email.includes('@') && password.length >= 8) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  return disabled;
};
export default useHomeRegExp;
