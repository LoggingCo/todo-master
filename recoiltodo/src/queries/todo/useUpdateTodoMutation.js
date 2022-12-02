import { useMutation } from '@tanstack/react-query';
import TodoApi from 'apis/todoApi';

const useUpdateTodoMutation = () => useMutation((id, data) => TodoApi.addTodo(id, data));
export default useUpdateTodoMutation;
