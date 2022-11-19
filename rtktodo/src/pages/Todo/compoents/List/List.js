import TodoCard from './Card/Card';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

function TodoList() {
  const todolist = useSelector((state) => state.todo.todos);

  return (
    <S.Wrapper>
      {todolist.map((item) => (
        <TodoCard key={item.id} todo={item} />
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
