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
        width: 32px;
        height: 32px;
        bottom : 1.5rem;
        right : 1.5rem;
    }
`

export const TopTriangle = styled.img`
    display: block;
    margin: 10px auto;
    width: 28px;
    filter : ${(props)=>props.dark ? 'invert(100%)' : 'invert(0%)'};
    
    @media screen and (max-width: 800px) {
        margin: 7px auto;
        width: 18px;
        height: 18px;   
    }
`