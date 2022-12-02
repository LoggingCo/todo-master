import { useState } from 'react';
import styled from 'styled-components';
import { flexCenter } from 'styles/common';
import LoginForm from './components/Form/LoginForm';
import SignUpForm from './components/Form/SignUpForm';

function HomePage() {
  const [form, setForm] = useState('login');

  const onFormChange = (e) => {
    const { innerText } = e.target;
    setForm(innerText.toLowerCase());
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.LoginSelector form={form} onClick={onFormChange}>
          LOGIN
        </S.LoginSelector>
        <S.SignUpSelector form={form} onClick={onFormChange}>
          SIGN
        </S.SignUpSelector>
      </S.Header>
      {form === 'login' ? <LoginForm /> : <SignUpForm setForm={setForm} />}
    </S.Wrapper>
  );
}
export default HomePage;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter}
  flex-direction: column;
`;

const Header = styled.div`
  background-color: #f5f5f5;
  width: 360px;
  height: 48px;
  position: relative;
  display: flex;

  & > div {
    height: 100%;
    width: 50%;
    ${flexCenter};
    cursor: pointer;

    :hover {
      background-color: #e0e0e0;
    }
  }
`;

const LoginSelector = styled.div`
  background-color: ${({ form }) => (form === 'login' ? '#e0e0e0' : '#f5f5f5')};
`;

const SignUpSelector = styled.div`
  background-color: ${({ form }) => (form === 'sign' ? '#e0e0e0' : '#f5f5f5')};
`;

const S = {
  Wrapper,
  Header,
  LoginSelector,
  SignUpSelector,
};
