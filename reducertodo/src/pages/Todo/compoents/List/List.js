import TodoCard from './Card/Card';
import styled from 'styled-components';
import { DELETE_TODO, UPDATE_TODO, useTodoDispatch } from 'context/todoContext';

function TodoList({ todoList }) {
  const dispatch = useTodoDispatch();

  // delete todo
  const onDeleteTodo = (id) => {
    if (window.confirm('삭제하시겠습니까?')) {
      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
    }
  };

  // update todo
  const onUpdateTodo = (id, content, state) => {
    const update_todo = {
      id,
      content,
      state,
    };

    dispatch({
      type: UPDATE_TODO,
      payload: update_todo,
    });
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
