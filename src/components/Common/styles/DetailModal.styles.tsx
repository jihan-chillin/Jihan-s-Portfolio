import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: relative;
    width : 480px;
    height: 440px;
    margin: 0 auto;
    background-color: #E7E7E7 ;
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
    padding : 60px 80px;
    border: 1px solid black;
`

export const ModalContentTitle = styled.span`
    display: inline-block;
    margin-top : 16px;
    font-size: 16px;
    font-weight: bold;
    color : #4B4B4B;
`

export const ModalContentInfo = styled.div`
    margin-top: 8px;
    font-size: 14px;
    color : #848484;
`