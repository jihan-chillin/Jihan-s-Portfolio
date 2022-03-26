// import produce from 'immer';
// import theme from '../src/styles/theme.styles';

// export const initialState = {
//     changeThemeLoading : false, 
//     changeThemeDone: false,
//     changeThemeError: null,
//     theme : theme.light,
// }

// export const CHANGE_TO_LIGHT_REQUEST = 'CHANGE_TO_LIGHT_REQUEST';
// export const CHANGE_TO_LIGHT_SUCCESS = 'CHANGE_TO_LIGHT_SUCCESS';
// export const CHANGE_TO_LIGHT_FAILURE = 'CHANGE_TO_LIGHT_FAILURE';

// export const CHANGE_TO_DARK_REQUEST = 'CHANGE_TO_DARK_REQUEST';
// export const CHANGE_TO_DARK_SUCCESS = 'CHANGE_TO_DARK_SUCCESS';
// export const CHANGE_TO_DARK_FAILURE = 'CHANGE_TO_DARK_FAILURE';

// export const CHANGE_TO_SPRING_REQUEST = 'CHANGE_TO_SPRING_REQUEST';
// export const CHANGE_TO_SPRING_SUCCESS = 'CHANGE_TO_SPRING_SUCCESS';
// export const CHANGE_TO_SPRING_FAILURE = 'CHANGE_TO_SPRING_FAILURE';

// export const CHANGE_TO_SUMMER_REQUEST = 'CHANGE_TO_SUMMER_REQUEST';
// export const CHANGE_TO_SUMMER_SUCCESS = 'CHANGE_TO_SUMMER_SUCCESS';
// export const CHANGE_TO_SUMMER_FAILURE = 'CHANGE_TO_SUMMER_FAILURE';

// export const CHANGE_TO_AUTUMN_REQUEST = 'CHANGE_TO_AUTUMN_REQUEST';
// export const CHANGE_TO_AUTUMN_SUCCESS = 'CHANGE_TO_AUTUMN_SUCCESS';
// export const CHANGE_TO_AUTUMN_FAILURE = 'CHANGE_TO_AUTUMN_FAILURE';

// export const CHANGE_TO_WINTER_REQUEST = 'CHANGE_TO_WINTER_REQUEST';
// export const CHANGE_TO_WINTER_SUCCESS = 'CHANGE_TO_WINTER_SUCCESS';
// export const CHANGE_TO_WINTER_FAILURE = 'CHANGE_TO_WINTER_FAILURE';


// const reducer = (state = initialState, action) => produce(state, (draft) => {
//   switch (action.type) {
//       case CHANGE_TO_LIGHT_REQUEST:
//         draft.changeThemeLoading = true;
//         draft.changeThemeDone = null;
//         draft.changeThemeError = false;
//        break;
//       case CHANGE_TO_LIGHT_SUCCESS:
//         draft.changeThemeLoading = false;
//         draft.theme = action.data
//         draft.changeThemeDone = true;
//         break;
//       case CHANGE_TO_LIGHT_FAILURE:
//         draft.changeThemeLoading = false;
//         draft.changeThemeError = action.error;
//         break;
//       case CHANGE_TO_DARK_REQUEST:
//         draft.changeThemeLoading = true;
//         draft.changeThemeDone = null;
//         draft.changeThemeError = false;
//         break;
//         case CHANGE_TO_LIGHT_SUCCESS:
//           draft.changeThemeLoading = false;
//           draft.theme = action.data
//           draft.changeThemeDone = true;
//           break;
//         case CHANGE_TO_LIGHT_FAILURE:
//           draft.changeThemeLoading = false;
//           draft.changeThemeError = action.error;
//           break;
//       case CHANGE_TO_SPRING_REQUEST:
//         draft.changeThemeLoading = true;
//         draft.changeThemeDone = null;
//         draft.changeThemeError = false;
//         break;
//         case CHANGE_TO_SPRING_SUCCESS:
//           draft.changeThemeLoading = false;
//           draft.theme = action.data
//           draft.changeThemeDone = true;
//           break;
//         case CHANGE_TO_SPRING_FAILURE:
//           draft.changeThemeLoading = false;
//           draft.changeThemeError = action.error;
//           break;

//       case CHANGE_TO_SUMMER_REQUEST:
//         draft.changeThemeLoading = true;
//         draft.changeThemeDone = null;
//         draft.changeThemeError = false;
//         break;
//         case CHANGE_TO_SUMMER_SUCCESS:
//           draft.changeThemeLoading = false;
//           draft.theme = action.data
//           draft.changeThemeDone = true;
//           break;
//         case CHANGE_TO_SUMMER_FAILURE:
//           draft.changeThemeLoading = false;
//           draft.changeThemeError = action.error;
//           break;

//       case CHANGE_TO_AUTUMN_REQUEST:
//         draft.changeThemeLoading = true;
//         draft.changeThemeDone = null;
//         draft.changeThemeError = false;
//         break;
//         case CHANGE_TO_AUTUMN_SUCCESS:
//           draft.changeThemeLoading = false;
//           draft.theme = action.data
//           draft.changeThemeDone = true;
//           break;
//         case CHANGE_TO_AUTUMN_FAILURE:
//           draft.changeThemeLoading = false;
//           draft.changeThemeError = action.error;
//           break;

//       case CHANGE_TO_WINTER_REQUEST:
//         draft.changeThemeLoading = true;
//         draft.changeThemeDone = null;
//         draft.changeThemeError = false;
//         break;
//         case CHANGE_TO_WINTER_SUCCESS:
//           draft.changeThemeLoading = false;
//           draft.theme = action.data
//           draft.changeThemeDone = true;
//           break;
//         case CHANGE_TO_WINTER_FAILURE:
//           draft.changeThemeLoading = false;
//           draft.changeThemeError = action.error;
//           break;  
//       default:
//         return state;
//     }
//   });

//   export default reducer;

import produce from 'immer';
import theme from '../src/styles/theme.styles';

export const initialState = {
    changeThemeLoading : false, 
    changeThemeDone: false,
    changeThemeError: null,
    color : theme.color.light,
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