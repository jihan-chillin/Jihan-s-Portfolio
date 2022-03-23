import styled from "styled-components";

export const TopButtonWrapper = styled.div`
    position: fixed;
    bottom : 3rem;
    right : 3rem;
    z-index: 1;
    width: 48px;
    height: 48px;
    background-color: #4b4b4b;
    border-radius: 50%;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        font-size: 16px;
        bottom : 2rem;
        right : 2rem;
    }
`

export const TopTriangle = styled.img`
    display: block;
    margin: 10px auto;
    width: 28px;
`