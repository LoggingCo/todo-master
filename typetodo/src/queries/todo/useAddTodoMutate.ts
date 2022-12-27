import { useMutation, useQueryClient } from '@tanstack/react-query';
import TodoApi from 'apis/todoApi';
import { queryKey } from 'consts/qurieskey';
import { AddTodoRequestType } from 'types/request/todo';

const useAddTodoMutate = (setIsOpenAddModal: any) => {
  const qureyClient = useQueryClient();
  return useMutation((todo: AddTodoRequestType) => TodoApi.addTodo(todo), {
    onSuccess: () => {
      qureyClient.invalidateQueries({ queryKey: [queryKey.GET_TODO_LIST] });
      setIsOpenAddModal(false);
    },
  });
};

export default useAddTodoMutate;
