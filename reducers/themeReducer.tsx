import produce from 'immer';

export const initialState = {
    color : {
      'theme_1' : '#4B4B4B',
      'theme_2' : '#7F7F7F',
      'theme_3' : '#9C9DA4',
      'theme_4' : '#5E5E5E',
      'theme_5' : '#E7E7E7',
      'theme_6' : '#F6C45A',
      'theme_7' : '#F6C45A',
      'theme_8' : '#F6C45A',
      'theme_9' : '#F6C45A',
      'theme_10' : '#F6C45A',
      'theme_11' : '#F9F9F9',
      'theme_12' : '#FCFCFC',
      'theme_13' : '#4B4B4B',
      'theme_14' : '#AAAAAA',
    }
}

export const REMOTE_THEME_REQUEST = 'REMOTE_THEME_REQUEST';
export const REMOTE_THEME_SUCCESS = 'REMOTE_THEME_SUCCESS';
export const REMOTE_THEME_FAILURE = 'REMOTE_THEME_FAILURE';

const reducer = (state : any = initialState, action : any) => produce(state, (draft : any) => {
  switch (action.type) {
    case REMOTE_THEME_REQUEST:
      draft.color = action.data
    default:
      break;
  }
});

export default reducer;