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
        margin-top: 30px;
    }
`

export const AboutContentWrapper = styled.div`
    display: flex;
    max-width: 780px;
    margin: 0 auto;
    padding-bottom: 140px;
    align-items: center;
    justify-content: space-between;


    @media screen and (max-width: 800px) {
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

    @media screen and (max-width : 800px){
        height : 180px;
        width : 180px;
        border-radius : 50%;
        margin: 0 auto;
    }
`

export const Profile = styled.img`
    vertical-align: middle;
    width: 296px;

    @media screen and (max-width: 800px) {
        width: 180px;
    }
`

export const AboutContent = styled.div`
    margin-top: 60px;
    padding : 30px 0 30px 64px;
    border-left: 1px solid ${(props)=>props.theme.theme_4};
    width : 380px;

    @media screen and (max-width: 800px) {
        border : none;
        margin: 0 auto;
        padding : 30px 0;
    }
`

export const Moto = styled.div`
    font-size: 22px;
    color : ${(props)=>props.theme.theme_4};

    @media screen and (max-width: 800px) {
        font-size: 18px;
    }
`

export const MotoEmph = styled.span`
    font-weight: bold;
    color : ${(props)=>props.theme.theme_1};
`
export const Introduction = styled.div`
    margin-top: 24px;
    font-size: 18px;
    color : ${(props)=>props.theme.theme_4};

    @media screen and (max-width: 800px) {
        font-size: 14px;
    }
`