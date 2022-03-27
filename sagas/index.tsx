import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import themeSaga from './themeSaga';
import userSaga from './userSaga';
import projectSaga from './projectSaga'
import timelineSaga from './timelineSaga'


axios.defaults.baseURL = 'http://localhost:3001';

export default function* rootSaga() {
  yield all([
    fork(themeSaga),
    fork(userSaga),
    fork(projectSaga),
    fork(timelineSaga),
  ]);
}
