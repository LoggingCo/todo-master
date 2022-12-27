import { useMutation, useQueryClient } from '@tanstack/react-query';
import TodoApi from 'apis/todoApi';
import { queryKey } from 'consts/qurieskey';

const useUpdateTodoMutate = () => {
  const queryClient = useQueryClient();

  return useMutation((data: any) => TodoApi.updateTodo(data), {
    onSuccess: (res) => {
      // 낙관적 업데이트
      // 쿼리를 다시 불러오기 전에 UI를 업데이트 하고 불러오는 기능
      queryClient.cancelQueries([queryKey.GET_TODO_LIST]);
      // 기존에 있던 저장된 쿼리를 삭제하고
      queryClient.setQueryData([queryKey.GET_TODO_LIST], (oldData: any) => {
        let updateData = oldData.data.data.find((data: any) => data.id === res.data.data.id);
        updateData.content = res.data.data.content;
        updateData.state = res.data.data.state;
        return oldData;
      });
      // 비어있는 쿼리에 oldData(옛날)
      // data를 다시 새로 받아온 데이터를 활요하여
      // UI를 먼저 바꿔주고
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey.GET_TODO_LIST] });
    },
  });
};
export default useUpdateTodoMutate;
