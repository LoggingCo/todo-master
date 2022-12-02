import { useMutation } from '@tanstack/react-query';
import TodoApi from 'apis/todoApi';

const useDeleteTodoMutation = () => useMutation((id) => TodoApi.addTodo(id));
export default useDeleteTodoMutation;
