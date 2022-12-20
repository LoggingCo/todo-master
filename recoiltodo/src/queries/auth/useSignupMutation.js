import AuthApi from 'apis/authApi';
import { useMutation } from '@tanstack/react-query';

const useSignUpMutation = (setForm) =>
  useMutation((data) => AuthApi.signup(data), {
    onSuccess: (res) => {
      setForm('login');
    },
  });
export default useSignUpMutation;
