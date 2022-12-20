import styled from 'styled-components';
import { Button } from 'components/Button/Style';
import { flexAlignCenter, flexCenter } from 'styles/common';
import TodoFormModal from './compoents/Modal/Form/Form';
import TodoList from './compoents/List/List';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from 'recoil';
import { addModalAtom } from 'atoms/todo/atoms';
import useAddTodoMutate from 'queries/todo/useAddTodoMutate';

function TodoPage() {
  const [isOpenAddModal, setIsOpenAddModal] = useRecoilState(addModalAtom);
  const addTodo = useAddTodoMutate(setIsOpenAddModal);

  const onOpenFormModal = () => {
    setIsOpenAddModal(true);
  };

  const onCloseFormModal = () => {
    setIsOpenAddModal(false);
  };

  // addtodo
  const onAddTodo = async (title, content) => {
    const data = await new Promise((reject, resolve) => {
      if (!title || !content) {
        return resolve();
      }
      const newTodo = {
        id: Math.floor(Math.random() * 100000),
        title,
        content,
        state: false,
      };
      reject(newTodo);
    });

    addTodo.mutate(data);
  };

  return (
    <>
      {isOpenAddModal && (
        <TodoFormModal onCloseFormModal={onCloseFormModal} onAddTodo={onAddTodo} />
      )}
      <S.Wrapper>
        <S.Container>
          <S.Title>List</S.Title>
          <S.Content>
            <TodoList />
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
