import styled from 'styled-components';
import { Button } from 'components/Button/Style';
import { flexAlignCenter, flexCenter } from 'styles/common';
import TodoFormModal from './compoents/Modal/Form/Form';
import TodoList from './compoents/List/List';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, ADD_TODO } from 'reducer/todo';

function TodoPage() {
  const [isOpenFormModal, setIsOpenFormModal] = useState(false);
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const onOpenFormModal = () => {
    setIsOpenFormModal(true);
  };

  const onCloseFormModal = () => {
    setIsOpenFormModal(false);
  };

  // addtodo
  const onAddTodo = (title, content) =>
    new Promise((reject, resolve) => {
      if (!title || !content) {
        return resolve();
      }
      setTimeout(() => {
        const newTodo = {
          id: Math.floor(Math.random() * 100000),
          title,
          content,
          state: false,
        };
        reject(newTodo);
      }, 1000);
    }).then((res) => {
      dispatch(addTodo(res));
      onCloseFormModal();
    });

  return (
    <>
      {isOpenFormModal && (
        <TodoFormModal onCloseFormModal={onCloseFormModal} onAddTodo={onAddTodo} />
      )}
      <S.Wrapper>
        <S.Container>
          <S.Title>List</S.Title>
          <S.Content>
            <TodoList todoList={todoList} />
          </S.Content>
          <S.ButtonBox>
            <Button variant="primary" size="full" onClick={onOpenFormModal}>
              추가
            </Button>
          </S.ButtonBox>
        </S.Container>
        <ToastContainer autoClose={2000} theme="colored" />
      </S.Wrapper>
    </>
  );
}
export default TodoPage;

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.palette.primary[300]};
  color: ${({ theme }) => theme.palette.fontColor};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  padding-bottom: 64px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const S = {
  Wrapper,
  Container,
  Title,
  ButtonBox,
  Content,
};
