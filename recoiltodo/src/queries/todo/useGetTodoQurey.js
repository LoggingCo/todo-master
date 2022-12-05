import { useQuery } from '@tanstack/react-query';
import TodoApi from 'apis/todoApi';
import { GET_TODO_QUERY } from 'consts/qurieskey';

const useGetTodoQuery = (params) => {
  const { data, error, loading } = useQuery(
    [GET_TODO_QUERY, params],
    () => TodoApi.getTodo(params),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      onError: (error) => {
        console.error(error);
      },
    },
  );

  return { data, error, loading };
};
export default useGetTodoQuery;
