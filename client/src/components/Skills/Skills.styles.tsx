import styled from 'styled-components'

export const SkillsWrapper = styled.div`
    padding-bottom: 160px;
    background-color:  ${(props)=>props.theme.theme_6};

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
`
export const SkillWholeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    margin: 0 auto;

    @media screen and (max-width:900px) {
        display: block;
    }
`

export const SKillUnitWrapper = styled.div`
    margin: 20px;
`