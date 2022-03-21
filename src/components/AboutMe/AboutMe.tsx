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

import { ImageTextInput } from '../Common/views/ImageTextInfo'

export function AboutMe () {
    return(
       <AboutWrapper id ="about" style={{height : '720px', border : '1px solid black'}}>
            <CateName>About Me</CateName>
            <Moto>"좌우명 좌우명 좌우명 FE개발자"</Moto>
            <AboutContentWrapper>
                <Profile src='/proflie_light.png'/>
                <AboutContent>
                    <Name>김지한 (jihan kim)</Name>
                    <ImageTextInput imagePath={'./mail.png'} info={'kimjihan77@naver.com'}/>
                    <ImageTextInput page={'https://github.com/jihan-chillin'} imagePath={'./github.png'} info={'https://github.com/jihan-chillin'}/>
                    <ImageTextInput page={'https://blog.naver.com/kimjihan77'} imagePath={'./blog.png'} info={'kimjihan77@naver.com'}/>
                </AboutContent>
            </AboutContentWrapper>
       </AboutWrapper>
    )
}