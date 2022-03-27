import produce from "immer";

export const initialState = {
    TimelineContents : [{
        timelinePeriod : '2020.03 ~ 2020.07',
        timelineTitle : '코알라유니브 활동',
        timelineInfo : '코알라 유니브 활동입니당',
        timelinelink : 'https://blog.naver.com/kimjihan77',
    },{
        timelinePeriod : '2020.08.15',
        timelineTitle : 'AI JAM KOREA 동상',
        timelineInfo : 'AI JAM KOREA 활동입니당',
        timelinelink : 'https://blog.naver.com/kimjihan77',
    },{
        timelinePeriod : '2020.08.24',
        timelineTitle : '성신여자대학교 졸업',
        timelineInfo : '졸업했습니당.',
        timelinelink : 'https://blog.naver.com/kimjihan77',
    },{
        timelinePeriod : '2021.01 ~ 2021.08',
        timelineTitle : '웹개발 국비교육 수강',
        timelineInfo : '웹개발 국비교육 수강했습니당',
        timelinelink : '',
    },{
        timelinePeriod : '2021.11.01 ~ 2022.03.04',
        timelineTitle : '바운스 코드 재직',
        timelineInfo : '바운스 코드 다녔습니다',
        timelinelink : '',
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