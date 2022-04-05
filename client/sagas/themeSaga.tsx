import { all, fork, takeLatest, put} from 'redux-saga/effects';

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