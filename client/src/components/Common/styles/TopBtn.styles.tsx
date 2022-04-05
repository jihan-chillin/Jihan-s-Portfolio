import styled from "styled-components";

export const TopButtonWrapper = styled.div`
    position: fixed;
    bottom : 1.5rem;
    right : 1.5rem;
    z-index: 1;
    width: 40px;
    height: 40px;
    background-color: ${(props)=>props.theme.theme_1};
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    @media screen and (max-width: 800px) {
        width: 32px;
        height: 32px;
        bottom : 1.5rem;
        right : 1.5rem;
    }
`

export const TopTriangle = styled.img<{dark:any}>`
    display: block;
    margin: 8px auto;
    width: 24px;
    filter : ${(props:any)=>props.dark ? 'invert(100%)' : 'invert(0%)'};
    
    @media screen and (max-width: 800px) {
        margin: 7px auto;
        width: 18px;
        height: 18px;   
    }
`