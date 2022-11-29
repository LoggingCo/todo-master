import TodoApi from 'apis/todoApi';
import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  deleteTodooFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  readTodoFailure,
  readTodoRequest,
  readTodoSuccess,
  updateTodooFailure,
  updateTodoRequest,
  updtaeTodoSuccess,
} from 'reducer/todo';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

// saga
function* addTodoSaga(action) {
  try {
    const response = yield call(TodoApi.addTodo, action.payload);
    yield put(addTodoSuccess(response.data));
  } catch (err) {
    yield put(addTodoFailure(err.response));
  }
}

function* readTodoSaga() {
  try {
    const response = yield call(TodoApi.getTodo);
    yield put(readTodoSuccess(response.data));
  } catch (err) {
    yield put(readTodoFailure(err.response));
  }
}

function* updateTodoSaga(action) {
  try {
    const { id, content, state } = action.payload;
    const response = yield call(TodoApi.updateTodo, id, { content, state });
    yield put(updtaeTodoSuccess(response.data));
  } catch (err) {
    yield put(updateTodooFailure(err.response));
  }
}

function* deleteTodoSaga(action) {
  try {
    const response = yield call(TodoApi.deleteTodo, action.payload);
    yield put(deleteTodoSuccess(response.data));
  } catch (err) {
    yield put(deleteTodooFailure(err.response));
  }
}

// watch
function* watchReadTodo() {
  yield takeLatest(readTodoRequest().type, readTodoSaga);
}

function* watchAddTodo() {
  yield takeLatest(addTodoRequest().type, addTodoSaga);
}

function* watchUpdateTodo() {
  yield takeLatest(updateTodoRequest().type, updateTodoSaga);
}

function* watchDeleteTodo() {
  yield takeLatest(deleteTodoRequest().type, deleteTodoSaga);
}

// root
export default function* todoSaga() {
  yield all([
    fork(watchAddTodo),
    fork(watchDeleteTodo),
    fork(watchUpdateTodo),
    fork(watchReadTodo),
  ]);
}
