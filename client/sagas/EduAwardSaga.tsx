import { all, fork,put,takeLatest} from 'redux-saga/effects';

import {
    TOGGLE_EDUAWARDS_DETAIL_REQUEST,
    TOGGLE_EDUAWARDS_DETAIL_SUCCESS,
    TOGGLE_EDUAWARDS_DETAIL_FAILURE,
} from '../reducers/EduAwardReducer'


function* toggleTimeline(action) {
    try {
        yield put({
            type : TOGGLE_EDUAWARDS_DETAIL_SUCCESS,
            data : action.data
        })
    } catch (e) {
        yield put({
            type : TOGGLE_EDUAWARDS_DETAIL_FAILURE,
            error: e.response.data,
        })
    }
}

function* watchToggleTimeline(){
    yield takeLatest(TOGGLE_EDUAWARDS_DETAIL_REQUEST, toggleTimeline);
}

export default function* timelineSaga() {
    yield all([
        fork(watchToggleTimeline),
    ]);
}