import { useMutation } from '@tanstack/react-query';
import TodoApi from 'apis/todoApi';

const useAddTodoMuation = () => useMutation((todo) => TodoApi.addTodo(todo));
export default useAddTodoMuation;
