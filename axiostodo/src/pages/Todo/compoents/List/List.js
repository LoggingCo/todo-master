import TodoCard from './Card/Card';
import styled from 'styled-components';
import TodoApi from 'apis/todoApi';
import { ErrorHandle } from 'apis/@core';

function TodoList({ todoList, setTodoList }) {
  // deletetodo
  const onDeleteTodo = (id) => {
    if (window.confirm('삭제하시겠습니까?')) {
      TodoApi.deleteTodo(id)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setTodoList(todoList.filter((todo) => todo.id !== res.data.data));
          }
        })
        .catch((error) => {
          ErrorHandle(error);
        });
    }
  };

  // update todo
  const onUpdateTodo = (id, content, state) => {
    TodoApi.updateTodo(id, { content, state })
      .then((res) => {
        const { data } = res.data;
        const newTodoList = [...todoList];
        const index = newTodoList.findIndex((todo) => todo.id === data.id);
        newTodoList[index] = data;
        setTodoList(newTodoList);
      })
      .catch((error) => {
        ErrorHandle(error);
      });
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
