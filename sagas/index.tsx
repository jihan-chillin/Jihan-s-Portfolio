import { all, fork } from 'redux-saga/effects';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:3065';

export default function* rootSaga() {
  yield all([
    // fork(AboutSaga),
  ]);
}
