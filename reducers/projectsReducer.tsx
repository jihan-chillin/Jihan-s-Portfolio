import produce from "immer";

export const initialState = {
    ProjectContent : [{
        ProjectId : 0,
        ProjectTitle : "프로젝트명1",
        ProjectInfo : "프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠",
        period : "2020.07.07 ~ 2021.07.07",
        techStack : "기술스택 베이베",
        contribution : "내 기여도잖늬"
    },{
        ProjectId : 1,
        ProjectTitle : "프로젝트명2",
        ProjectInfo : "프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠",
        period : "2020.07.07 ~ 2021.07.07",
        techStack : "두 번째 기술스택 베이베",
        contribution : "내 기여도잖늬"
    },
    {
        ProjectId : 2,
        ProjectTitle : "프로젝트명3",
        ProjectInfo : "프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠",
        period : "2020.07.07 ~ 2021.07.07",
        techStack : "세 번째 기술스택 베이베",
        contribution : "내 기여도잖늬"
    }],
    showProjectDetail : false, 
    projectKey : 0,
}

export const TOGGLE_PROJECT_DETAIL_REQUEST = 'TOGGLE_PROJECT_DETAIL_REQUEST';
export const TOGGLE_PROJECT_DETAIL_SUCCESS = 'TOGGLE_PROJECT_DETAIL_SUCCESS';
export const TOGGLE_PROJECT_DETAIL_FAILURE = 'TOGGLE_PROJECT_DETAIL_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        case TOGGLE_PROJECT_DETAIL_REQUEST:
            break;
        case TOGGLE_PROJECT_DETAIL_SUCCESS:
            draft.showProjectDetail = action.data.showProjectDetail;
            draft.projectKey = action.data.projectKey
            break;
        case TOGGLE_PROJECT_DETAIL_FAILURE:
            break;
        default:
            break;
        }
});

export default reducer;