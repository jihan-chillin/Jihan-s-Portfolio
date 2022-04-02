import produce from "immer";

export const initialState = {
    ProjectContent : [{
        ProjectId : 0,
        ProjectThumbnail : './portfolio.png',
        ProjectTitle : "사계절모드 포트폴리오",
        PrivateOrTeam : '개인 프로젝트',
        ProjectInfo : "기존의 라이트 / 다크모드 이외에 사계절 모드를 경험해 보실 수 있는 포트폴리오 사이트입니다. (카카오 로그인 시 가능) ",
        period : "2022.03",
        techStack : "Figma, React(Next.js), typescript, Redux, GraphQL, MySQL, ApolloServer",
        contribution : "사계절모드, 다크모드, 카카오 로그인, 스크롤 위치기억, 모달창, Front/Backend, 배포",
        takeAway : '느낀점',
        gitAddress : 'https://github.com/jihan-chillin/Jihan-s-Portfolio'
    },{
        ProjectId : 1,
        ProjectThumbnail : './nodebird.png',
        ProjectTitle : "제로초 Nodebird 클론코딩",
        PrivateOrTeam : '개인 프로젝트',
        ProjectInfo : "React에 대한 전반적인 학습을 위해 수강한 인프런 강의를 통해 클론 코딩한 프로젝트로, 트위터와 유사한 SNS 서비스 개발했습니다.",
        period : "2021.02 ~ (진행중)",
        techStack : "React(Next.js), bootstrap, javascript, Sequelize, MySQL, express",
        contribution : "로그인 및 회원가입, 팔로우-팔로잉, 게시글 ● 댓글 ● 프로필 CRUD ",
        takeAway : '느낀점',
        gitAddress : 'https://github.com/jihan-chillin/React-Lecture'
    },
    {
        ProjectId : 2,
        ProjectThumbnail : './poom.png',
        ProjectTitle : "품(POOM)",
        PrivateOrTeam : '팀 프로젝트(인원 6명)',
        ProjectInfo : "코로나 시국에 지역주민들과의 소통부재에 대한 해결책을 고민한 끝에 정보공유와 친목 도모를 할 수 있는 사이트를 개발했습니다.",
        period : "2021.07.03 ~ 2021.08.11",
        techStack : "HTML, CSS, jQuery, Thymeleaf, Java, SpringBoot, Oracle",
        contribution : "KH교육원 팀프로젝트 / 게시글 CRUD 및 미리보기이미지 구현, 마이페이지, 카테고리 별 조회기능",
        takeAway : '느낀점',
        gitAddress : 'https://github.com/jihan-chillin/poom',
    }, {
        ProjectId : 3,
        ProjectThumbnail : './semi.png',
        ProjectTitle : "여성 의류 전문 쇼핑몰",
        PrivateOrTeam : '팀 프로젝트(인원 4명)',
        ProjectInfo : "웹 개발 교육과정 당시 처음으로 개발한 웹사이트 입니다. 배운 것들을 토대로 CRUD를 다채롭게 활용할 수 있는 여성 의류 전문 쇼핑몰 사이트를 주제로 했습니다.",
        period : "2021.04.05 ~ 2021.05.27",
        techStack : "HTML, CSS, jQuery, Java",
        contribution : "댓글 구현, 일반 게시판 및 공지사항, Q&A, 마이페이지, 페이지 디자인",
        takeAway : '느낀점',
        gitAddress : 'https://github.com/newkayak12/SemiProject',
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