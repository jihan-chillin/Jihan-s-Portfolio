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
    margin-top: 16px;
    font-size: 40px;
    color : #4b4b4b;

    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const AboutContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    margin: 0 auto;
    border : 1px solid black;

    @media screen and (max-width: 800px) {
        width : 240px;
    }
`

export const Profile = styled.img`
    vertical-align: middle;
    width: 280px;
`

export const AboutContent = styled.div`
    max-width: 400px;
    background-color: red;
`

export const Name = styled.span`
    font-size: 20px;
    color: #4b4b4b;
`