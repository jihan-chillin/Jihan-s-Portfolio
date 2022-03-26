import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import themeSaga from './themeSaga';
import userSaga from './userSaga';


axios.defaults.baseURL = 'http://localhost:3001';

export default function* rootSaga() {
  yield all([
    fork(themeSaga),
    fork(userSaga),
  ]);
}
