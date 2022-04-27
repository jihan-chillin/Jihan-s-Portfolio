import produce from "immer";

export const initialState = {
    ProjectContent : [{
        projectId : 0,
        ProjectImages : [
            './portfolio1.png',
            './portfolio2.png',
            './portfolio3.png',
            './portfolio4.png',
        ],
        projectTitle : "사계절모드 포트폴리오",
        privateOrTeam : '개인 프로젝트',
        period : "2022.03.16 ~ 진행중 ( 업데이트계획 추가적으로 진행 )",
        techStack : "Figma, React(Next.js), typescript, Redux, GraphQL, MySQL, ApolloServer",
        contribution : "사계절모드, 다크모드, 카카오 로그인, 스크롤 위치기억, 모달창, Front/Backend, 배포",
        gitAddress : 'https://github.com/jihan-chillin/Jihan-s-Portfolio'
    },{
        projectId : 1,
        ProjectImages : [
            './nodebird1.png',
            './nodebird2.png',
        ],
        projectTitle : "제로초 Nodebird 클론코딩",
        privateOrTeam : '개인 프로젝트',
        period : "2021.02 ~ (진행중)",
        techStack : "React(Next.js), bootstrap, javascript, Sequelize, MySQL, express",
        contribution : "로그인 및 회원가입, 팔로우-팔로잉, 게시글 ● 댓글 ● 프로필 CRUD",
        gitAddress : 'https://github.com/jihan-chillin/React-Lecture'
    },{
        projectId : 2,
        ProjectImages : [
            './poom.png'
        ],
        projectTitle : "품(POOM)",
        privateOrTeam : '팀 프로젝트(인원 6명)',
        period : "2021.07.03 ~ 2021.08.11",
        techStack : "HTML, CSS, jQuery, Thymeleaf, Java, SpringBoot, Oracle",
        contribution : "마이페이지(내가 쓴 글, 댓글, 찜한 글), 게시판 CKEDITOR(CRUD)",
        gitAddress : 'https://github.com/jihan-chillin/poom'
    },{
        projectId : 3,
        ProjectImages : [
            './semi.png',
            './semi2.png'
        ],
        projectTitle : "die Kleidung",
        privateOrTeam : '팀 프로젝트(인원 4명)',
        period : "2021.04.05 ~ 2021.05.27",
        techStack : "HTML, CSS, jQuery, Java",
        contribution : "댓글 구현, 일반 게시판 및 공지사항, Q&A, 마이페이지, 페이지 디자인",
        gitAddress : 'https://github.com/newkayak12/SemiProject'
    }],
}

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        default:
            break;
        }
});

export default reducer;