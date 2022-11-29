import TodoCard from './Card/Card';
import styled from 'styled-components';
import TodoApi from 'apis/todoApi';
import { ErrorHandle } from 'apis/@core';
import { useDispatch } from 'react-redux';
import { deleteTodoRequest, updateTodoRequest } from 'reducer/todo';

function TodoList({ todoList, setTodoList }) {
  const dispatch = useDispatch();

  // deletetodo
  const onDeleteTodo = (id) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    dispatch(deleteTodoRequest(id));
  };

  // update todo
  const onUpdateTodo = (id, content, state) => {
    const data = {
      id,
      content,
      state,
    };
    dispatch(updateTodoRequest(data));
  };

  return (
    <S.Wrapper>
      {todoList.map((item) => (
        <TodoCard
          key={item.id}
          todo={item}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </S.Wrapper>
  );
}
export default TodoList;

const Wrapper = styled.ul`
  width: 90%;
  margin: 0 auto;
  padding: 16px 0 0 0;
`;

const S = {
  Wrapper,
};
