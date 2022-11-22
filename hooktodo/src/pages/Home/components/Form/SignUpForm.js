import Button from 'components/Button/Button';
import useInputs from 'hooks/useInputs';
import useHomeRegExp from 'pages/Home/hooks/useHomeRegExp';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { flexCenter } from 'styles/common';

function SignUpForm({ setForm }) {
  // state
  const [confirm, setConfirm] = useState(false);
  const [{ email, password, passwordConfirm }, onChangeForm] = useInputs({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  // regexp test
  const disabled = useHomeRegExp(email, password);

  // onSignUpSumit
  const onSignUpSumit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setConfirm(false);
    }
    setForm('login');
  };

  // confirm check
  useEffect(() => {
    if (password !== passwordConfirm) {
      return setConfirm(false);
    }
    return setConfirm(true);
  }, [password, passwordConfirm]);

  // render
  return (
    <S.Form onSubmit={onSignUpSumit}>
      <S.InputBox>
        <input placeholder="e-mail" name={'email'} onChange={onChangeForm} />
        <span>이메일</span>
      </S.InputBox>
      <S.InputBox>
        <input placeholder="password" type={'password'} name={'password'} onChange={onChangeForm} />
        <span>암호</span>
      </S.InputBox>
      <S.InputBox>
        <input
          placeholder="password confirm"
          type={'password'}
          name={'passwordConfirm'}
          onChange={onChangeForm}
        />
        <span>암호 확인</span>
      </S.InputBox>
      <S.Error confirm={confirm}>{'비밀번호 확인이 일치하지 않습니다.'}</S.Error>
      <Button variant="primary" size="full" disabled={disabled || !confirm}>
        회원가입
      </Button>
    </S.Form>
  );
}
export default SignUpForm;

const Form = styled.form`
  width: 360px;
  background-color: ${({ theme }) => theme.palette.white};
  ${flexCenter};
  flex-direction: column;
  padding: 32px 0 0 0;
`;

const InputBox = styled.div`
  width: 80%;
  height: 48px;
  ${flexCenter};
  position: relative;
  margin-bottom: 16px;

  & input {
    width: 100%;
    border: 1px solid #999;
    border-radius: 5px;
    height: 100%;
    text-align: center;
  }

  & span {
    position: absolute;
    left: 15px;
    top: -5px;
    font-size: ${({ theme }) => theme.fontSize.small};
    background-color: ${({ theme }) => theme.palette.white};
    z-index: 1;
    padding: 0 5px;
  }
`;

const Error = styled.p`
  color: ${({ theme }) => theme.palette.error};
  font-size: ${({ theme }) => theme.fontSize.small};
  margin: 8px 0;
  visibility: ${({ confirm }) => (confirm ? 'hidden' : 'visible')};
`;

const S = {
  Form,
  InputBox,
  Error,
};
