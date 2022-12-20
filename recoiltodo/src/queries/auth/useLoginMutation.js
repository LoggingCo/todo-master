import AuthApi from 'apis/authApi';
import { useMutation } from '@tanstack/react-query';
import TokenRepository from 'repository/TokenRepository';
import { useNavigate } from 'react-router-dom';

const useLoginMutaion = () => {
  const navigate = useNavigate();
  return useMutation((data) => AuthApi.login(data), {
    onSuccess: (res) => {
      TokenRepository.setToken(res.data.accessToken);
      if (TokenRepository.getToken()) {
        navigate('/todo');
      }
    },
  });
};
export default useLoginMutaion;
