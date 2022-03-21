import React from "react"

import {
    HeaderWrapper, 
    LogoImage, 
    MenuItem, 
    MenuWrapper,
    More
} from './Header.styles'

export function Header (){
    return(
        <HeaderWrapper>
           <LogoImage src="/logo.png"/>
                <MenuWrapper>
                    <MenuItem to="about" spy={true} smooth={true}>About Me</MenuItem>
                    <MenuItem to="skill" spy={true} smooth={true}>Skills</MenuItem>
                    <MenuItem to="project" spy={true} smooth={true}>Projects</MenuItem>
                    <MenuItem to="timeline" spy={true} smooth={true}>Timeline</MenuItem>
                    <More src="/more.png"/>
               </MenuWrapper> 
        </HeaderWrapper>
    )
}

 