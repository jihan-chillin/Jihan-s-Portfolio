import React from 'react'
import { 
    AboutContent,
    AboutContentWrapper,
    AboutWrapper, 
    CateName, 
    Profile,
    ProfileContainer,
    Moto,
    MotoEmph,
    Introduction
} from './AboutMe.styles'

import { useSelector } from 'react-redux'

export function AboutMe () {
    const {
        profile,
    } = useSelector((state:any)=>state.about);

    return(
       <AboutWrapper id ="about">
            <CateName>About Me</CateName>
            <AboutContentWrapper>
                <ProfileContainer>
                    <Profile src={profile}/>
                </ProfileContainer>
                <AboutContent>
                    <Moto>꾸준한 성장을 목표로 하는</Moto>
                    <Moto>프론트엔드 개발자 <MotoEmph>김지한</MotoEmph>입니다.</Moto>
                    <Introduction>Typescript와 React를 메인으로 프론트엔드 개발에 관심을 가지고 있는 주니어 프론트엔드 개발자입니다. 꾸준히 성장하는 개발자가 되기 위해, 팀 프로젝트 이외에 개인 프로젝트를 통하여 이론과 실무감각을 함께 쌓으려 노력하고 있습니다.</Introduction>
                </AboutContent>
            </AboutContentWrapper>
       </AboutWrapper>
    )
}