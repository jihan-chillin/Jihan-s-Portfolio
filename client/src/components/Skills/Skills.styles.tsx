import styled from 'styled-components'

export const SkillsWrapper = styled.div`
    padding-bottom: 160px;
    background-color:  ${(props)=>props.theme.theme_8};

    @media screen and (max-width:800px) {
        padding-bottom: 50px !important;
    }
`
export const CateName = styled.span`
    display: inline-block;
    margin-top: 76px;
    font-size: 20px;
    color:  ${(props)=>props.theme.theme_2};
    opacity: 0.5;

    @media screen and (max-width : 800px){
        margin-top: 60px;
    }
`
export const SkillWholeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    margin: 0 auto;
    
    @media screen and (max-width:900px) {
        display: block;
        margin: 52px auto;
    }
`

export const SKillUnitWrapper = styled.div`
    margin: 20px;
`