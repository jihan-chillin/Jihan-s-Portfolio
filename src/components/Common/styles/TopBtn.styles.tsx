import styled from "styled-components";

export const TopButtonWrapper = styled.div`
    position: fixed;
    bottom : 3rem;
    right : 3rem;
    z-index: 1;
    width: 48px;
    height: 48px;
    background-color: ${(props)=>props.theme.theme_1};
    border-radius: 50%;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        font-size: 16px;
        bottom : 2rem;
        right : 2.5rem;
    }
`

export const TopTriangle = styled.img`
    display: block;
    margin: 10px auto;
    width: 28px;
`