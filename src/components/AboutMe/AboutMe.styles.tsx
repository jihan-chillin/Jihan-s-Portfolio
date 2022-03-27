import styled from "styled-components";

export const AboutWrapper = styled.div`
    background-color: ${(props)=>props.theme.theme_5};
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

export const CateName = styled.span`
    display: inline-block;
    margin-top: 76px;
    font-size: 20px;
    color: ${(props)=>props.theme.theme_2};
    opacity: 0.5;

    @media screen and (max-width : 800px){
        margin-top: 24px;
    }
`

export const Moto = styled.span`
    display: block;
    margin: 16px 0 100px 0;
    font-size: 40px;
    font-weight: bold;
    color : ${(props)=>props.theme.theme_4};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.);

    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const AboutContentWrapper = styled.div`
    display: flex;
    max-width: 780px;
    margin: 0 auto;
    padding-bottom: 160px;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        display: block;
        padding : 16px 0 !important;
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
    padding : 30px 0;
    max-width: 360px;

    @media screen and (max-width: 800px) {
        margin: 0 auto;
        align-items : center;
    }
`

export const Name = styled.span`
    display: flex;
    font-size: 32px;
    font-weight: bold;
    color: ${(props)=>props.theme.theme_1};

    @media screen and (max-width: 800px) {
        display: inline-block;
        font-size : 24px
    }
`