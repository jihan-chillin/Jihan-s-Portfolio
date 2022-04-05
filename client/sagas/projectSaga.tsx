import { all, fork,put,takeLatest} from 'redux-saga/effects';

import {
    TOGGLE_PROJECT_DETAIL_REQUEST,
    TOGGLE_PROJECT_DETAIL_SUCCESS,
    TOGGLE_PROJECT_DETAIL_FAILURE,
} from '../reducers/projectsReducer';


function* toggleProject(action) {
    try {
        yield put({
            type : TOGGLE_PROJECT_DETAIL_SUCCESS,
            data : action.data
        })
    } catch (e) {
        yield put({
            type : TOGGLE_PROJECT_DETAIL_FAILURE,
            error: e.response.data,
        })
    }
}

function* watchToggleProject(){
    yield takeLatest(TOGGLE_PROJECT_DETAIL_REQUEST, toggleProject);
}

export default function* projectSaga() {
    yield all([
        fork(watchToggleProject),
    ]);
}