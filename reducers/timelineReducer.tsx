import produce from "immer";

export const initialState = {
    id : 1,
    TimelineContents : [{
        timelinePeriod : '2020.03 ~ 2020.07',
        timelineTitle : '코알라유니브 활동',
        timelineInfo : '',
        timelinelink : '',
    },{
        timelinePeriod : '2020.08.15',
        timelineTitle : 'AI JAM KOREA 동상',
        timelineInfo : '',
        timelinelink : '',
    },{
        timelinePeriod : '2020.08.24',
        timelineTitle : '성신여자대학교 졸업',
        timelineInfo : '',
        timelinelink : '',
    },{
        timelinePeriod : '2021.01 ~ 2021.08',
        timelineTitle : '웹개발 국비교육 수강',
        timelineInfo : '',
        timelinelink : '',
    },{
        timelinePeriod : '2021.11.01 ~ 2022.03.04',
        timelineTitle : '바운스 코드 재직',
        timelineInfo : '',
        timelinelink : '',
    }]
}

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        default:
            break;
        }
});

export default reducer;