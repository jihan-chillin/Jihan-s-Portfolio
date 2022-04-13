import produce from "immer";

export const initialState = {
    id : 1,
    moto : '꾸준한 성장을 목표로 하는 FE개발자',
    profile : "./profile.png",
    profilePath : [], // 프로필 업로드 시 저장되는 경로
    FirstLine : [{
        icon : './name.png',
        title : '이름',
        firstcontent : '김지한',
    },{
        icon : './call.png',
        title : '연락처',
        firstcontent : '010-2759-3959',
    }],
    SecondLine : [{
        icon : './calendar.png',
        title : '생년월일',
        firstcontent : '1996.07.07',
    },{
        icon : './mail.png',
        title : '이메일',
        firstcontent : 'kimjihan77@naver.com',
    }],
    ThirdLine : [{
        icon : './place.png',
        title : '주소지',
        firstcontent : '서울시 서대문구',
        secondcontent : '',
    },{
        icon : './uni.png',
        title : '학력',
        firstcontent : '성신여자대학교',
        secondcontent : '청정융합과학과/통계학과'
    }],
    
}

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        default:
            break;
        }
});

export default reducer;