import TodoCard from './Card/Card';
import styled from 'styled-components';
import { deleteTodo, updateTodo } from 'reducer/todo';
import { useDispatch } from 'react-redux';

function TodoList({ todoList }) {
  const dispatch = useDispatch();

  // delete todo
  const onDeleteTodo = (id) => {
    if (window.confirm('삭제하시겠습니까?')) {
      dispatch(deleteTodo(id));
    }
  };

  // update todo
  const onUpdateTodo = (id, content, state) => {
    const update_todo = {
      id,
      content,
      state,
    };

    dispatch(updateTodo(update_todo));
  };

  return (
    <S.Wrapper>
      {todoList.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
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
