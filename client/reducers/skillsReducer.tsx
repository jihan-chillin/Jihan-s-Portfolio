import produce from "immer";

export const initialState = {
    BackFrontend : [{
        skillTitle : 'Backend',
        SkillIcon : [
            './backend1.png',
            './backend2.png',
            './backend3.png',
        ]
    },{
        skillTitle : 'Frontend',
        SkillIcon : [
            './front1.png',
            './front2.png',
            './front3.png',
            './front4.png',
        ]
    }],
    Etcetera : [{
        skillTitle : 'Development',
        SkillIcon : [
            './development.png',
        ]
    },{
        skillTitle : 'Version Control ',
        SkillIcon : [
            './versionControl.png',
        ]
    }]
}

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        default:
            break;
        }
});

export default reducer;