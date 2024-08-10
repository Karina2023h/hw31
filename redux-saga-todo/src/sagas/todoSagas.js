import { call, put, takeEvery, all } from "redux-saga/effects";
import { LOAD_TODOS, loadTodosSuccess } from "../actions/todoActions";

const fetchTodosFromApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "Learn Redux-Saga", completed: false },
        { id: 2, text: "Implement TODO app", completed: false },
      ]);
    }, 1000);
  });
};

function* loadTodos() {
  try {
    const todos = yield call(fetchTodosFromApi);
    yield put(loadTodosSuccess(todos));
  } catch (error) {
    console.error("Failed to load todos", error);
  }
}

function* watchLoadTodos() {
  yield takeEvery(LOAD_TODOS, loadTodos);
}

export default function* rootSaga() {
  yield all([watchLoadTodos()]);
}
