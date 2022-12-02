import AuthApi from 'apis/authApi';
import { useMutation } from '@tanstack/react-query';

const useLoginMutaion = () => useMutation((data) => AuthApi.login(data));
export default useLoginMutaion;
