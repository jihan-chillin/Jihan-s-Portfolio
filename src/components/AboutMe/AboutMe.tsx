import React from 'react'
import { 
    AboutContent,
    AboutContentWrapper,
    AboutWrapper, 
    CateName, 
    Moto, 
    Name, 
    Profile,
} from './AboutMe.styles'

import { ImageTextInput } from '../Common/views/ImageTextInfo'
import { useSelector } from 'react-redux'

export function AboutMe () {
    const {
        moto,
        profile,
        InfoAboutMe
    } = useSelector((state:any)=>state.about);


    return(
       <AboutWrapper id ="about">
            <CateName>About Me</CateName>
            <Moto>{moto}</Moto>
            <AboutContentWrapper>
                <Profile src={profile}/>
                <AboutContent>
                    <Name>김지한 (jihan kim)</Name>
                    {InfoAboutMe.map((value)=>(
                        <ImageTextInput page={value.goLink} imagePath={value.icon} info={value.infoText}/> 
                    ))}
                </AboutContent>
            </AboutContentWrapper>
       </AboutWrapper>
    )
}