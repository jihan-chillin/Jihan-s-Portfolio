// import { all, fork, delay, takeLatest, put} from 'redux-saga/effects';

// import { 
//   CHANGE_TO_LIGHT_REQUEST,
//   CHANGE_TO_LIGHT_SUCCESS,
//   CHANGE_TO_LIGHT_FAILURE,
//   CHANGE_TO_DARK_REQUEST,
//   CHANGE_TO_DARK_SUCCESS,
//   CHANGE_TO_DARK_FAILURE,
//   CHANGE_TO_SPRING_REQUEST,
//   CHANGE_TO_SPRING_SUCCESS,
//   CHANGE_TO_SPRING_FAILURE,
//   CHANGE_TO_SUMMER_REQUEST,
//   CHANGE_TO_SUMMER_SUCCESS,
//   CHANGE_TO_SUMMER_FAILURE,
//   CHANGE_TO_AUTUMN_REQUEST,
//   CHANGE_TO_AUTUMN_SUCCESS,
//   CHANGE_TO_AUTUMN_FAILURE,
//   CHANGE_TO_WINTER_REQUEST,
//   CHANGE_TO_WINTER_SUCCESS,
//   CHANGE_TO_WINTER_FAILURE,
//  } from "../reducers/themeReducer";

//  function* changeLight(action) {
//   try {
//   yield delay(300)  
//   yield put({
//       type: CHANGE_TO_LIGHT_SUCCESS,
//       data: action.data,
//       });
//   } catch (e) {
//       yield put({
//       type: CHANGE_TO_LIGHT_FAILURE,
//       error: e.response.data,
//       });
//   }
// }

// function* changeDark(action) {
//   try {
//   yield delay(300)  
//   yield put({
//       type: CHANGE_TO_DARK_SUCCESS,
//       data: action.data,
//       });
//   } catch (e) {
//       yield put({
//       type: CHANGE_TO_DARK_FAILURE,
//       error: e.response.data,
//       });
//   }
// }

// function* changeSpring(action) {
//   try {
//   yield delay(300)  
//   yield put({
//       type: CHANGE_TO_SPRING_SUCCESS,
//       data: action.data,
//       });
//   } catch (e) {
//       yield put({
//       type: CHANGE_TO_SPRING_FAILURE,
//       error: e.response.data,
//       });
//   }
// }

// function* changeSummer(action) {
//   try {
//   yield delay(300)  
//   yield put({
//       type: CHANGE_TO_SUMMER_SUCCESS,
//       data: action.data,
//       });
//   } catch (e) {
//       yield put({
//       type: CHANGE_TO_SUMMER_FAILURE,
//       error: e.response.data,
//       });
//   }
// }

// function* changeAutumn(action) {
//   try {
//   yield delay(300)  
//   yield put({
//       type: CHANGE_TO_AUTUMN_SUCCESS,
//       data: action.data,
//       });
//   } catch (e) {
//       yield put({
//       type: CHANGE_TO_AUTUMN_FAILURE,
//       error: e.response.data,
//       });
//   }
// }

// function* changeWinter(action) {
//   try {
//   yield delay(300)  
//   yield put({
//       type: CHANGE_TO_WINTER_SUCCESS,
//       data: action.data,
//       });
//   } catch (e) {
//       yield put({
//       type: CHANGE_TO_WINTER_FAILURE,
//       error: e.response.data,
//       });
//   }
// }

// function* watchChangeLight() {
//   yield takeLatest(CHANGE_TO_LIGHT_REQUEST, changeLight);
//   }
  
// function* watchChangeDark() {
// yield takeLatest(CHANGE_TO_DARK_REQUEST, changeDark);
// }

// function* watchChangeSpring() {
//   yield takeLatest(CHANGE_TO_SPRING_REQUEST, changeSpring);
//   }
  
// function* watchChangeSummer() {
// yield takeLatest(CHANGE_TO_SUMMER_REQUEST, changeSummer);
// }

// function* watchChangeAutumn() {
//   yield takeLatest(CHANGE_TO_AUTUMN_REQUEST, changeAutumn);
//   }
  
// function* watchChangeWinter() {
// yield takeLatest(CHANGE_TO_WINTER_REQUEST, changeWinter);
// }

// export default function* themeSaga() {
//   yield all([
//       fork(watchChangeLight),
//       fork(watchChangeDark),
//       fork(watchChangeSpring),
//       fork(watchChangeSummer),
//       fork(watchChangeAutumn),
//       fork(watchChangeWinter),
//   ]);
// }

import { all, fork, delay, takeLatest, put} from 'redux-saga/effects';

import { 
  REMOTE_THEME_REQUEST,
  REMOTE_THEME_SUCCESS,
  REMOTE_THEME_FAILURE,

} from '../reducers/themeReducer';

function* remoteTheme(action:any){
  try{
    yield put({
      type : REMOTE_THEME_SUCCESS,
      data : action.data
    })
  }catch(e){
    yield put({
      type : REMOTE_THEME_FAILURE,
      error : e.response.data
    })
  }
}

function* watchRemoteTheme(){
  yield takeLatest(REMOTE_THEME_REQUEST, remoteTheme);
}

export default function* themeSaga(){
  yield all([
    fork(watchRemoteTheme)
  ])
}