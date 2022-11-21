import jwt from 'jsonwebtoken';

export const RefreshAuth = (refresh, user) => {
  const refreshUser = jwt.decode(refresh);
  if (refreshUser.token === user.token) {
    return true;
  }
  return false;
};
