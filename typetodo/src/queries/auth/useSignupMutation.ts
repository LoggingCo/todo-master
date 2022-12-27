import AuthApi from 'apis/authApi';
import { useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';

interface signMutationDataProps {
  email: string;
  password: string;
}

const useSignUpMutation = (setForm: any) =>
  useMutation((data: signMutationDataProps) => AuthApi.signup(data), {
    onSuccess: () => {
      setForm('login');
    },
  });
export default useSignUpMutation;
