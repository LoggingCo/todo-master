import styled from 'styled-components';
import { flexCenter } from 'styles/common';
import LoginForm from './components/Form/Form';

function HomePage() {
  return (
    <S.Wrapper>
      <LoginForm />
    </S.Wrapper>
  );
}
export default HomePage;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter}
`;

const S = {
  Wrapper,
};
