import produce from "immer";

export const initialState = {
    id : 1,
    ProjectContent : [{
        ProjectTitle : "프로젝트명",
        ProjectInfo : "프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠",
        period : "2020.07.07 ~ 2021.07.07",
        TechStack : "기술스택 베이베",
        Contribution : "내 기여도잖늬"
    }]
}

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        default:
            break;
        }
});

export default reducer;