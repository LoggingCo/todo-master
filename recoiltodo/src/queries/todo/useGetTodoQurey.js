import { useQuery } from '@tanstack/react-query';
import ApiCustomError from 'apis/@error';
import TodoApi from 'apis/todoApi';
import { GET_TODO_QUERY } from 'consts/qurieskey';

const useGetTodoQuery = () => {
  const { data, error, loading } = useQuery([GET_TODO_QUERY], () => TodoApi.getTodo(), {
    refetchOnWindowFocus: false,
    retry: 1,
    onError: (error) => {
      const err = ApiCustomError(error.response.data, error.status);
      return err;
    },
  });

  return { data, error, loading };
};
export default useGetTodoQuery;
