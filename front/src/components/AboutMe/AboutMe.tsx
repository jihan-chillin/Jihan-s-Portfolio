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
                    <Introduction>
                    블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라
                    </Introduction>
                </AboutContent>
            </AboutContentWrapper>
       </AboutWrapper>
    )
}