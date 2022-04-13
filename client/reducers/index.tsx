import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import theme from './themeReducer'
import user from './userReducer'
import about from './aboutReducer'
import skill from './skillsReducer'
import project from './projectsReducer'
import eduaward from './EduAwardReducer'

const rootReducer = combineReducers({
  index: (state ={}, action) => {
    switch (action.type) {
      case HYDRATE:
        return {
          ...action.payload,
        };
      default:
        return state;
    }
  },
  theme,
  user,
  about,
  skill,
  project,
  eduaward,
});

export default rootReducer;
