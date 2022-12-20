import { useMutation, useQueryClient } from '@tanstack/react-query';
import TodoApi from 'apis/todoApi';
import { queryKey } from 'consts/qurieskey';

const useDeleteTodoMutate = () => {
  const queryClient = useQueryClient();
  return useMutation((id) => TodoApi.deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey.GET_TODO_LIST);
    },
  });
};
export default useDeleteTodoMutate;
