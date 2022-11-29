import TokenRepository from 'repository/TokenRepository';

class ApiCustomError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiCustomError);
    }

    if (status === 403) {
      TokenRepository.removeToken();
      window.location.href = '/';
      this.message = '세션이 만료되었습니다';
    }

    if (status === 404) {
      this.message = '존재하지 않는 페이지입니다';
      window.location.href = '/404';
    }

    if (status === 500) {
      this.message = '서버에 문제가 발생했습니다';
      window.location.href = '/500';
    }

    if (status === 503) {
      this.message = '서버 점검중입니다';
      window.location.href = '/503';
    }

    if (status === 504) {
      this.message = '서버 접속이 지연되고 있습니다';
    }
  }
}
export default ApiCustomError;
