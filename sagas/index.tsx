import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import AboutSaga from './about';

axios.defaults.baseURL = 'http://localhost:3065';

export default function* rootSaga() {
  yield all([
    fork(AboutSaga),
  ]);
}
