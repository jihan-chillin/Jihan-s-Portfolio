import styled from "styled-components";

export const AboutWrapper = styled.div`
    background-color: ${(props)=>props.theme.theme_5}; 
`

export const CateName = styled.span`
    display: inline-block;
    margin-top: 76px;
    font-size: 20px;
    color: ${(props)=>props.theme.theme_2};
    opacity: 0.5;

    @media screen and (max-width : 800px){
        margin-top: 60px;
    }
`

export const AboutContentWrapper = styled.div`
    display: flex;
    max-width: 1000px;
    margin: 68px auto 0 auto;
    padding-bottom: 100px;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1200px) {
        display: block;
        padding : 16px 0 !important;
    }
`

export const ProfileContainer = styled.div`
    height : 296px;
    width : 296px;
    border-radius : 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color : ${(props)=>props.theme.theme_3};

    @media screen and (max-width : 1200px){
        height : 240px;
        width : 240px;
        border-radius : 50%;
        margin: 0 auto;
    }
`

export const Profile = styled.img`
    vertical-align: middle;
    width: 296px;

    @media screen and (max-width: 1200px) {
        width: 240px;
    }
`

export const WholeInfoWrapper = styled.div`
`

export const LineWrapper = styled.div`
    display: flex;
    width: 600px;
    margin-left: 60px;
    margin-top : 52px ;
    justify-content: space-around;

    @media screen and (max-width: 1200px) {
        margin: 60px auto;
    }

    @media screen and (max-width: 800px) {
        display: block;
        margin: 0 auto;
    }
`

// 여기부터 Info 단위
export const InfoWrapper = styled.div`
    display: flex;
    width: 260px;

    @media screen and (max-width: 800px) {
        text-align: center;
        margin: 40px auto;
    }
`

export const InfoIcon= styled.img<{dark:boolean}>`
    margin-right: 20px;
    width : 32px;
    height: 32px;
    filter : ${(props)=>props.dark ? 'invert(100%)' : 'invert(0)'};
`

export const InfoContentWrapper = styled.div`
    max-width: 200px;
    text-align: left;
`

export const InfoTitle = styled.span`
    font-size: 24px;
    font-weight: bold;
    color : ${(props)=>props.theme.theme_4};
`

export const InfoContent = styled.div`
    font-size: 18px;
    font-weight: bold;
    color : ${(props)=>props.theme.theme_6};
`