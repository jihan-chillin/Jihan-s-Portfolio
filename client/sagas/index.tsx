import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import themeSaga from './themeSaga';
import userSaga from './userSaga';
import timelineSaga from './EduAwardSaga'
import webUrl from '../config/config';


// 처음 실행되는 url 
// 이거 나중에 production 모드일 때 혹은 local일 때 변경만 해주면 됨.
axios.defaults.baseURL = webUrl;

export default function* rootSaga() {
  yield all([
    fork(themeSaga),
    fork(userSaga),
    fork(timelineSaga),
  ]);
}
