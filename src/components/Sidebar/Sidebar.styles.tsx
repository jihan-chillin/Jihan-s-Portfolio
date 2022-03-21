import styled from "styled-components";
import {Link} from 'react-scroll';

export const More = styled.img`
    vertical-align: middle;
    width: 24px;
    cursor: pointer;
`

export const SidebarNav = styled.div<{showSidebar : boolean}>`
    position: fixed;
    top : 0;
    right : ${(props)=>props.showSidebar ? '0' : '-260px'};
    padding : 30px;
    width: 260px;
    height: 100vh;
    z-index: 1;
    border : 1px solid #AAAAAA;
    background-color: white;
`
export const CloseButtonWrapper = styled.div`
    position: relative;
`
export const CloseButton = styled.img`
    display: inline-block;
    position: absolute;
    right: 0;
    width: 16px;
    cursor: pointer;
`

export const InfoText = styled.span`
    display: block;
    margin-top: 3px;
`

export const SidebarContentWrapper = styled.div`
    text-align: center;
    padding : 18px 0;
    max-height: 260px;
    border-bottom: 3px solid #AAAAAA;
`

export const SidebarMenuWrapper = styled.div`
    display: none;

    @media screen and (max-width: 800px) {
        display: block;
        text-align: center;
        padding : 18px 0;
        max-height: 260px;
        border-bottom: 3px solid #AAAAAA;
    }
`

export const SidebarMenuTitle = styled.span`
    display: flex;
    font-weight: bold;
`
export const SidebarMenuItem = styled(Link)`
    display: block;
    line-height: 32px;
    margin : 14px 0;
    font-size: 16px;
    color : #4b4b4b;
    cursor: pointer;

    &:hover{
        color : #000000;
        font-weight: bold;
    }
`
export const SidebarModeItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 120px;
    margin: 28px auto;
`

export const SidebarModeImg = styled.img`
    display: inline-block;
    width: 24px;
    cursor: pointer;

    &:hover{
        // 색상 변하게 하는 거 
    }
`

export const SidebarModeText = styled.span`
    display: inline-block;
    font-size: 16px;
    color : #4b4b4b;
    cursor: pointer;

    &:hover{
        color : #000000;
        font-weight: bold;
    }
`