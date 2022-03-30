import produce from "immer";

export const initialState = {
    ProjectContent : [{
        ProjectId : 0,
        ProjectThumbnail : './portfolio.png',
        ProjectTitle : "사계절모드 포트폴리오",
        ProjectInfo : "로그인 시 사계절 모드를 경험해 보실 수 있는 포트폴리오 사이트입니다. 이전엔 props와 Context API로만 상태 관리를 하다가 redux를 공부하고 활용해볼 겸 만들어보게 되었는데, 중앙상태관리의 존재가 개발효율을 굉장히 높여준다는 것을 몸소 느낄 수 있었습니다.",
        period : "2022.03",
        techStack : "Figma, React(Next.js), typescript, Redux, GraphQL, MySQL, ApolloServer",
        contribution : "개인프로젝트",
        gitAddress : 'https://github.com/jihan-chillin/poom'
    },{
        ProjectId : 1,
        ProjectThumbnail : './Dtx.png',
        ProjectTitle : "DTx(디지털치료제 앱)/어드민페이지",
        ProjectInfo : "바운스코드 재직 중 외주로 진행한 프로젝트이며, React Native로 만든 공황 치료 앱입니다. 해당 앱은 총 4주 동안 환자의 공황 치료 프로그램이 제공하고, 공황 경험에 대한 기록 기능과 정보 또한 환자에게 제공합니다. 어드민 페이지에선 환자에게 진행되는 프로그램을 수정할 수 있으며, 자기 환자의 치료상황과 통계자료 등을 확인할 수 있습니다.",
        period : "~ 2020.01.14",
        techStack : "Figma, React(Next.js), bootstrap, typescript, React Native, GraphQL(Code Generator), PostgreSQL, ApolloServer, docker",
        contribution : "최고관리자 계정용 어드민 페이지 개발 / DTx앱 공황테라피 영상 파트 및 마이페이지 개발",
        gitAddress : ''
    },
    {
        ProjectId : 2,
        ProjectThumbnail : './poom.png',
        ProjectTitle : "품(POOM)",
        ProjectInfo : "국비교육 당시 진행한 파이널 프로젝트로, 지역민들의 정보공유와 친목 도모를 위해 만든 커뮤니티 사이트입니다. 기존에 Javascript로만 DOM에 접근하다가 jQuery를 사용했을 때, 보다 간단하게 DOM에 접근하여 이벤트를 처리해볼 수 있었습니다. 또한, Spring 프레임워크를 통해 편한 의존성 관리를 경험해볼 수 있었습니다. ",
        period : "2021.07.03 ~ 2021.08.11",
        techStack : "HTML, CSS, jQuery, Thymeleaf, Java, SpringBoot, Oracle",
        contribution : "KH교육원 팀프로젝트 / 게시글 CRUD 및 미리보기이미지 구현, 마이페이지, 카테고리 별 조회기능",
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