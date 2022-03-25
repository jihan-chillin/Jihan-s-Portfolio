import React, {useCallback, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ButtonWrapper } from '../Common/styles/RoundBtn.styles';
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

export function Sidebar() {
    const {me} = useSelector((state)=> state.user)

    // 사이드바 가져오기 
    const [showSidebar, setShowSidebar] = useState(false);
    const ToggleSidebar = useCallback(()=>{
        setShowSidebar((prev) => !prev);
    },[showSidebar])

    return(
        <>
            <More src="/more.png" onClick={ToggleSidebar}/>
                
            <SidebarNav showSidebar={showSidebar}>
                <CloseButtonWrapper>
                    <CloseButton src="./closebtn.png" onClick={ToggleSidebar}/>
                </CloseButtonWrapper>
                {me 
                    ? (
                        <SidebarContentWrapper>
                        <InfoText><span style={{fontWeight : 'bold'}}>{me.nickname}</span> 님</InfoText>
                        <InfoText>안녕하세요!</InfoText>
                        <RoundButton/>
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
                </SidebarMenuWrapper>
                
                <SidebarContentWrapper>
                    <SidebarMenuTitle>mode</SidebarMenuTitle>
                    <SidebarModeItemWrapper>
                        <SidebarModeImg src="/light.png"/> 
                        <SidebarModeImg src="/dark.png"/> 
                    </SidebarModeItemWrapper>
                    {me 
                        ? (
                            <>
                                <SidebarModeItemWrapper>
                                    <SidebarModeText>봄</SidebarModeText>
                                    <SidebarModeText>여름</SidebarModeText>
                                </SidebarModeItemWrapper>
                                <SidebarModeItemWrapper>
                                    <SidebarModeText>가을</SidebarModeText>
                                    <SidebarModeText>겨울</SidebarModeText>
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