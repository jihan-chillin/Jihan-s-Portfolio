import styled from "styled-components";

export const SkillContentWrapper = styled.div`
    width: 272px;
    margin-top: 64px;
    padding-top: 16px;
    background-color: #F2F2F2;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (max-width:900px) {
        margin : 36px auto 0 auto;
    }

    &:hover{
        transform: translate(0, 1%);
    }
`
export const SkillTitle = styled.div`
    margin: 0 auto;
    padding : 8px 0;
    width: 210px;
    text-align: left;
    font-weight: bold;
    font-size : 16px;
    color : ${(props)=>props.theme.theme_3};
    border-bottom: 2px solid #A0A0A0;
`
export const SkillIcon = styled.img`
    width : 210px;
`