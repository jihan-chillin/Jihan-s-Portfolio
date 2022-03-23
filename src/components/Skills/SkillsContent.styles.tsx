import styled from "styled-components";

export const SkillContenWrapper = styled.div`
    display: inline-flexbox;
    justify-content: space-between;
    margin: 20px 30px;
    width: 456px;


    @media screen and (max-width: 800px) {
        margin : 30px;
        width: 300px;
        height: 50px;
}
`

export const SkillsIcon = styled.img`
    width : 100px;
    margin-right : 40px;

    @media screen and (max-width: 800px) {
    width: 50px;
}
`
export const SkillInfoWrapper = styled.div`
    margin : auto;
`

export const SkillTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding : 4px;
`

export const SkillTitle = styled.span`
    font-size: 16px;
    font-weight: bold;

    @media screen and (max-width:800px) {
        font-size: 12px;
    }
`

export const SkillPercentage = styled.span`
    font-size: 16px;

    @media screen and (max-width:800px) {
        font-size: 12px;
    }
`

export const SkillbarWrapper = styled.div`
    position : relative;
    height: 16px;
    width: 320px;

    @media screen and (max-width:800px) {
        height: 16px;
        width: 180px;
    }
`

export const SkillbarBaseBox = styled.div`
    position: absolute;
    top : 0;
    left: 0;
    height : 100%;
    border-radius: 10px;
    background-color: #FBF6F3;
`

export const SkillbarBackground = styled(SkillbarBaseBox)`
    width : 100%;
    background-color: #FBF6F3;
    opacity: 0.5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Progress = styled(SkillbarBaseBox)`
    width: ${({ percent }) => percent}%;
    background-color: #F6C45A;
`
