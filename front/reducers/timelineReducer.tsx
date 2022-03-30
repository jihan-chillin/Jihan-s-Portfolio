import produce from "immer";

export const initialState = {
    TimelineContents : [{
        timelinePeriod : '2020.03 ~ 2020.07',
        timelineTitle : '코알라유니브 3기',
        timelineInfo : '대학생 코딩 동아리인 코알라유니브에서 첫 코딩 입문을 했습니다. 파이썬으로 웹 크롤링과 데이터 사이언스 교육을 받으면서 파이썬의 기초 문법과 Requests, Selenium 등의 오픈소스 패키지에 대해 배우고, 이를 활용해 구글지도 및 인스타그램 본문을 크롤링 해보았습니다. 또한, 기초 머신러닝 지식과 Random Forest 등의 분류모델을 활용해 와인 품질 측정과 집값예측 등을 해보았습니다.',
        timelinelink : 'https://coalastudy.com/p/%EC%BD%94%EC%95%8C%EB%9D%BC%EC%9C%A0%EB%8B%88%EB%B8%8C',
        linkTitle : '코알라 유니브 사이트'
    },{
        timelinePeriod : '2020.08.15',
        timelineTitle : 'AI JAM KOREA 동상',
        timelineInfo : '영화 포스터를 크롤링하고 Gradient Boosting 분류모델을 이용해 나라별, 장르별로 65% 이상의 유의미한 색감 차이를 발견했습니다. 이러한 차이를 이용해서 다양한 기준별로 객관적인 색감 지표를 제시하는 아이디어를 선보였고, 동상이라는 쾌거를 이뤄냈습니다.공모전 때 저의 역할은 기획, 크롤링 그리고 데이터 전처리였습니다. 하지만, 추상적인 아이디어와 데이터를 코딩으로 구체화 시키고, 유의미한 결과를 만들어 내는 과정을 통해서 "개발"이라는 분야에 대해 관심을 갖게 되었습니다.',
        timelinelink : 'https://www.youtube.com/watch?v=4iOwYHKXijw&t=300s',
        linkTitle : 'AI JAM KOREA 아이디어 발표영상',
    },{
        timelinePeriod : '2020.08.24',
        timelineTitle : '성신여자대학교 졸업',
        timelineInfo : '성신여자대학교 청정융합과학과(주전공) / 통계학과(부전공)로 졸업',
        timelinelink : '',
        linkTitle : '',
    },{
        timelinePeriod : '2021.01 ~ 2021.08',
        timelineTitle : '웹개발 국비교육 수강',
        timelineInfo : '7개월간 Java, DB, Front-end, Back-end, Framework를 배우고 두 차례의 웹 프로젝트를 진행했습니다. 프로젝트를 진행하는 과정에서 화면을 구성하고, 사용자의 워크플로우에 맞는 기능을 구현하는 부분이 가장 흥미롭게 느껴져 프론트엔드 개발자로 방향을 정하게 됐습니다.',
        timelinelink : '',
        linkTitle : '',
    },{
        timelinePeriod : '2021.11.01 ~ 2022.03.04',
        timelineTitle : '(주)바운스코드',
        timelineInfo : '현재는 "미스터로그인"이라는 통합로그인 시스템을 개발하는 회사에서 4개월 간 일을 했습니다. 재직 당시 DTx(디지털 치료제)앱과 어드민 페이지를 개발했으며, 스마트 팩토리 관련 사업에서 데이터 전처리를 했습니다.',
        timelinelink : '',
        linkTitle : '',
    }],
    showTimelineDetail : false,
    timelineKey : 0,
}

export const TOGGLE_TIMELINE_DETAIL_REQUEST = 'TOGGLE_TIMELINE_DETAIL_REQUEST';
export const TOGGLE_TIMELINE_DETAIL_SUCCESS = 'TOGGLE_TIMELINE_DETAIL_SUCCESS';
export const TOGGLE_TIMELINE_DETAIL_FAILURE = 'TOGGLE_TIMELINE_DETAIL_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        case TOGGLE_TIMELINE_DETAIL_REQUEST:
            break;
        case TOGGLE_TIMELINE_DETAIL_SUCCESS:
            draft.showTimelineDetail = action.data.showTimelineDetail;
            draft.timelineKey = action.data.timelineKey
            break;
        case TOGGLE_TIMELINE_DETAIL_FAILURE:
            break;
        default:
            break;
        }
});

export default reducer;