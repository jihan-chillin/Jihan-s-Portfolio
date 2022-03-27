import produce from "immer";

export const initialState = {
    id : 1, 
    SkillsInfos : [{
        skillTitle : 'html, css, js',
        skillImagePath : './html.png',
        skillPercentage : 80,
    },{
        skillTitle : 'React(Next.js)',
        skillImagePath : './react.png',
        skillPercentage : 60,
    },{
        skillTitle : 'Redux',
        skillImagePath : './redux.png',
        skillPercentage : 40,
    },{
        skillTitle : 'Typescript',
        skillImagePath : './typescript.png',
        skillPercentage : 60,
    },{
        skillTitle : 'GraphQL',
        skillImagePath : './graphql.png',
        skillPercentage : 60,
    },{
        skillTitle : 'github(상태관리)',
        skillImagePath : './github.png',
        skillPercentage : 60,
    }]
}

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        default:
            break;
        }
});

export default reducer;