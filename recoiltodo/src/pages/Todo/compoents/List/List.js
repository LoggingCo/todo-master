import TodoCard from './Card/Card';
import styled from 'styled-components';
import useUpdateTodoMutation from 'queries/todo/useUpdateTodoMutation';
import useDeleteTodoMutation from 'queries/todo/useDeletetodoMutation';

function TodoList({ todoList }) {
  const updateTodo = useUpdateTodoMutation();
  const deleteTodo = useDeleteTodoMutation();

  // deletetodo
  const onDeleteTodo = (id) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    deleteTodo.mutate(id);
  };

  // update todo
  const onUpdateTodo = (id, title, content, state) => {
    updateTodo.mutate(id, { title, content, state });
  };

  return (
    <S.Wrapper>
      {todoList.length > 0 &&
        todoList.map((item) => (
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
