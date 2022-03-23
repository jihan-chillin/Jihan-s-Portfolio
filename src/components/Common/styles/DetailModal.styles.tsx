import styled from "styled-components";

export const ModalWrapper = styled.div`
    width : 440px;
    margin: 60px auto;
    background-color: #E7E7E7 ;
    border-radius: 20px;

    @media screen and (max-width: 800px) {
        width: 300px;
        margin: 40px auto;
    }
`

export const ModalCloseButtonWrapper = styled.div`
    position: relative;
    margin-bottom: 20px;
`
export const ModalCloseButton = styled.img`
    display: block;
    position: absolute;
    top : 20px;
    right: 20px;
    width: 16px;
    cursor: pointer;
`

export const ModalContentWrapper = styled.div`
    padding : 60px;
    text-align: left;

    @media screen and (max-width: 800px) {
        padding : 40px; 
    }
`

export const ModalContentTitle = styled.span`
    display: inline-block;
    margin-top : 16px;
    font-size: 16px;
    font-weight: bold;
    color : #4B4B4B;

    @media screen and (max-width: 800px) {
        font-size: 14px;
    }
`

export const ModalContentInfo = styled.div`
    margin-top: 8px;
    font-size: 14px;
    color : #848484;

    @media screen and (max-width: 800px) {
        font-size: 12px;
    }
`