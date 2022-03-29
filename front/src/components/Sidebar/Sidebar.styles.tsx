import styled from "styled-components";
import {Link} from 'react-scroll';

export const More = styled.img`
    vertical-align: middle;
    width: 28px;
    filter : ${(props:any)=>props.dark ? 'invert(100%)' : 'invert(0%)'};
    cursor: pointer;
`

export const SidebarNav = styled.div<{showSidebar : boolean}>`
    position: fixed;
    top : 0;
    right : ${(props)=>props.showSidebar ? '0' : '-260px'};
    padding : 30px;
    width: 260px;
    height: 100vh;
    z-index: 1001;
    border-left : 1px solid ${(props)=>props.theme.theme_14};
    background-color: ${(props)=>props.theme.theme_11};
    overflow: scroll ;
`
export const CloseButtonWrapper = styled.div`
    position: relative;
    margin-bottom: 20px;
`
export const CloseButton = styled.img`
    display: block;
    position: absolute;
    right: 0;
    width: 16px;
    filter : ${(props:any)=>props.dark ? 'invert(100%)' : 'invert(0%)'};
    cursor: pointer;
`

export const SidebarContentWrapper = styled.div`
    text-align: center;
    padding : 18px 0;
    max-height: 260px;
    border-bottom: 3px solid ${(props)=>props.theme.theme_14};
`
export const InfoText = styled.span`
    display: block;
    margin-top: 3px;
    color : ${(props)=>props.theme.theme_13};
`

export const SidebarMenuWrapper = styled.div`
    display: none;

    @media screen and (max-width: 800px) {
        display: block;
        text-align: center;
        padding : 18px 0;
        max-height: 260px;
        border-bottom: 3px solid ${(props)=>props.theme.theme_14};
    }
`

export const SidebarMenuTitle = styled.span`
    display: flex;
    font-weight: bold;
    color : ${(props)=>props.theme.theme_1};
`
export const SidebarMenuItem = styled(Link)`
    display: block;
    line-height: 32px;
    margin : 14px 0;
    font-size: 16px;
    color : ${(props)=>props.theme.theme_13};
    cursor: pointer;

    &:hover{
        color : ${(props)=>props.theme.theme_3};
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
    filter : ${(props:any)=>props.dark ? 'invert(100%)' : 'invert(0%)'};

    &:hover{
        filter: contrast(200%) ${(props:any)=>props.dark ? 'invert(100%)' : 'invert(0%)'};
    }
`

export const SidebarModeText = styled.span`
    display: inline-block;
    font-size: 16px;
    color : ${(props)=>props.theme.theme_13};
    cursor: pointer;

    &:hover{
        color: ${(props)=>props.theme.theme_3};
        font-weight: bold;
    }
`