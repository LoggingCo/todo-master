import { useMutation, useQueryClient } from '@tanstack/react-query';
import TodoApi from 'apis/todoApi';
import { queryKey } from 'consts/qurieskey';

const useAddTodoMutate = (setIsOpenAddModal) => {
  const qureyClient = useQueryClient();
  return useMutation((todo) => TodoApi.addTodo(todo), {
    onSuccess: () => {
      qureyClient.invalidateQueries(queryKey.GET_TODO_LIST);
      setIsOpenAddModal(false);
    },
  });
};

export default useAddTodoMutate;
