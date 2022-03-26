import produce from 'immer'

export const initialState ={
    showProjectDetail : false, 
    showTimelineDetail : false, 
}

export const TOGGLE_PROJECT_DETAIL_REQUEST = 'TOGGLE_PROJECT_DETAIL_REQUEST';

export const TOGGLE_TIMELINE_DETAIL_REQUEST = 'TOGGLE_TIMELINE_DETAIL_REQUEST';

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        case TOGGLE_PROJECT_DETAIL_REQUEST:
            draft.showProjectDetail = action.data;
            break;
        case TOGGLE_TIMELINE_DETAIL_REQUEST:
            draft.showTimelineDetail = action.data;
        default:
            break;
        }
});

export default reducer;