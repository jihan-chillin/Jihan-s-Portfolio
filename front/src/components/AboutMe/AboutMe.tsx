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

    const {color} = useSelector((state:any)=>state.theme)
    const dark = color.theme_1 == '#F2F2F2' 

    return(
       <AboutWrapper id ="about">
            <CateName>About Me</CateName>
            <AboutContentWrapper>
                <ProfileContainer>
                    <Profile src={profile}/>
                </ProfileContainer>
                <AboutContent dark={dark}>
                    <Moto dark={dark}>꾸준한 성장을 목표로 하는</Moto>
                    <Moto dark={dark}>프론트엔드 개발자 <MotoEmph>김지한</MotoEmph>입니다.</Moto>
                    <Introduction dark={dark}>
                    블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라블라블ㄹ라브라
                    </Introduction>
                </AboutContent>
            </AboutContentWrapper>
       </AboutWrapper>
    )
}