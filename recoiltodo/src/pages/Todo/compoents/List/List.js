import TodoCard from './Card/Card';
import styled from 'styled-components';
import TodoApi from 'apis/todoApi';
import { useMutation } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { todoListAtom } from 'atoms/todo/atoms';

function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  const updateTodo = useMutation(
    (data) => {
      const { title, content, state } = data;
      return TodoApi.updateTodo(data.id, { title, content, state });
    },
    {
      onSuccess: (res) => {
        const { data } = res;
        const newTodoList = [...todoList];
        const index = newTodoList.findIndex((todo) => todo.id === data.id);
        newTodoList[index] = data;
        setTodoList(newTodoList);
      },
    },
  );

  const deleteTodo = useMutation((id) => TodoApi.deleteTodo(id), {
    onSuccess: (res) => {
      setTodoList((prev) => prev.filter((todo) => todo.id !== res.id));
    },
  });

  // deletetodo
  const onDeleteTodo = (id) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    deleteTodo.mutate(id);
  };

  // update todo
  const onUpdateTodo = (id, title, content, state) => {
    const data = { id, title, content, state };
    updateTodo.mutate(data);
  };

  return (
    <S.Wrapper>
      {todoList &&
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
