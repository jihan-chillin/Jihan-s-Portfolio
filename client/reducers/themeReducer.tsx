import produce from 'immer';

export const initialState = {
    color : {
      'theme_1' : '#000000',
      'theme_2' : '#737373', 
      'theme_3' : '#9C9DA4',
      'theme_4' : '#4B4B4B',
      'theme_5' : '#E7E7E7',
      'theme_6' : '#7A7A7A',
      'theme_7' : '#000000',
      'theme_8' : '#F9F9F9',
      'theme_9' : '#E7E7E7',
      'theme_10' : '#F6C45A',
      'theme_11' : '#F6C45A',
      'theme_12' : '#F6C45A',
      'theme_13' : '#F1F1F1',
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