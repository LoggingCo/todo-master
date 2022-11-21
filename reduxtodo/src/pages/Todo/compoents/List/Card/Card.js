import styled from 'styled-components';
import { flexAlignCenter, flexCenter } from 'styles/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBan, faPen } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import useInput from 'hooks/useInput';

function TodoCard({ todo, onDeleteTodo, onUpdateTodo }) {
  const [edit, setEdit] = useState(false);
  const [content, onChangeContent] = useInput(todo.content);

  const onSetEdit = () => {
    setEdit(true);
  };

  const onUpdateTodoHandler = () => {
    if (content === todo.content) {
      return setEdit(false);
    }
    onUpdateTodo(todo.id, content, todo.state);
    setEdit(false);
  };

  const onUdpateStateHandler = () => {
    onUpdateTodo(todo.id, todo.content, !todo.state);
  };

  return (
    <S.Wrapper state={todo.state}>
      <S.Header>
        <S.StateBox state={todo.state} onClick={onUdpateStateHandler}>
          <FontAwesomeIcon icon={faCheck} />
        </S.StateBox>
        <S.Title state={todo.state}>
          {todo.title}
          <div>
            <FontAwesomeIcon icon={faPen} onClick={edit ? onUpdateTodoHandler : onSetEdit} />
            <FontAwesomeIcon icon={faBan} onClick={() => onDeleteTodo(todo.id)} />
          </div>
        </S.Title>
      </S.Header>
      <S.Content state={todo.state}>
        {edit ? <textarea value={content} onChange={onChangeContent}></textarea> : todo.content}
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
  background-color: ${({ state, theme }) =>
    state ? theme.palette.gray[100] : theme.palette.white};
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
