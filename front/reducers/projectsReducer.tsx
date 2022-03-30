import produce from "immer";

export const initialState = {
    ProjectContent : [{
        ProjectId : 0,
        ProjectThumbnail : './portfolio.png',
        ProjectTitle : "사계절모드 포트폴리오",
        ProjectInfo : "로그인 시 사계절 모드를 경험해 보실 수 있는 포트폴리오 사이트입니다. 이전엔 props와 Context API로만 상태 관리를 하다가 redux를 공부하고 활용해볼 겸 만들어보게 되었는데, 중앙상태관리의 존재가 개발효율을 굉장히 높여준다는 것을 몸소 느낄 수 있었습니다.",
        period : "2022.03",
        techStack : "React(Next.js), Redux, GraphQL, MySQL, ApolloServer",
        contribution : "개인프로젝트",
        gitAddress : 'https://github.com/jihan-chillin/poom'
    },{
        ProjectId : 1,
        ProjectThumbnail : './poom.png',
        ProjectTitle : "DTx(디지털치료제 앱)",
        ProjectInfo : "바운스코드 재직 중 React Native로 제작한 디지털 치료제 앱입니다. ",
        period : "2020.07.07 ~ 2021.07.07",
        techStack : "두 번째 기술스택 베이베",
        contribution : "내 기여도잖늬",
        gitAddress : ''
    },
    {
        ProjectId : 2,
        ProjectThumbnail : './poom.png',
        ProjectTitle : "프로젝트명3",
        ProjectInfo : "프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠",
        period : "2020.07.07 ~ 2021.07.07",
        techStack : "세 번째 기술스택 베이베",
        contribution : "내 기여도잖늬",
        gitAddress : 'https://github.com/jihan-chillin/poom',
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