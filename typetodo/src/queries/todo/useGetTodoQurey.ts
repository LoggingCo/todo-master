import { useQuery } from '@tanstack/react-query';
import TodoApi from 'apis/todoApi';
import { queryKey } from 'consts/qurieskey';

const useGetTodoQuery = (params: any) => {
  const { data, error, status } = useQuery(
    [queryKey.GET_TODO_LIST, params],
    () => TodoApi.getTodo(params),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      onError: (error) => {
        console.error(error);
      },
    },
  );

  return { data, error, status };
};
export default useGetTodoQuery;
