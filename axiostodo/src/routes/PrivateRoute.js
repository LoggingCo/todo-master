import { Outlet, Navigate } from 'react-router-dom';
import TokenRepository from 'repository/TokenRepository';

const PrivateRoute = () => {
  const access = TokenRepository.getToken();
  return access ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoute;
