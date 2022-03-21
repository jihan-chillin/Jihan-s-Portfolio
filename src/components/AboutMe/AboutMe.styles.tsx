import styled from "styled-components";

export const AboutWrapper = styled.div`
`

export const CateName = styled.span`
    display: inline-block;
    margin-top: 76px;
    font-size: 20px;
    color: #4b4b4b;
    opacity: 0.5;

    @media screen and (max-width : 800px){
        margin-top: 24px;
    }
`

export const Moto = styled.span`
    display: block;
    margin: 16px 0 100px 0;
    font-size: 40px;
    color : #4b4b4b;

    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const AboutContentWrapper = styled.div`
    display: flex;
    max-width: 800px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    /* border : 1px solid black; */

    @media screen and (max-width: 800px) {
        display: block;
        margin: 16px auto;
    }
`

export const Profile = styled.img`
    vertical-align: middle;
    width: 320px;
`

export const AboutContent = styled.div`
    padding : 30px 0;
    max-width: 360px;

    @media screen and (max-width: 800px) {
        margin: 0 auto;
    }
`

export const Name = styled.span`
    display: flex;
    font-size: 32px;
    font-weight: bold;
    color: #4b4b4b;
`

export const AboutIconInfoWrapper = styled.div`

`

export const AboutIcon = styled.img`

`

export const AboutInfo = styled.span`

`