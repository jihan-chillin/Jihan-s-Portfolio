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
        timelineInfo : 'AI JAM KOREA 활동입니당',
        timelinelink : 'https://blog.naver.com/kimjihan77',
        linkTitle : 'AI JAM KOREA 아이디어 발표영상',
    },{
        timelinePeriod : '2020.08.24',
        timelineTitle : '성신여자대학교 졸업',
        timelineInfo : '졸업했습니당.',
        timelinelink : 'https://blog.naver.com/kimjihan77',
        linkTitle : '',
    },{
        timelinePeriod : '2021.01 ~ 2021.08',
        timelineTitle : '웹개발 국비교육 수강',
        timelineInfo : '웹개발 국비교육 수강했습니당',
        timelinelink : '',
        linkTitle : '',
    },{
        timelinePeriod : '2021.11.01 ~ 2022.03.04',
        timelineTitle : '바운스 코드 재직',
        timelineInfo : '바운스 코드 다녔습니다',
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