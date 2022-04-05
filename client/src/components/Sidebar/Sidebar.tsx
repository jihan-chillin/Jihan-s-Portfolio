import React, {useCallback, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RoundButton } from '../Common/views/RoundBtn';

import { 
    More,
    SidebarNav,
    CloseButtonWrapper,
    CloseButton,
    InfoText,
    SidebarContentWrapper,
    SidebarMenuWrapper,
    SidebarMenuItem,
    SidebarMenuTitle,
    SidebarModeItemWrapper,
    SidebarModeImg,
    SidebarModeText,
} from './Sidebar.styles'

import {
    REMOTE_THEME_REQUEST
  } from '../../../reducers/themeReducer'
import theme from '../../styles/theme.styles';

export function Sidebar() {
    const {color} = useSelector((state:any)=>state.theme)
    const dark:any = color.theme_1 == '#F2F2F2' 

    const dispatch = useDispatch();
    console.log(theme.color.light, "theme");
    const {me} = useSelector((state:any)=> state.user)

    // 사이드바 가져오기 
    const [showSidebar, setShowSidebar] = useState(false);
    const ToggleSidebar = useCallback(()=>{
        setShowSidebar((prev) => !prev);
    },[showSidebar])

    // 라이트 - 다크 / 사계절모드 dispatch
    const remoteTheme = useCallback((themecolor)=>{
        dispatch({
            type : REMOTE_THEME_REQUEST,
            data : theme.color[themecolor]
        })
    },[]);


    return(
        <>
            <More src="/more.png" dark={dark} onClick={ToggleSidebar}/>
                
            <SidebarNav showSidebar={showSidebar}>
                <CloseButtonWrapper>
                    <CloseButton src="./closebtn.png" dark={dark} onClick={ToggleSidebar}/>
                </CloseButtonWrapper>
                {!me 
                    ? (
                        <SidebarContentWrapper>
                            <InfoText><span style={{fontWeight : 'bold', color : color.theme_1}}>OOO</span> 님</InfoText>
                            <InfoText><span style={{fontWeight : 'bold'}}>사계절 모드</span>를</InfoText>
                            <InfoText>경험해보세요!</InfoText>
                            {/* <RoundButton/> */}
                        </SidebarContentWrapper>
                    )
                    
                    : (
                        <SidebarContentWrapper>
                        <InfoText>로그인 하여</InfoText>
                        <InfoText><span style={{fontWeight : 'bold'}}>사계절 모드</span>를</InfoText>
                        <InfoText>경험해보세요!</InfoText>
                        <RoundButton/>
                        </SidebarContentWrapper>
                        
                    )}
                <SidebarMenuWrapper>
                    <SidebarMenuTitle>menu</SidebarMenuTitle>
                        <SidebarMenuItem to="about" spy={true} smooth={true}>About Me</SidebarMenuItem>
                        <SidebarMenuItem to="skill" spy={true} smooth={true}>Skills</SidebarMenuItem>
                        <SidebarMenuItem to="project" spy={true} smooth={true}>Projects</SidebarMenuItem>
                        <SidebarMenuItem to="timeline" spy={true} smooth={true}>Timeline</SidebarMenuItem>
                        <SidebarMenuItem to="contact" spy={true} smooth={true}>Contact</SidebarMenuItem>
                </SidebarMenuWrapper>
                
                <SidebarContentWrapper>
                    <SidebarMenuTitle>mode</SidebarMenuTitle>
                    <SidebarModeItemWrapper>
                        <SidebarModeImg dark={dark} onClick={()=>remoteTheme('light')} src="/light.png"/> 
                        <SidebarModeImg dark={dark} onClick={()=>remoteTheme('dark')} src="/dark.png"/> 
                    </SidebarModeItemWrapper> 
                    {!me 
                        ? (
                            <>
                                <SidebarModeItemWrapper>
                                    <SidebarModeText onClick={()=>remoteTheme('spring')}>봄</SidebarModeText>
                                    <SidebarModeText onClick={()=>remoteTheme('summer')}>여름</SidebarModeText>
                                </SidebarModeItemWrapper>
                                <SidebarModeItemWrapper>
                                    <SidebarModeText onClick={()=>remoteTheme('autumn')}>가을</SidebarModeText>
                                    <SidebarModeText onClick={()=>remoteTheme('winter')}>겨울</SidebarModeText>
                                </SidebarModeItemWrapper>
                            </>
                        ) : (
                            <></>
                        )
                    }
                </SidebarContentWrapper>
            </SidebarNav>
        </>
    )
}