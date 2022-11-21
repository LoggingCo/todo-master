import TodoCard from './Card/Card';
import styled from 'styled-components';

function TodoList({ todoList, setTodoList }) {
  // deletetodo
  const onDeleteTodo = (id) => {
    if (window.confirm('삭제하시겠습니까?')) {
      const newTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(newTodoList);
    }
  };

  // update todo
  const onUpdateTodo = (id, content, state) => {
    const newTodoList = [...todoList];
    const todo = newTodoList.find((todo) => todo.id === id);
    todo.content = content;
    todo.state = state;
    setTodoList(newTodoList);
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
