import { useMutation, useQueryClient } from '@tanstack/react-query';
import TodoApi from 'apis/todoApi';
import { queryKey } from 'consts/qurieskey';
import { DeleteTodoRequestType } from 'types/request/todo';

const useDeleteTodoMutate = () => {
  const queryClient = useQueryClient();
  return useMutation((id: DeleteTodoRequestType) => TodoApi.deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey.GET_TODO_LIST] });
    },
  });
};
export default useDeleteTodoMutate;
