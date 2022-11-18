import TodoCard from './Card/Card';
import styled from 'styled-components';

function TodoList() {
  const arr = [
    {
      id: 1,
      title: 'title1',
      content: 'content1',
      state: false,
      edit: false,
    },
    {
      id: 2,
      title: 'title2',
      content: 'content2',
      state: true,
      edit: false,
    },
    {
      id: 3,
      title: 'title3',
      content: 'content3',
      state: false,
      edit: false,
    },
    {
      id: 4,
      title: 'title4',
      content: 'content4',
      state: false,
      edit: false,
    },
    {
      id: 5,
      title: 'title5',
      content: 'content5',
      state: true,
      edit: false,
    },
  ];

  console.log(arr.length);

  return (
    <S.Wrapper>
      {arr.map((item) => (
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
