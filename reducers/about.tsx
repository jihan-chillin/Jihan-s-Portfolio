export const initialState = {
    id : 1,
    moto : '꾸준한 성장을 목표로 하는 FE개발자',
    profile : "./profile.png",
    profilePath : [], // 프로필 업로드 시 저장되는 경로
    InfoAboutMe : [{
        icon : "./mail.png",
        infoText : "kimjihan77@naver.com",
        goLink : ""
    },{
        icon : "./github.png",
        infoText : "https://github.com/jihan-chillin",
        goLink : "https://github.com/jihan-chillin"
    },{
        icon : ".blog/.png",
        infoText : "CODE N CHILL (BLOG)",
        goLink : "https://blog.naver.com/kimjihan77"
    }]
}

// const reducer = (state = initialState, action)=>{
//     switch(action.type){
//         case CREATE_ABOUT :
//             return{
//                 ...state,

//             }
//     }
// }