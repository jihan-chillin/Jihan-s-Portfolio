import { all, fork, delay, takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
} from '../reducers/userReducer'

function logInAPI(data) {
    return axios.post('/user/login', data);
  }
  
function* logIn(action) {
    try {
    //   const result = yield call(logInAPI, action.data);
    yield delay(300)  
    yield put({
        type: LOG_IN_SUCCESS,
        data: action.data,
        });
    } catch (e) {
        yield put({
        type: LOG_IN_FAILURE,
        error: e.response.data,
        });
    }
}

function logOutAPI() {
    return axios.post('/user/logout');
}

function* logOut() {
    try {
        // const result = yield call(logOutAPI);
        yield delay(300)
        yield put({
        type: LOG_OUT_SUCCESS,
        });
    } catch (e) {
        console.log(e);
        yield put({
        type: LOG_OUT_FAILURE,
        error: e.response.data,
        });
    }
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
    }
    
function* watchLogout() {
yield takeLatest(LOG_OUT_REQUEST, logOut);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogout),
    ]);
}
