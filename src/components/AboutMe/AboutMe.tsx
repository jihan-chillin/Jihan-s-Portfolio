import React from 'react'
import { 
    AboutContent,
    AboutContentWrapper,
    AboutWrapper, 
    CateName, 
    Moto, 
    Name, 
    Profile
} from './AboutMe.styles'

export function AboutMe () {
    return(
        <AboutWrapper>
            <CateName>About Me</CateName>
            <Moto>"좌우명 좌우명 좌우명 FE개발자"</Moto>
            
            <AboutContentWrapper>
                <Profile src='/Proflie_light.png'/>
                <AboutContent>
                    <Name>김지한 (jihan kim)</Name>
                </AboutContent>
            </AboutContentWrapper>
        </AboutWrapper>
    )
}