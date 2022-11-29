import { all, fork } from 'redux-saga/effects';
import todoSaga from './todo';

export default function* rootSaga() {
  yield all([fork(todoSaga)]);
}
