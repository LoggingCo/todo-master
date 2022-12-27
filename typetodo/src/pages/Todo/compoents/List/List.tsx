import TodoCard from './Card/Card';
import styled from 'styled-components';
import useDeleteTodoMutate from 'queries/todo/useDeleteTodoMutate';
import useUpdateTodoMutate from 'queries/todo/useUpdateTodoMutate';
import useGetTodoQuery from 'queries/todo/useGetTodoQurey';
import { AddTodoRequestType } from 'types/request/todo';
import { GetTodoResponseType } from 'types/response/todo';

function TodoList() {
  const { data: todoList, status } = useGetTodoQuery({ params: { _sort: 'id', _order: 'desc' } });
  const deleteTodo = useDeleteTodoMutate();
  const updateTodo = useUpdateTodoMutate();

  // deletetodo
  const onDeleteTodo = (id: number) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    deleteTodo.mutate(id);
  };

  // update todo
  const onUpdateTodo = (id: number, title: string, content: string, state: boolean) => {
    const data: AddTodoRequestType = { id, title, content, state };
    updateTodo.mutate(data);
  };

  if (status === 'loading') return <div>로딩중...</div>;

  return (
    <S.Wrapper>
      {todoList &&
        todoList.data.map((item: GetTodoResponseType) => (
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
