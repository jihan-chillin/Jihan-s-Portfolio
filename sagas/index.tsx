import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from './userSaga';

axios.defaults.baseURL = 'http://localhost:3000';

export default function* rootSaga() {
  yield all([
    fork(userSaga),
  ]);
}
