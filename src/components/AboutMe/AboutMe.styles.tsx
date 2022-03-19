import styled from "styled-components";

export const AboutWrapper = styled.div`
    
`

export const CateName = styled.span`
    font-size: 20px;
    color: #4b4b4b;
    opacity: 0.5;
`

export const Moto = styled.span`
    display: block;
    margin-top: 16px;
    font-size: 28px;
    color : #4b4b4b;
`

export const AboutContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 560px;
    margin: 0 auto;
    background-color: blue;

    @media screen and (max-width: 600px) {
        width : 200px;
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