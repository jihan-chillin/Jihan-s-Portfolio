import { all, fork,put,takeLatest} from 'redux-saga/effects';

import {
    TOGGLE_TIMELINE_DETAIL_REQUEST,
    TOGGLE_TIMELINE_DETAIL_SUCCESS,
    TOGGLE_TIMELINE_DETAIL_FAILURE,
} from '../reducers/timelineReducer';


function* toggleTimeline(action) {
    try {
        yield put({
            type : TOGGLE_TIMELINE_DETAIL_SUCCESS,
            data : action.data
        })
    } catch (e) {
        yield put({
            type : TOGGLE_TIMELINE_DETAIL_FAILURE,
            error: e.response.data,
        })
    }
}

function* watchToggleTimeline(){
    yield takeLatest(TOGGLE_TIMELINE_DETAIL_REQUEST, toggleTimeline);
}

export default function* timelineSaga() {
    yield all([
        fork(watchToggleTimeline),
    ]);
}