import Button from 'components/Button/Button';
import styled from 'styled-components';
import { flexCenter } from 'styles/common';

function SignUpForm({ form }) {
  const onLoginSubmit = (e) => {
    e.preventDefault();
    form = 'login';
  };

  return (
    <S.Form onSubmit={onLoginSubmit}>
      <S.InputBox>
        <input placeholder="e-mail" />
        <span>이메일</span>
      </S.InputBox>
      <S.InputBox>
        <input placeholder="password" />
        <span>암호</span>
      </S.InputBox>
      <S.InputBox>
        <input placeholder="password confirm" />
        <span>암호 확인</span>
      </S.InputBox>
      <Button variant="primary" size="full">
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

const S = {
  Form,
  InputBox,
};
