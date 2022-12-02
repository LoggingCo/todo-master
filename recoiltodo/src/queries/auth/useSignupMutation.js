import AuthApi from 'apis/authApi';
import { useMutation } from '@tanstack/react-query';

const useSignUpMutation = () => useMutation((data) => AuthApi.signup(data));
export default useSignUpMutation;
