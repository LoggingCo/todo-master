import { useState, useEffect, useRef } from 'react';

const useHomeRegExp = (email, password) => {
  const [disabled, setDisabled] = useState(true);

  //   1. 정규 표현식
  //   const emailExp = useRef(
  //     /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
  //   );
  //   const passwordExp = useRef(/^.{8}/);

  //   useEffect(() => {
  //     if (emailExp.current.test(email) && passwordExp.current.test(password)) {
  //       setDisabled(false);
  //     } else {
  //       setDisabled(true);
  //     }
  //   }, [email, password]);

  //   2. 빌트인 객체
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
