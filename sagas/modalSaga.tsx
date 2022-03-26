import { all, fork,takeLatest} from 'redux-saga/effects';

import { 
    TOGGLE_PROJECT_DETAIL_REQUEST,
    TOGGLE_TIMELINE_DETAIL_REQUEST,
 } from '../reducers/modalReducer';

function* toggleProject() {
    try {
       console.log("프로젝트 디테일 오픈")
    } catch (e) {
        console.error(e);
    }
}

function* toggleTimeline() {
    try {
       console.log("타임라인 디테일 오픈")
    } catch (e) {
        console.error(e);
    }
}

function* watchToggleProject(){
    yield takeLatest(TOGGLE_PROJECT_DETAIL_REQUEST, toggleProject);
}

function* watchToggleTimeline(){
    yield takeLatest(TOGGLE_TIMELINE_DETAIL_REQUEST, toggleTimeline);
}

export default function* userSaga() {
    yield all([
        fork(watchToggleProject),
        fork(watchToggleTimeline),
    ]);
}
