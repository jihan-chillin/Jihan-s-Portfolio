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
       <AboutWrapper id ="about" style={{height : '720px', border : '1px solid black'}}>
            <CateName>About Me</CateName>
            <Moto>"좌우명 좌우명 좌우명 FE개발자"</Moto>
            
            {/* <AboutContentWrapper id ="about"> */}
            <AboutContentWrapper>
                <Profile src='/proflie_light.png'/>
                <AboutContent>
                    <Name>김지한 (jihan kim)</Name>
                </AboutContent>
            </AboutContentWrapper>
       </AboutWrapper>
            
       
    )
}