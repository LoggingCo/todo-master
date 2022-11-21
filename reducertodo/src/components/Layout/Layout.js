import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter } from '../../styles/common';

function Layout() {
  return (
    <>
      <S.Header>
        <h1>Todo List</h1>
      </S.Header>
      <Outlet />
    </>
  );
}
export default Layout;

const Header = styled.div`
  height: 60px;
  ${flexCenter};
`;

const S = {
  Header,
};
