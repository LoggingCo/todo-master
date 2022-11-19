import styled from 'styled-components';
import { flexAlignCenter, flexCenter } from 'styles/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBan, faPen } from '@fortawesome/free-solid-svg-icons';
import useInput from 'hooks/useInput';
import { editState, removetodo, updatetodo } from 'reducer/todo';
import { useDispatch } from 'react-redux';

function TodoCard({ todo }) {
  const [newTodo, onChangeNewTodo, setNewTodo] = useInput(todo.content);
  const dispatch = useDispatch();

  // delete
  const onDeleteTodo = () => {
    dispatch(removetodo({ id: todo.id }));
  };

  // edit
  const onEdittodo = () => {
    dispatch(editState({ id: todo.id }));
  };

  // udpate todo
  const onUpdateTodo = () => {
    if (newTodo === '') {
      alert('내용을 입력해주세요');
      return;
    }

    if (newTodo === todo.content) {
      alert('변경된 내용이 없습니다');
      onEdittodo();
      return;
    }

    dispatch(updatetodo({ id: todo.id, todo: newTodo, state: todo.state }));
    onEdittodo();
  };

  // update state
  const onUpdateState = () => {
    dispatch(updatetodo({ id: todo.id, todo: todo.content, state: !todo.state }));
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.StateBox state={todo.state}>
          <FontAwesomeIcon icon={faCheck} onClick={onUpdateState} />
        </S.StateBox>
        <S.Title state={todo.state}>
          {todo.title}
          <div>
            <FontAwesomeIcon icon={faPen} onClick={todo.edit ? onUpdateTodo : onEdittodo} />
            <FontAwesomeIcon icon={faBan} onClick={onDeleteTodo} />
          </div>
        </S.Title>
      </S.Header>
      <S.Content state={todo.state}>
        {todo.edit ? (
          <textarea value={newTodo} onChange={onChangeNewTodo}></textarea>
        ) : (
          todo.content
        )}
      </S.Content>
    </S.Wrapper>
  );
}
export default TodoCard;

const Wrapper = styled.li`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.white};
  border: 1px solid #999;
  margin: 16px 0;
  border-radius: 8px;
`;

const Header = styled.div`
  border-bottom: 1px dotted #999;
  ${flexAlignCenter};
  padding: 8px 16px;
  height: 48px;
`;

const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: ${({ state }) => (state ? 'line-through' : 'none')};

  & svg {
    cursor: pointer;
    margin-left: 16px;
    :hover {
      transform: scale(1.2);
    }
  }
`;

const StateBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  ${flexCenter};
  color: ${({ state }) => (state ? '#3CB371' : '#999')};
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

const Content = styled.div`
  padding: 16px;
  text-decoration: ${({ state }) => (state ? 'line-through' : 'none')};

  & textarea {
    width: 100%;
    height: 100%;
    border: 1px dotted #999;
    outline: none;
    resize: none;
  }
`;

const S = {
  Wrapper,
  Header,
  StateBox,
  Title,
  Content,
};
