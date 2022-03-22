import styled from "styled-components";

export const ImageTextWrapper = styled.div`
    display: flex;
    margin-top : 36px;
    @media screen and (max-width: 800px) {
        margin: 36px auto 0 auto;
        width: 300px;
    }
`

export const InfoImage = styled.img`
    display: inline-block;
    margin-right: 24px;
    width: 32px;
`

export const InfoText = styled.span`
    display: inline-block;
    font-size: 20px;

    @media screen and (max-width: 800px) {
        font-size: 16px;
    }

    &:hover{
        font-weight: bold;
    }
`