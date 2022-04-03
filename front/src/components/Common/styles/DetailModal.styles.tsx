import styled from "styled-components";

export const ModalWrapper = styled.div`
    position : absolute;
    top : 50%;
    left : 50%;
    transform: translate(-96%, -50%);
    display: inline-block;
    width : 440px;
    z-index : 1005;
    margin-left:200px;
    background-color: #f2f2f2;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 800px) {
        position: absolute;
        top : 50%;
        left : 50%;
        transform: translate(-50%, -50%);
        width: 280px;
        margin: 40px auto;
    }
`

export const ModalCloseButtonWrapper = styled.div`
    position: relative;
`

export const ModalCloseButton = styled.img`
    display: block;
    position: absolute;
    top : 30px;
    right: 30px;
    width: 16px;
    filter : ${(props:any)=>props.dark ? 'invert(100%)' : 'invert(0%)'};
    cursor: pointer;
`

export const ModalContentWrapper = styled.div`
    padding : 72px 60px;
    text-align: left;

    @media screen and (max-width: 800px) {
        padding : 60px 40px; 
    }
`

export const ModalContentTitle = styled.span`
    display: inline-block;
    margin-top : 16px;
    font-size: 16px;
    font-weight: bold;
    color : ${(props)=>props.theme.theme_3};

    @media screen and (max-width: 800px) {
        font-size: 14px;
    }
`

export const ModalContentInfo = styled.div`
    margin-top: 8px;
    font-size: 14px;
    color : #4b4b4b;
    
    @media screen and (max-width: 800px) {
        font-size: 12px;
    }
`